import React, { useState, useEffect } from 'react';
import '../styles/Feedback.css';
import { supabase } from '../utils/supabaseClient';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [messages, setMessages] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch messages on component mount
  useEffect(() => {
    fetchMessages();
    
    // Set up real-time listener for new messages
    const subscription = supabase
      .channel('public:feedback')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'feedback' 
      }, (payload) => {
        // Add the new message to the messages state
        setMessages(prevMessages => [payload.new, ...prevMessages]);
      })
      .subscribe();
    
    // Clean up subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Fetch messages from Supabase
  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to load messages. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Insert new message into Supabase
        const { data, error } = await supabase
          .from('feedback')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              message: formData.message
            }
          ]);
        
        if (error) {
          throw error;
        }
        
        // Clear form
        setFormData({ name: '', email: '', message: '' });
        setSubmitSuccess(true);
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } catch (error) {
        console.error('Error submitting feedback:', error);
        setErrors({ submit: 'Failed to submit feedback. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="feedback-section section">
      <div className="container">
        <div className="section-title">
          <h2>Feedback</h2>
        </div>
        <div className="section-subtitle">
          <p>I'd love to hear your thoughts! Leave a message or read what others have shared.</p>
        </div>

        <div className="feedback-container">
          <div className="feedback-form-container">
            <h3>Leave a Message</h3>
            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}
              
              <button 
                type="submit" 
                className="btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Posting...' : 'Post a Message'}
              </button>
              
              {submitSuccess && (
                <div className="success-message">
                  Your message has been posted successfully!
                </div>
              )}
            </form>
          </div>
          
          <div className="messages-container">
            <h3>Recent Messages</h3>
            <div className="messages-list">
              {isLoading ? (
                <div className="loading-messages">Loading messages...</div>
              ) : error ? (
                <div className="error-message">{error}</div>
              ) : messages.length > 0 ? (
                messages.map((msg) => (
                  <div className="message-card card" key={msg.id}>
                    <div className="message-header">
                      <h4>{msg.name}</h4>
                      <span className="message-date">{formatDate(msg.created_at)}</span>
                    </div>
                    <p className="message-content">{msg.message}</p>
                    <p className="message-email">{msg.email}</p>
                  </div>
                ))
              ) : (
                <p className="no-messages">No messages yet. Be the first to leave feedback!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback; 