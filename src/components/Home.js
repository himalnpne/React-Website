// Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';
import { 
  FiCode, 
  FiPenTool, 
  FiLayers, 
  FiMessageSquare, 
  FiShield, 
  FiCloud
} from 'react-icons/fi';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showHobbies, setShowHobbies] = useState(false);
  const [nameLoaded, setNameLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger name animation after component mounts
    setTimeout(() => {
      setNameLoaded(true);
    }, 300);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateParallax = (factor) => {
    const x = (mousePosition.x - window.innerWidth / 2) * factor;
    const y = (mousePosition.y - window.innerHeight / 2) * factor;
    return { x, y };
  };

  const redAccentPosition = calculateParallax(0.02);
  const blueAccentPosition = calculateParallax(0.03);

  const toggleHobbies = () => {
    setShowHobbies(!showHobbies);
  };
  
  const skills = [
    {
      icon: <FiLayers />,
      title: "UI/UX Designer",
      description: "Crafting intuitive digital experiences"
    },
    {
      icon: <FiCode />,
      title: "Web Developer",
      description: "Building performant web applications"
    },
    {
      icon: <FiPenTool />,
      title: "Graphic Designer",
      description: "Creating visual stories that resonate"
    },
    {
      icon: <FiMessageSquare />,
      title: "Prompt Engineer",
      description: "Shaping AI interactions"
    },
    {
      icon: <FiCloud />,
      title: "Cloud Computing",
      description: "Architecting scalable cloud solutions"
    },
    {
      icon: <FiShield />,
      title: "Cybersecurity",
      description: "Protecting digital assets and systems"
    }
  ];

  return (
    <section id="home" className="home">
      <div 
        className="floating-accent red-accent"
        style={{ 
          transform: `translate(${redAccentPosition.x}px, ${redAccentPosition.y}px)` 
        }}
      />
      <div 
        className="floating-accent blue-accent"
        style={{ 
          transform: `translate(${-blueAccentPosition.x}px, ${-blueAccentPosition.y}px)` 
        }}
      />
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      
      <div className="home-content">
        {/* Name with splash effect container */}
        <div className={`name-container ${nameLoaded ? 'landed' : ''}`}>
          <h1 className="home-title">Himal Neupane</h1>
          <div className="splash-effect" />
          <div className="ripple-effect" />
        </div>
        
        <p className="home-subtitle">Multidisciplinary creator blending design, technology & innovation</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              className="skill-card" 
              key={index}
              style={{ 
                animationDelay: `${0.8 + (index * 0.1)}s`,
                opacity: 0 // Start hidden, will be animated in via CSS
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="interests">
          <button className="hobbies-toggle" onClick={toggleHobbies}>
            My Hobbies {showHobbies ? '▲' : '▼'}
          </button>
          
          {showHobbies && (
            <div className="interest-tags">
              <span className="interest-tag">Travelling</span>
              <span className="interest-tag">Hiking</span>
              <span className="interest-tag">Food Exploration</span>
              <span className="interest-tag">Photography</span>
              <span className="interest-tag">Mountain Climbing</span>
              <span className="interest-tag">Coffee Connoisseur</span>
              <span className="interest-tag">Tech Gadgets</span>
              <span className="interest-tag">Minimalism</span>
            </div>
          )}
        </div>
        
        <a href="#contact" className="cta-button">Let's Create Together</a>
      </div>
    </section>
  );
}

export default Home;