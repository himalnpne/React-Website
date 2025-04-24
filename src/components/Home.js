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
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showHobbies, setShowHobbies] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animations when component mounts
    controls.start("visible");
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

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
        stiffness: 100
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
        mass: 0.5
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
        staggerChildren: 0.05
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
        damping: 12
      }
    }
  };

  return (
    <section id="home" className="home" ref={ref}>
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
        className="gradient-orb orb-1"
        animate={{
          y: [0, -30, 20, 0],
          x: [0, 30, -20, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="gradient-orb orb-2"
        animate={{
          y: [0, 30, -40, 0],
          x: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <div className="home-content">
        {/* SVG gradient definition for icons */}
        <svg width="0" height="0">
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#014b92" />
            <stop offset="100%" stopColor="#c8002a" />
          </linearGradient>
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
            transition: { duration: 0.5 }
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
            stiffness: 100
          }}
        >
          Multidisciplinary creator blending design, technology & innovation
        </motion.p>
        
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
              whileHover={{
                y: -10,
                background: "rgba(255, 255, 255, 0.4)",
                boxShadow: "0 12px 40px rgba(1, 75, 146, 0.15)",
                transition: { 
                  type: "spring", 
                  stiffness: 300,
                  duration: 0.3
                }
              }}
            >
              <div className="skill-icon">
                <svg width="0" height="0">
                  <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#014b92" />
                    <stop offset="100%" stopColor="#c8002a" />
                  </linearGradient>
                </svg>
                {skill.icon}
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="interests">
          <motion.button 
            className="hobbies-toggle" 
            onClick={toggleHobbies}
            whileHover={{ 
              y: -2,
              boxShadow: "0 5px 15px rgba(1, 75, 146, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            My Hobbies {showHobbies ? '▲' : '▼'}
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
                {["Travelling", "Hiking", "Food Exploration", "Photography", 
                  "Mountain Climbing", "Coffee Connoisseur", "Tech Gadgets", 
                  "Minimalism"].map((hobby, index) => (
                  <motion.span 
                    className="interest-tag"
                    key={hobby}
                    variants={hobbyItem}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(1, 75, 146, 0.1)"
                    }}
                  >
                    {hobby}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.a 
          href="#contact" 
          className="cta-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          whileHover={{
            y: -5,
            boxShadow: "0 8px 25px rgba(1, 75, 146, 0.3)",
            transition: { 
              type: "spring", 
              stiffness: 300,
              duration: 0.3
            }
          }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Create Together
        </motion.a>
      </div>
    </section>
  );
}

export default Home;