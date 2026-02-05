import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import './Home.css';
import { 
  FiCode, 
  FiPenTool, 
  FiLayers, 
  FiMessageSquare, 
  FiShield, 
  FiCloud,
  FiChevronDown,
  FiArrowRight,
  FiBriefcase,
  FiBook,
  FiServer 
} from 'react-icons/fi';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaFigma, FaWordpress, FaLinux, FaPython, FaPhp, FaJava } from 'react-icons/fa';
import { SiAdobeillustrator, SiWireshark, SiDocker, SiDjango, SiPostgresql } from 'react-icons/si';
import { FaFlutter } from 'react-icons/fa6';

// Import SVG files for mountain backgrounds
import MountainLight from './mountain-light.svg';
import MountainDark from './mountain-dark.svg';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showHobbies, setShowHobbies] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const orbRefs = useRef([]);
  const skillCardsRef = useRef([]);
  const { isDarkMode } = useDarkMode();

  // Simple mouse move effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    controls.start("visible");
    
    // Initialize floating orbs
    const orbs = orbRefs.current;
    orbs.forEach((orb, i) => {
      if (orb) {
        const duration = 15 + Math.random() * 10;
        const delay = i * 2;
        orb.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      }
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  // Skill card mouse effects
  useEffect(() => {
    const skillCards = skillCardsRef.current;
    
    const handleSkillCardMouseMove = (e, index) => {
      const card = skillCards[index];
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const listeners = [];
    skillCards.forEach((card, index) => {
      if (card) {
        const listener = (e) => handleSkillCardMouseMove(e, index);
        card.addEventListener('mousemove', listener);
        listeners.push({ card, listener });
      }
    });

    return () => {
      listeners.forEach(({ card, listener }) => {
        if (card && listener) {
          card.removeEventListener('mousemove', listener);
        }
      });
    };
  }, []);

  // Animation controls
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const calculateParallax = (factor) => {
    const x = (mousePosition.x - window.innerWidth / 2) * factor;
    const y = (mousePosition.y - window.innerHeight / 2) * factor;
    return { x, y };
  };

  const redAccentPosition = calculateParallax(0.02);
  const blueAccentPosition = calculateParallax(0.03);
  const purpleAccentPosition = calculateParallax(0.025);

  const toggleHobbies = () => {
    setShowHobbies(!showHobbies);
  };
  
  const skills = [
    {
      icon: <FiLayers />,
      title: "UI/UX Design",
      description: "Crafting intuitive digital experiences",
      color: "#8A2BE2"
    },
    {
      icon: <FiCode />,
      title: "Web Development",
      description: "Building performant web applications",
      color: "#00BFFF"
    },
    {
      icon: <FiPenTool />,
      title: "Graphic Design",
      description: "Creating visual stories that resonate",
      color: "#FF6347"
    },
    {
      icon: <FiMessageSquare />,
      title: "AI Engineering",
      description: "Shaping intelligent interactions",
      color: "#20B2AA"
    },
    {
      icon: <FiCloud />,
      title: "Cloud Architecture",
      description: "Scalable cloud solutions",
      color: "#9370DB"
    },
    {
      icon: <FiBriefcase />,
      title: "Tech Consultant",
      description: "Advising on technology strategies and solutions",
      color: "#FFA500"
    },
    {
      icon: <FiBook />,
      title: "Technical Documentation",
      description: "Writing structured, clear technical content",
      color: "#FF69B4"
    },
    {
      icon: <FiServer />,
      title: "Local Networking",
      description: "Setting up servers and managing local networks",
      color: "#4682B4"
    },
    {
      icon: <FiShield />,
      title: "Cybersecurity",
      description: "Protecting digital assets",
      color: "#32CD32"
    }
  ];

  const techStack = [
    { icon: <FaReact />, name: "React", color: "#28282B" },
    { icon: <FaFigma />, name: "Figma", color: "#353935" },
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator", color: "#1B1212" },
    { icon: <FaWordpress />, name: "WordPress", color: "#023020" },
    { icon: <FaLinux />, name: "Linux", color: "#F353935" },
    { icon: <SiWireshark />, name: "Wireshark", color: "#1B1212" },
    { icon: <SiDjango />, name: "Django", color: "#1B1233" },
    { icon: <SiDocker />, name: "Docker", color: "#200404ff" },
    { icon: <FaFlutter />, name: "Flutter", color: "#28282B" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#353935" },
    { icon: <FaPhp />, name: "PHP", color: "#023020" },
    { icon: <FaPython />, name: "Python", color: "#28282B" },
    { icon: <FaJava />, name: "Java", color: "#1B1212" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        bounce: 0.4
      }
    }
  };

  const hobbiesContainer = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        bounce: 0.2
      }
    }
  };

  const hobbyItem = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
        bounce: 0.3
      }
    }
  };

  const techItem = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
        bounce: 0.4
      }
    },
    hover: {
      scale: 1.15,
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 15,
        duration: 0.2 
      }
    }
  };

  const ctaButton = {
    hover: {
      y: -5,
      boxShadow: "0 8px 25px rgba(1, 75, 146, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        duration: 0.3
      }
    },
    tap: { 
      scale: 0.95 
    }
  };

  const renderSkillCards = useCallback(() => {
    return skills.map((skill, index) => (
      <motion.div 
        className="skill-card" 
        key={skill.title}
        variants={item}
        ref={el => skillCardsRef.current[index] = el}
        whileHover={{
          y: -10,
          background: `rgba(${hexToRgb(skill.color)}, 0.1)`,
          boxShadow: `0 12px 40px rgba(${hexToRgb(skill.color)}, 0.15)`,
          transition: { 
            type: "spring", 
            stiffness: 300,
            damping: 15,
            bounce: 0.4,
            duration: 0.3
          }
        }}
        style={{ borderTop: `3px solid ${skill.color}` }}
      >
        <div className="skill-icon" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <h3 className="skill-title">{skill.title}</h3>
        <p className="skill-description">{skill.description}</p>
        <div className="skill-card-highlight" />
      </motion.div>
    ));
  }, [skills, item]);

  return (
    <section 
      id="home" 
      className={`home ${isDarkMode ? 'dark-mode' : ''}`} 
      ref={ref}
    >
      {/* Mountain Background with full edge blur - between HIMALNPNE and subtitle */}
      <div className="mountain-bg">
        <img 
          src={isDarkMode ? MountainDark : MountainLight}
          alt="Mountain background"
          className="mountain-svg"
        />
        <div className="mountain-fade"></div>
        <div className="mountain-left-fade"></div>
        <div className="mountain-right-fade"></div>
      </div>

      {/* Dynamic floating accents */}
      <motion.div 
        className="floating-accent red-accent"
        style={{ 
          transform: `translate(${redAccentPosition.x}px, ${redAccentPosition.y}px)` 
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-accent blue-accent"
        style={{ 
          transform: `translate(${-blueAccentPosition.x}px, ${-blueAccentPosition.y}px)` 
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-accent purple-accent"
        style={{ 
          transform: `translate(${purpleAccentPosition.x * 0.7}px, ${-purpleAccentPosition.y * 0.7}px)` 
        }}
        animate={{
          y: [0, 30, -20, 0],
          x: [0, -30, 20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Floating gradient orbs */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={`orb-${i}`}
          ref={el => orbRefs.current[i] = el}
          className="gradient-orb"
          style={{
            width: `${30 + Math.random() * 30}px`,
            height: `${30 + Math.random() * 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `linear-gradient(${Math.random() * 360}deg, 
              hsl(${Math.random() * 360}, 80%, 60%), 
              hsl(${Math.random() * 360}, 80%, 60%))`,
            opacity: 0.3 + Math.random() * 0.3
          }}
        />
      ))}

      <div className="home-content">
        <div className="name-container">
          <h1 className="home-title">HIMAL NEUPANE</h1>
          <motion.div 
            className="aka-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              type: "spring",
              damping: 12,
              stiffness: 100,
              bounce: 0.3
            }}
          >
            <div className="aka-line">
              <span>aka</span>
            </div>
            <div className="himalnpne-text">HIMALNPNE</div>
          </motion.div>
        </div>
        
        <motion.p 
          className="home-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            damping: 12,
            stiffness: 100,
            bounce: 0.3
          }}
        >
          <span className="typing-text">Multidisciplinary creator blending design, technology & innovation</span>
          <span className="cursor">|</span>
        </motion.p>
        
        {/* Tech stack floating icons */}
        <motion.div 
          className="tech-stack"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="tech-icon"
              variants={techItem}
              whileHover="hover"
              onMouseEnter={() => setActiveTech(tech.name)}
              onMouseLeave={() => setActiveTech(null)}
              style={{ color: tech.color }}
            >
              {tech.icon}
              {activeTech === tech.name && (
                <motion.span 
                  className="tech-tooltip"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name}
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {renderSkillCards()}
        </motion.div>
        
        <div className="interests">
          <motion.button 
            className="hobbies-toggle" 
            onClick={toggleHobbies}
            whileHover={{ 
              y: -3,
              boxShadow: "0 5px 15px rgba(1, 75, 146, 0.2)",
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            My Hobbies & Interests 
            <motion.span
              animate={{ rotate: showHobbies ? 180 : 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 10
              }}
            >
              <FiChevronDown />
            </motion.span>
          </motion.button>
          
          <AnimatePresence>
            {showHobbies && (
              <motion.div 
                className="interest-tags"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={hobbiesContainer}
              >
                {[
                  "Travelling", "Hiking", "Food Exploration", "Photography", 
                  "Mountain Climbing", "Tech Gadgets", 
                  "Minimalism", "3D Art", "Cycling",
                  "Digital Nomad", "Language Learning", "Racing Games"
                ].map((hobby, index) => (
                  <motion.span 
                    className="interest-tag"
                    key={hobby}
                    variants={hobbyItem}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 5px 15px rgba(1, 75, 146, 0.1)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    style={{
                      background: `hsl(${index * 30}, 80%, 90%)`,
                      color: `hsl(${index * 30}, 80%, 30%)`
                    }}
                  >
                    {hobby}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, type: "spring", bounce: 0.4 }}
          whileHover="hover"
          whileTap="tap"
          variants={ctaButton}
        >
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <span className="cta-text">Let's Create Together</span>
            <motion.span 
              className="cta-arrow"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <FiArrowRight />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Helper function to convert hex to rgb
function hexToRgb(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

export default Home;