import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    {
      id: 1,
      name: "Java Programming",
      level: "Basic",
      description: "Familiar with fundamental Java programming concepts and syntax.",
      details: [
        "Understanding of core Java concepts",
        "Experience with basic Java syntax and structure",
        "Knowledge of object-oriented programming principles in Java",
        "Ability to write simple Java applications"
      ],
      technologies: ["Java SE", "Object-Oriented Programming", "Basic Algorithms"]
    },
    {
      id: 2,
      name: "Python Programming",
      level: "Basic",
      description: "Knowledge of Python programming fundamentals and basic applications.",
      details: [
        "Understanding of Python syntax and data structures",
        "Experience with basic Python scripts",
        "Knowledge of Python libraries for simple tasks",
        "Ability to implement basic algorithms in Python"
      ],
      technologies: ["Python 3", "Basic Libraries", "Script Development"]
    },
    {
      id: 3,
      name: "Figma Design",
      level: "Basic",
      description: "Familiar with Figma for UI/UX design and prototyping.",
      details: [
        "Creating basic UI designs in Figma",
        "Understanding of design components and systems",
        "Experience with prototyping user interfaces",
        "Knowledge of design principles for mobile applications"
      ],
      technologies: ["Figma", "UI/UX Design", "Prototyping", "Mobile Design"]
    },
    {
      id: 4,
      name: "Android Development",
      level: "Basic",
      description: "Experience with Android Studio for mobile app development.",
      details: [
        "Created an app using Figma for design and Android Studio for development",
        "Understanding of Android application structure",
        "Experience with basic Android UI components",
        "Knowledge of Android app lifecycle"
      ],
      technologies: ["Android Studio", "Java for Android", "XML Layouts", "Mobile UI Components"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Mobile Application Project",
      description: "Designed and developed a mobile application using Figma for UI/UX design and Android Studio for implementation.",
      role: "Developer",
      technologies: ["Figma", "Android Studio", "Java", "XML"],
      highlights: [
        "Created UI/UX design in Figma",
        "Implemented the design in Android Studio",
        "Applied basic Java programming concepts",
        "Developed a functional mobile application"
      ]
    }
  ];

  return (
    <section className="experience-section section">
      <div className="container">
        <div className="section-title">
          <h2>IT Experience</h2>
        </div>
        <div className="section-subtitle">
          <p>My technical skills and experience in information technology.</p>
        </div>

        <div className="experience-container">
          <div className="experience-tabs">
            {skills.map((skill, index) => (
              <button 
                key={skill.id}
                className={`experience-tab ${activeSkill === index ? 'active' : ''}`}
                onClick={() => setActiveSkill(index)}
              >
                <span className="company-name">{skill.name}</span>
                <span className="job-period">{skill.level}</span>
              </button>
            ))}
          </div>

          <div className="experience-content">
            <div className="job-header">
              <h3>
                <span className="job-title">{skills[activeSkill].name}</span>
                <span className="company-title"> - {skills[activeSkill].level}</span>
              </h3>
            </div>

            <p className="job-description">{skills[activeSkill].description}</p>

            <div className="job-responsibilities">
              <h4>Key Details:</h4>
              <ul>
                {skills[activeSkill].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="job-technologies">
              <h4>Technologies & Concepts:</h4>
              <div className="tech-tags">
                {skills[activeSkill].technologies.map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="projects-section">
          <h3 className="projects-title">Projects</h3>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card card" key={project.id}>
                <h4 className="project-title">{project.title}</h4>
                <p className="project-role">Role: {project.role}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  <h5>Highlights:</h5>
                  <ul>
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h5>Technologies:</h5>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Learning Path</h3>
          <p className="skills-description">
            As an IT student specializing in Mobile and Internet Technologies, I am continuously expanding my knowledge and skills in various areas of software development. My goal is to become proficient in creating innovative applications that can make a positive impact on people's lives.
          </p>
          <div className="skills-categories">
            <div className="skill-category">
              <h4>Current Focus</h4>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Android Studio</span>
                <span className="skill-tag">Mobile App Development</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Future Interests</h4>
              <div className="skill-tags">
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Cross-Platform Development</span>
                <span className="skill-tag">Cloud Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 