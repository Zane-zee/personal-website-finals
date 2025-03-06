import React from 'react';
import '../styles/Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      name: "Going to the Gym",
      description: "Maintaining physical fitness and health through regular gym workouts.",
      experience: "Regular activity",
      favorite: "Strength training and cardio workouts",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 5v14"></path>
          <path d="M18 5v14"></path>
          <path d="M2 12h20"></path>
          <path d="M2 7h4"></path>
          <path d="M18 7h4"></path>
          <path d="M2 17h4"></path>
          <path d="M18 17h4"></path>
        </svg>
      )
    },
    {
      id: 2,
      name: "Playing Video Games",
      description: "Enjoying various video games for entertainment and relaxation.",
      experience: "Long-time gamer",
      favorite: "Action and adventure games",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          <path d="M6 12h4"></path>
          <path d="M8 10v4"></path>
          <circle cx="17" cy="10" r="1"></circle>
          <circle cx="15" cy="12" r="1"></circle>
        </svg>
      )
    },
    {
      id: 3,
      name: "Streaming",
      description: "Creating and sharing content through online streaming platforms.",
      experience: "Content creator",
      favorite: "Gaming and tech content",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7l-7 5 7 5V7z"></path>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      )
    }
  ];

  return (
    <section className="hobbies-section section">
      <div className="container">
        <div className="section-title">
          <h2>Hobbies & Interests</h2>
        </div>
        <div className="section-subtitle">
          <p>Discover the activities I'm passionate about outside of my professional life.</p>
        </div>

        <div className="hobbies-grid">
          {hobbies.map(hobby => (
            <div className="hobby-card card" key={hobby.id}>
              <div className="hobby-icon">{hobby.icon}</div>
              <h3>{hobby.name}</h3>
              <p>{hobby.description}</p>
              <div className="hobby-details">
                <div className="detail-item">
                  <span className="detail-label">Experience:</span>
                  <span className="detail-value">{hobby.experience}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Favorite:</span>
                  <span className="detail-value">{hobby.favorite}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hobbies-quote">
          <blockquote>
            "We don't stop playing because we grow old; we grow old because we stop playing."
            <cite>— George Bernard Shaw</cite>
          </blockquote>
        </div>

        <div className="hobbies-benefits">
          <h3>Benefits of My Hobbies</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>Physical Health</h4>
              <p>Regular gym workouts help maintain physical fitness, build strength, and improve overall health.</p>
            </div>
            <div className="benefit-card">
              <h4>Mental Relaxation</h4>
              <p>Video games provide a way to unwind, reduce stress, and enjoy entertainment after busy days.</p>
            </div>
            <div className="benefit-card">
              <h4>Creative Expression</h4>
              <p>Streaming allows for creative content creation, sharing experiences, and connecting with others.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies; 