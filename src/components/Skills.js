import React from 'react';
import './Skills.css';
import CV from './CV/Himal_Neupane_CV.pdf';

function Skills() {
  // Skill data with categories in desired order
  const skillsData = [
    { 
      category: 'Design',
      skills: [
        { name: 'Figma', rating: 4.5 },
        { name: 'Adobe Illustrator', rating: 4 },
        { name: 'Adobe Photoshop', rating: 4 },
        { name: 'Adobe After Effects', rating: 4 },
      ]
    },
    { 
      category: 'Development',
      skills: [
        { name: 'React', rating: 3.5 },
        { name: 'Flutter', rating: 2.5 },
        { name: 'Python', rating: 4 },
        { name: 'Java', rating: 3 },
        { name: 'C Programming', rating: 3.5 },
      ]
    },
    { 
      category: 'Other',
      skills: [
        { name: 'WordPress', rating: 4.5 },
        { name: 'SQL', rating: 3 },
        { name: 'Microsoft Office', rating: 4.5 },
        { name: 'Prompt Engineering', rating: 4.5 },
      ]
    }
  ];

  const renderProgress = (rating) => {
    const percentage = (rating / 5) * 100;
    return (
      <div className="skill-progress">
        <div className="skill-percentage">{percentage.toFixed(0)}%</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const downloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = CV;
      link.download = 'Himal_Neupane_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Failed to download CV. Please try again later.');
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>My Skills</h2>
        <button onClick={downloadCV} className="cv-download-btn">
          Download CV
          <svg className="download-icon" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
        </button>
      </div>
      
      <div className="skills-container">
        {skillsData.map((categoryData, index) => (
          <div key={categoryData.category} className="skill-category">
            <h3>{categoryData.category}</h3>
            <div className="skills-list">
              {categoryData.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    {renderProgress(skill.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;