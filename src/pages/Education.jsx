import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's in Information Technology",
      institution: "Asia Pacific College",
      location: "Philippines",
      period: "Present (2nd Year)",
      description: "Specializing in Mobile and Internet Technologies, focusing on developing skills to create innovative solutions in the digital space.",
      achievements: [
        "IT student with focus on Mobile and Internet Technologies",
        "Developing skills in software development and app creation",
        "Learning to build solutions that positively impact people's lives"
      ]
    },
    {
      id: 2,
      degree: "Senior High School - STEM",
      institution: "STI College Pasay-EDSA",
      location: "Philippines",
      period: "Completed",
      description: "Completed Science, Technology, Engineering, and Mathematics track, building a strong foundation in technical subjects.",
      achievements: [
        "Focused on science and technology subjects",
        "Developed analytical and problem-solving skills",
        "Built foundation for further IT education"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Basic Java Programming",
      issuer: "Self-Learning",
      date: "Ongoing",
      credentialId: "-"
    },
    {
      id: 2,
      name: "Basic Python Programming",
      issuer: "Self-Learning",
      date: "Ongoing",
      credentialId: "-"
    },
    {
      id: 3,
      name: "Figma UI/UX Design",
      issuer: "Self-Learning",
      date: "Ongoing",
      credentialId: "-"
    },
    {
      id: 4,
      name: "Android App Development",
      issuer: "Self-Learning",
      date: "Ongoing",
      credentialId: "-"
    }
  ];

  return (
    <section className="education-section section">
      <div className="container">
        <div className="content-wrapper">
          <div className="section-title">
            <h2>Education</h2>
          </div>
          <div className="section-subtitle">
            <p>My academic journey and qualifications that have shaped my knowledge and skills.</p>
          </div>

          <div className="education-timeline">
            {educationData.map((item) => (
              <div className="timeline-item" key={item.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content card">
                  <div className="timeline-header">
                    <h3>{item.degree}</h3>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <div className="timeline-institution">
                    <h4>{item.institution}</h4>
                    <p className="location">{item.location}</p>
                  </div>
                  <p className="timeline-description">{item.description}</p>
                  <div className="timeline-achievements">
                    <h5>Highlights:</h5>
                    <ul>
                      {item.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-wrapper">
          <div className="certifications-section">
            <h3 className="text-center mb-4">Skills & Additional Training</h3>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <div className="certification-card card" key={cert.id}>
                  <h4>{cert.name}</h4>
                  <p className="cert-issuer">Acquired through: {cert.issuer}</p>
                  <p className="cert-date">Status: {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 