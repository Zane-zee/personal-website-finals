import React from 'react';
import '../styles/AboutMe.css';
import profileImage from '../assets/images/profile.png';

const AboutMe = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="content-wrapper">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div className="section-subtitle">
            <p>Get to know me better - my background, interests, and what drives me.</p>
          </div>

          <div className="about-content">
            <div className="about-image">
              <div className="image-container">
                <img src={profileImage} alt="Zane's Profile" className="profile-image" />
              </div>
            </div>
            
            <div className="about-text">
              <h3>Hello, I'm <span className="highlight">John Zane Baluyan</span></h3>
              <p className="lead">A passionate IT student specializing in Mobile and Internet Technologies, dedicated to creating innovative solutions.</p>
              
              <p>
                I am currently pursuing my education in the field of Information Technology with a focus on Mobile and Internet Technologies.
                My journey in the tech world has been driven by curiosity and a desire to create meaningful solutions that can positively impact people's lives.
              </p>
              
              <p>
                When I'm not coding or working on projects, you can find me at the gym, playing video games, or streaming content online.
                I believe in maintaining a balanced life that nurtures both professional growth and personal well-being.
              </p>
              
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-title">Name:</span>
                  <span className="info-value">John Zane Baluyan</span>
                </div>
                <div className="info-item">
                  <span className="info-title">Education:</span>
                  <span className="info-value">Asia Pacific College (2nd Year)</span>
                </div>
                <div className="info-item">
                  <span className="info-title">Field:</span>
                  <span className="info-value">IT - Mobile and Internet Technologies</span>
                </div>
                <div className="info-item">
                  <span className="info-title">Interests:</span>
                  <span className="info-value">Software Development, Mobile Apps, Gym, Gaming, Streaming</span>
                </div>
              </div>
              
              <div className="about-cta">
                <a href="#" className="btn">Download Resume</a>
                <a href="#" className="btn btn-secondary">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="content-wrapper">
          <div className="skills-section">
            <h3 className="text-center mb-4">My Skills</h3>
            
            <div className="skills-container">
              <div className="skill-category">
                <h4>Technical Skills</h4>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">Java</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Python</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Figma</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Android Studio</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Soft Skills</h4>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">Communication</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Problem Solving</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Teamwork</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Creativity</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 