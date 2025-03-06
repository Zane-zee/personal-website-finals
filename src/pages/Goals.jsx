import React, { useState } from 'react';
import '../styles/Goals.css';

const Goals = () => {
  const [activeCategory, setActiveCategory] = useState('professional');

  const goals = {
    professional: [
      {
        id: 1,
        title: "Become a Successful Software Developer",
        description: "Develop the skills and knowledge needed to become a proficient software developer, creating applications that positively impact people's lives.",
        timeline: "Ongoing",
        progress: 35,
        steps: [
          "Master programming fundamentals in Java and Python",
          "Develop proficiency in mobile app development",
          "Learn web development technologies",
          "Build a portfolio of meaningful projects"
        ]
      },
      {
        id: 2,
        title: "Create Impactful Applications",
        description: "Design and develop applications that solve real problems and make a positive difference in users' lives.",
        timeline: "Long-term",
        progress: 25,
        steps: [
          "Identify problems that can be solved with technology",
          "Design user-friendly interfaces with Figma",
          "Implement solutions using appropriate technologies",
          "Gather user feedback and continuously improve"
        ]
      },
      {
        id: 3,
        title: "Expand Technical Knowledge",
        description: "Continuously learn new technologies and methodologies to stay current in the rapidly evolving tech field.",
        timeline: "Ongoing",
        progress: 30,
        steps: [
          "Follow industry trends and emerging technologies",
          "Take online courses in areas of interest",
          "Participate in coding challenges and hackathons",
          "Build projects using new technologies"
        ]
      }
    ],
    educational: [
      {
        id: 1,
        title: "Complete IT Degree",
        description: "Successfully complete my Bachelor's degree in Information Technology with a focus on Mobile and Internet Technologies.",
        timeline: "2-3 years",
        progress: 40,
        steps: [
          "Excel in core IT courses",
          "Focus on mobile and internet technology subjects",
          "Participate in relevant extracurricular activities",
          "Maintain good academic standing"
        ]
      },
      {
        id: 2,
        title: "Gain Practical Experience",
        description: "Supplement academic learning with hands-on experience through projects, internships, and collaborative work.",
        timeline: "Concurrent with studies",
        progress: 35,
        steps: [
          "Work on personal development projects",
          "Seek internship opportunities",
          "Collaborate with peers on team projects",
          "Apply classroom knowledge to real-world problems"
        ]
      },
      {
        id: 3,
        title: "Specialized Certifications",
        description: "Obtain relevant certifications to validate skills and enhance career prospects in specific areas of interest.",
        timeline: "As appropriate",
        progress: 15,
        steps: [
          "Identify valuable certifications in my field",
          "Prepare for certification exams",
          "Apply certified knowledge in projects",
          "Keep certifications current"
        ]
      }
    ],
    personal: [
      {
        id: 1,
        title: "Maintain Work-Life Balance",
        description: "Balance academic and professional pursuits with personal interests and well-being.",
        timeline: "Ongoing",
        progress: 60,
        steps: [
          "Dedicate time to gym workouts for physical health",
          "Enjoy video games for relaxation and entertainment",
          "Develop streaming content as a creative outlet",
          "Practice time management techniques"
        ]
      },
      {
        id: 2,
        title: "Build Professional Network",
        description: "Develop connections with peers, mentors, and industry professionals to create a supportive network.",
        timeline: "Ongoing",
        progress: 30,
        steps: [
          "Attend industry events and meetups",
          "Participate in student organizations",
          "Connect with professionals online",
          "Seek mentorship opportunities"
        ]
      },
      {
        id: 3,
        title: "Contribute to Community",
        description: "Use my skills and knowledge to give back to the community and help others.",
        timeline: "Long-term",
        progress: 20,
        steps: [
          "Volunteer technical skills for community projects",
          "Mentor junior students in technology",
          "Participate in open-source projects",
          "Create educational content to share knowledge"
        ]
      }
    ]
  };

  return (
    <section className="goals-section section">
      <div className="container">
        <div className="section-title">
          <h2>My Goals</h2>
        </div>
        <div className="section-subtitle">
          <p>Explore my personal and professional aspirations that drive me forward.</p>
        </div>

        <div className="goals-categories">
          <button 
            className={`category-btn ${activeCategory === 'professional' ? 'active' : ''}`}
            onClick={() => setActiveCategory('professional')}
          >
            Professional
          </button>
          <button 
            className={`category-btn ${activeCategory === 'educational' ? 'active' : ''}`}
            onClick={() => setActiveCategory('educational')}
          >
            Educational
          </button>
          <button 
            className={`category-btn ${activeCategory === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveCategory('personal')}
          >
            Personal
          </button>
        </div>

        <div className="goals-container">
          {goals[activeCategory].map((goal) => (
            <div className="goal-card card" key={goal.id}>
              <h3 className="goal-title">{goal.title}</h3>
              <p className="goal-description">{goal.description}</p>
              
              <div className="goal-timeline">
                <span className="timeline-label">Timeline:</span>
                <span className="timeline-value">{goal.timeline}</span>
              </div>
              
              <div className="goal-progress">
                <div className="progress-label">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="goal-steps">
                <h4>Action Steps:</h4>
                <ul>
                  {goal.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="goals-reflection">
          <h3>Reflection & Growth</h3>
          <p>
            As an IT student specializing in Mobile and Internet Technologies, my primary goal is to become a successful 
            software developer who creates applications that positively impact people's lives. This vision drives my 
            educational and professional decisions.
          </p>
          <p>
            I believe that technology has the power to solve problems and improve quality of life. By developing my skills 
            in programming, design, and development, I aim to contribute meaningful solutions to the digital world while 
            maintaining a balanced approach to personal growth and well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Goals; 