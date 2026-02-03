// Skills.js - Enhanced Version with React Icons and Django
import React, { useEffect } from 'react';
import { useDarkMode } from '../DarkModeContext';
import { 
  FaFigma, 
  FaReact, 
  FaPython, 
  FaJava, 
  FaWordpress, 
  FaDatabase,
  FaFileDownload,
  FaPalette,
  FaCode,
  FaTools,
  FaStar
} from 'react-icons/fa';
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobeaftereffects,
  SiFlutter,
  SiC,
  SiMicrosoft,
  SiDjango
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import './Skills.css';
import CV from './CV/Himal_Neupane_CV.pdf';

function Skills() {
  // Enhanced skill data with Django and React Icons
  const skillsData = [
    { 
      category: 'Design & Creative',
      icon: <FaPalette />,
      skills: [
        { name: 'Figma', rating: 4.5, description: 'UI/UX Design, Prototyping, Design Systems', icon: <FaFigma /> },
        { name: 'Adobe Illustrator', rating: 4, description: 'Vector Graphics, Logo Design, Illustrations', icon: <SiAdobeillustrator /> },
        { name: 'Adobe Photoshop', rating: 4, description: 'Photo Editing, Digital Art, Mockups', icon: <SiAdobephotoshop /> },
        { name: 'Adobe After Effects', rating: 4, description: 'Motion Graphics, Animations, Visual Effects', icon: <SiAdobeaftereffects /> },
      ]
    },
    { 
      category: 'Development',
      icon: <FaCode />,
      skills: [
        { name: 'React', rating: 3.5, description: 'Components, Hooks, State Management', icon: <FaReact /> },
        { name: 'Django', rating: 3.5, description: 'Backend Development, REST APIs, ORM', icon: <SiDjango /> },
        { name: 'Flutter', rating: 2.5, description: 'Cross-platform Mobile Development', icon: <SiFlutter /> },
        { name: 'Python', rating: 4, description: 'Web Development, Automation, Data Analysis', icon: <FaPython /> },
        { name: 'Java', rating: 3, description: 'Object-Oriented Programming, Applications', icon: <FaJava /> },
        { name: 'C Programming', rating: 3.5, description: 'System Programming, Algorithms', icon: <SiC /> },
      ]
    },
    { 
      category: 'Tools & Platforms',
      icon: <FaTools />,
      skills: [
        { name: 'WordPress', rating: 4.5, description: 'Theme Development, Customization, E-commerce', icon: <FaWordpress /> },
        { name: 'SQL & Databases', rating: 3, description: 'MySQL, Database Design, Queries', icon: <FaDatabase /> },
        { name: 'Prompt Engineering', rating: 4.5, description: 'AI Tools, Optimization, Content Generation', icon: <GiArtificialIntelligence /> },
      ]
    }
  ];

  const { isDarkMode } = useDarkMode();

  // Handle mouse move for card highlights
  useEffect(() => {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const handleMouseMove = (e) => {
      skillCategories.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="rating-star filled" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="rating-star filled" />);
      } else {
        stars.push(<FaStar key={i} className="rating-star" />);
      }
    }
    
    return stars;
  };

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
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Failed to download CV. Please try again later.');
    }
  };

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Floating background elements */}
      <div className="floating-accent accent-1"></div>
      <div className="floating-accent accent-2"></div>
      <div className="floating-accent accent-3"></div>
      
      <div className="skills-header">
        <h2>My Skills & Expertise</h2>
        <button onClick={downloadCV} className="cv-download-btn">
          Download CV
          <FaFileDownload className="download-icon" />
        </button>
      </div>
      
      <div className="skills-container">
        {skillsData.map((categoryData, index) => (
          <div key={categoryData.category} className="skill-category" data-index={index + 1}>
            <div className="skill-category-highlight"></div>
            
            <div className="category-header">
              <div className="category-icon">
                {categoryData.icon}
              </div>
              <h3>{categoryData.category}</h3>
            </div>
            
            <div className="skills-list">
              {categoryData.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ 
                          color: 'var(--accent-red)', 
                          fontSize: '1.25rem',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-rating">
                        {renderStars(skill.rating)}
                      </div>
                    </div>
                    <p className="skill-description" style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--text-muted)', 
                      marginBottom: '0.5rem',
                      lineHeight: '1.4',
                      marginLeft: '2rem'
                    }}>
                      {skill.description}
                    </p>
                    {renderProgress(skill.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary Section */}
      <div className="skills-summary">
        <h3>Continuous Learning & Growth</h3>
        <p>
          I'm passionate about staying current with the latest technologies and design trends. 
          My skill set is constantly evolving as I take on new challenges and explore emerging tools 
          in web development, design, and digital innovation. Currently expanding my expertise in 
          Django for robust backend solutions and modern web frameworks.
        </p>
      </div>
    </section>
  );
}

export default Skills;