import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import { 
  FiCode, 
  FiPenTool, 
  FiLayers, 
  FiMessageSquare, 
  FiShield, 
  FiCloud,
  FiChevronDown,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiArrowRight
} from 'react-icons/fi';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaFigma, FaWordpress, FaAws, FaLinux } from 'react-icons/fa';
import { SiAdobexd, SiWireshark } from 'react-icons/si';

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
  const mouseMoveListenerRef = useRef(null);
  const skillCardListenersRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    
    mouseMoveListenerRef.current = handleMouseMove;
    window.addEventListener('mousemove', mouseMoveListenerRef.current);
    
    // Start animations when component mounts
    controls.start("visible");
    
    // Add floating orbs animation
    const orbs = orbRefs.current;
    orbs.forEach((orb, i) => {
      if (orb) {
        const duration = 15 + Math.random() * 10;
        const delay = i * 2;
        orb.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      }
    });
    
    return () => {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener('mousemove', mouseMoveListenerRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    // Add skill card hover effects
    const skillCards = skillCardsRef.current;
    const listeners = [];
    
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

    skillCards.forEach((card, index) => {
      if (card) {
        const listener = (e) => handleSkillCardMouseMove(e, index);
        card.addEventListener('mousemove', listener);
        listeners.push({ card, listener });
      }
    });

    skillCardListenersRef.current = listeners;

    return () => {
      skillCardListenersRef.current.forEach(({ card, listener }) => {
        if (card && listener) {
          card.removeEventListener('mousemove', listener);
        }
      });
    };
  }, []);

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
      icon: <FiShield />,
      title: "Cybersecurity",
      description: "Protecting digital assets",
      color: "#32CD32"
    }
  ];

  const techStack = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaFigma />, name: "Figma", color: "#F24E1E" },
    { icon: <SiAdobexd />, name: "Adobe XD", color: "#FF61F6" },
    { icon: <FaWordpress />, name: "WordPress", color: "#21759B" },
    { icon: <FaAws />, name: "AWS", color: "#FF9900" },
    { icon: <FaLinux />, name: "Linux", color: "#FCC624" },
    { icon: <SiWireshark />, name: "Wireshark", color: "#1679C7" }
  ];

  const socialLinks = [
   // { icon: <FiGithub />, url: "https://github.com", color: "#333" },
   // { icon: <FiLinkedin />, url: "https://linkedin.com", color: "#0077B5" },
   // { icon: <FiTwitter />, url: "https://twitter.com", color: "#1DA1F2" },
    //{ icon: <FiInstagram />, url: "https://instagram.com", color: "#E1306C" }
  ];

  // Animation variants
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

  const nameAnimation = {
    hidden: { y: -100, rotateX: 90, opacity: 0 },
    visible: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        mass: 0.5,
        bounce: 0.5
      }
    }
  };

  const splashAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: [0.8, 0],
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }
    }
  };

  const rippleAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: [0.5, 0],
      transition: {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4
      }
    }
  };

  const rippleAnimation2 = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: [0.3, 0],
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.5
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

  const socialItem = {
    hover: {
      y: -5,
      scale: 1.1,
      color: "#fff",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.9
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

  return (
    <section id="home" className="home" ref={ref}>
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
          key={i}
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
        {/* SVG gradient definitions */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#014b92" />
              <stop offset="100%" stopColor="#c8002a" />
            </linearGradient>
            <linearGradient id="name-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF512F" />
              <stop offset="50%" stopColor="#DD2476" />
              <stop offset="100%" stopColor="#1A2980" />
            </linearGradient>
          </defs>
        </svg>

        {/* Name with splash effect container */}
        <motion.div 
          className="name-container"
          initial="hidden"
          animate={controls}
          variants={container}
          whileHover={{
            rotateY: 5,
            rotateX: 2,
            transition: { 
              type: "spring",
              stiffness: 200,
              damping: 10,
              duration: 0.5 
            }
          }}
        >
          <motion.h1 
            className="home-title"
            variants={nameAnimation}
          >
            Himal Neupane
          </motion.h1>
          <motion.div 
            className="splash-effect" 
            variants={splashAnimation}
          />
          <motion.div 
            className="ripple-effect" 
            variants={rippleAnimation}
          />
          <motion.div 
            className="ripple-effect-2" 
            variants={rippleAnimation2}
          />
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
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
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
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-card" 
              key={index}
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
              <p>{skill.description}</p>
              <div className="skill-card-highlight" />
            </motion.div>
          ))}
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
                  "Mountain Climbing", "Coffee Connoisseur", "Tech Gadgets", 
                  "Minimalism", "Music Production", "3D Art", "Cycling",
                  "Digital Nomad", "Language Learning", "Board Games"
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
          className="social-links"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              variants={item}
              whileHover="hover"
              whileTap="tap"
              custom={index}
              style={{ color: "#666" }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.a 
          href="#contact" 
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, type: "spring", bounce: 0.4 }}
          whileHover="hover"
          whileTap="tap"
          variants={ctaButton}
        >
          <span className="cta-text">Let's Create Together</span>
          <motion.span 
            className="cta-arrow"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <FiArrowRight />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}

// Helper function to convert hex to rgb
function hexToRgb(hex) {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse r, g, b values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}

export default Home;