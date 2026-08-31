import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import './Home.css';
import Logo3DAnimation from './Logo3DAnimation';
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
import { FaReact, FaFigma, FaWordpress, FaLinux, FaPython, FaPhp, FaJava, FaCloudflare } from 'react-icons/fa';
import { SiAdobeillustrator, SiWireshark, SiDocker, SiDjango, SiPostgresql } from 'react-icons/si';
import { FaFlutter } from 'react-icons/fa6';

// Import SVG files for mountain backgrounds
import MountainLight from './mountain-light.svg';
import MountainDark from './mountain-dark.svg';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showHobbies, setShowHobbies] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const [cursorGlowActive, setCursorGlowActive] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const orbRefs = useRef([]);
  const skillCardsRef = useRef([]);
  const cursorGlowRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  // Cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => setCursorGlowActive(true);
    const handleMouseLeave = () => setCursorGlowActive(false);

    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.addEventListener('mousemove', handleMouseMove);
      homeSection.addEventListener('mouseenter', handleMouseEnter);
      homeSection.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (homeSection) {
        homeSection.removeEventListener('mousemove', handleMouseMove);
        homeSection.removeEventListener('mouseenter', handleMouseEnter);
        homeSection.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

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

  // Touch feedback handler
  const handleTouchStart = (e) => {
    const target = e.currentTarget;
    target.style.transform = 'scale(0.95)';
    setTimeout(() => {
      target.style.transform = '';
    }, 150);
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
    { icon: <FaLinux />, name: "Linux", color: "#180e05" },
    { icon: <SiWireshark />, name: "Wireshark", color: "#150606" },
    { icon: <SiDjango />, name: "Django", color: "#1B1233" },
    { icon: <SiDocker />, name: "Docker", color: "#200404ff" },
    { icon: <FaFlutter />, name: "Flutter", color: "#28282B" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#353935" },
    { icon: <FaPhp />, name: "PHP", color: "#023020" },
    { icon: <FaPython />, name: "Python", color: "#28282B" },
    { icon: <FaCloudflare />, name: "Cloudflare", color: "#080825" },
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
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };

  const hobbyItem = {
    hidden: { y: -10, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
        bounce: 0.3
      }
    },
    exit: {
      y: -10,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2
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
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  };

  const ctaButton = {
    hover: {
      y: -6,
      scale: 1.02,
      boxShadow: "0 15px 45px rgba(1, 75, 146, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 15,
        duration: 0.3
      }
    },
    tap: { 
      scale: 0.96,
      transition: { duration: 0.1 }
    }
  };

  const renderSkillCards = useCallback(() => {
    return skills.map((skill, index) => (
      <motion.div 
        className="skill-card" 
        key={skill.title}
        variants={item}
        ref={el => skillCardsRef.current[index] = el}
        data-color={skill.color}
        whileHover={{
          y: -12,
          scale: 1.02,
          transition: { 
            type: "spring", 
            stiffness: 300,
            damping: 15,
            bounce: 0.4,
            duration: 0.3
          }
        }}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.1 }
        }}
        onTouchStart={handleTouchStart}
        style={{ 
          '--card-border-color': skill.color,
          '--card-border-color-hover': `linear-gradient(135deg, ${skill.color}, ${adjustColor(skill.color, 30)})`
        }}
      >
        <div className="skill-icon" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <h3 className="skill-title">{skill.title}</h3>
        <p className="skill-description">{skill.description}</p>
      </motion.div>
    ));
  }, [skills, item]);

  const adjustColor = (hex, percent) => {
    const colors = {
      '#8A2BE2': '#9B4BED',
      '#00BFFF': '#33CCFF',
      '#FF6347': '#FF7A5C',
      '#20B2AA': '#2FCDBF',
      '#9370DB': '#A88ADD',
      '#FFA500': '#FFB83D',
      '#FF69B4': '#FF82C0',
      '#4682B4': '#5A96C4',
      '#32CD32': '#4AD84A'
    };
    return colors[hex] || '#666666';
  };

  return (
    <section 
      id="home" 
      className={`home ${isDarkMode ? 'dark-mode' : ''}`} 
      ref={ref}
    >
      {/* 3D LOGO ANIMATION - Full screen background */}
      <Logo3DAnimation />

      {/* Cursor Glow Effect */}
      <div 
        ref={cursorGlowRef}
        className={`cursor-glow ${cursorGlowActive ? 'active' : ''}`}
      />

      {/* Mountain Background */}
      <div className="mountain-bg">
        <img 
          src={isDarkMode ? MountainDark : MountainLight}
          alt="Mountain background"
          className="mountain-svg"
        />
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
            opacity: 0.15 + Math.random() * 0.15
          }}
        />
      ))}

      <div className="home-content">
        <motion.div 
          className="name-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            damping: 12,
            stiffness: 100,
            bounce: 0.3
          }}
        >
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
        </motion.div>
        
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
              whileTap="tap"
              onMouseEnter={() => setActiveTech(tech.name)}
              onMouseLeave={() => setActiveTech(null)}
              onTouchStart={handleTouchStart}
              style={{ 
                color: tech.color,
                cursor: 'pointer'
              }}
            >
              {tech.icon}
              <AnimatePresence>
                {activeTech === tech.name && (
                  <motion.span 
                    className="tech-tooltip"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 15 
                    }}
                    style={{ 
                      backgroundColor: isDarkMode ? '#023020' : tech.color,
                      color: isDarkMode ? '#e8f0f8' : '#ffffff'
                    }}
                  >
                    {tech.name}
                  </motion.span>
                )}
              </AnimatePresence>
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
              y: -4,
              scale: 1.02,
              boxShadow: "0 12px 35px rgba(1, 75, 146, 0.2)",
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            whileTap={{ 
              scale: 0.96,
              transition: { duration: 0.1 }
            }}
            onTouchStart={handleTouchStart}
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
                exit="exit"
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
                      scale: 1.08,
                      y: -4,
                      boxShadow: "0 8px 25px rgba(1, 75, 146, 0.1)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    whileTap={{
                      scale: 0.94,
                      transition: { duration: 0.1 }
                    }}
                    onTouchStart={handleTouchStart}
                    style={{
                      background: isDarkMode 
                        ? `hsla(${index * 30}, 70%, 30%, 0.2)` 
                        : `hsl(${index * 30}, 80%, 90%)`,
                      color: isDarkMode 
                        ? `hsl(${index * 30}, 70%, 70%)` 
                        : `hsl(${index * 30}, 80%, 30%)`
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
          transition={{ 
            delay: 1.6, 
            type: "spring", 
            bounce: 0.4,
            stiffness: 100,
            damping: 12
          }}
          whileHover="hover"
          whileTap="tap"
          variants={ctaButton}
          onTouchStart={handleTouchStart}
        >
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <span className="cta-text">Let's Create Together</span>
            <motion.span 
              className="cta-arrow"
              initial={{ x: 0 }}
              whileHover={{ x: 8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <FiArrowRight />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;