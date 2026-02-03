// Projects.js - Enhanced Version
import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../DarkModeContext';
import './Projects.css';

const Portfolio = () => {
  // Enhanced project data with more structured information
  const projects = {
    "Web Development": [
      {
        title: "Futsal Booking System",
        description: "A comprehensive booking platform with user authentication, admin dashboard, and payment processing for futsal court reservations.",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Stripe API", "RESTful API"],
        details: [
          "User authentication and role-based access control with JWT tokens",
          "Interactive admin dashboard with real-time analytics and reporting",
          "Real-time booking calendar with availability checking and conflict prevention",
          "Integrated payment gateway with multiple payment options and secure transactions",
          "Automated email notifications and booking confirmations",
          "Mobile-responsive design with progressive web app features"
        ],
        highlight: true,
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Car Price Prediction",
        description: "Machine learning-powered web application that predicts car prices based on various parameters and historical data.",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Python", "Machine Learning", "TensorFlow", "Chart.js"],
        details: [
          "Linear regression model with 85% accuracy trained on historical car data",
          "Interactive data visualization dashboard with Chart.js integration",
          "User-friendly form with real-time validation and predictive suggestions",
          "Optimized Apache deployment with advanced caching and compression",
          "REST API for model predictions with rate limiting and security",
          "Comprehensive data preprocessing and feature engineering pipeline"
        ],
        highlight: false,
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Tea Portfolio Showcase",
        description: "An elegant portfolio website dedicated to showcasing premium teas from around the world with rich visual storytelling and educational content.",
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "GSAP", "Framer Motion"],
        details: [
          "Beautiful image galleries with tea photography and zoom functionality",
          "Interactive tea origin maps with geographic details and regional information",
          "Educational content about brewing techniques and tea culture with video integration",
          "Smooth animations and transitions using GSAP for premium user experience",
          "Advanced filtering system by tea type, origin, and flavor profile",
          "E-commerce integration for tea purchases with inventory management"
        ],
        highlight: true,
        liveUrl: "#",
        githubUrl: "#"
      }
    ],
    "WordPress Development": [
      {
        title: "E-Commerce Store",
        description: "Full-featured online store with responsive design, product catalog, and secure checkout system.",
        technologies: ["WordPress", "Elementor", "WooCommerce", "PHP", "CSS3", "jQuery", "Stripe", "PayPal"],
        details: [
          "Mobile-first responsive design with optimized performance across all devices",
          "Custom product catalog with advanced filtering, sorting, and search functionality",
          "Optimized checkout process with multiple payment options and security measures",
          "SEO-friendly structure with proper schema markup and meta optimization",
          "Inventory management system with stock tracking and automated alerts",
          "Customer account management with order history and wishlist features"
        ],
        highlight: true,
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Fitness Center Website",
        description: "Feature-rich website for a gym with class scheduling, trainer profiles, and membership management.",
        technologies: ["WordPress", "Elementor", "CSS3", "JavaScript", "Booking Plugin", "Google Maps API"],
        details: [
          "Interactive class booking calendar system with real-time availability updates",
          "Custom trainer profile templates with bios, specialties, and social links",
          "Tiered membership subscription system with automated billing and renewals",
          "Integrated Google Maps with location finder and directions functionality",
          "Member portal with workout tracking and progress monitoring",
          "Social media integration and community engagement features"
        ],
        highlight: false,
        liveUrl: "#",
        githubUrl: "#"
      }
    ],
    "UI/UX Design": [
      {
        title: "Travel Platform Design",
        description: "Comprehensive design system for a travel booking platform with responsive layouts and detailed user flows.",
        technologies: ["Figma", "UI/UX", "Prototyping", "Design System", "Adobe Creative Suite", "User Research"],
        details: [
          "Complete component-based design system with consistent design tokens",
          "Responsive layouts for all screen sizes with mobile-first approach",
          "Interactive prototypes with animations and micro-interactions",
          "User flow diagrams and journey maps for optimal user experience",
          "Accessibility compliance with WCAG 2.1 AA standards",
          "Design handoff documentation with developer-friendly specifications"
        ],
        highlight: true,
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        title: "E-Commerce Mobile App",
        description: "Detailed mobile app design for an e-commerce platform focusing on user experience and conversion optimization.",
        technologies: ["Figma", "Mobile Design", "UI/UX", "Prototyping", "User Testing", "Analytics"],
        details: [
          "Complete product discovery and detail screens with intuitive navigation",
          "Optimized checkout flow with minimal steps and secure payment integration",
          "User account management system with personalized recommendations",
          "Light/dark mode interface options with automatic system detection",
          "Push notification system for promotions and order updates",
          "Performance optimization for various mobile devices and network conditions"
        ],
        highlight: false,
        liveUrl: "#",
        githubUrl: "#"
      }
    ],
    "Mobile Development": [
      {
        title: "Flutter Cross-Platform App",
        description: "Research and development of a cross-platform mobile application using Flutter framework.",
        technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider", "Google Maps", "Push Notifications"],
        details: [
          "Comprehensive framework analysis and comparison report with performance metrics",
          "Functional prototype with core features and smooth animations",
          "State management implementation using Provider for scalable architecture",
          "Firebase integration for authentication, cloud storage, and real-time database",
          "Custom UI components and theme system for consistent branding",
          "Performance optimization and testing across iOS and Android platforms"
        ],
        highlight: true,
        liveUrl: "#",
        githubUrl: "#"
      }
    ]
  };

  // State management
  const [expandedCard, setExpandedCard] = useState(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isDarkMode } = useDarkMode();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle mouse move for card highlights
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    
    const handleMouseMove = (e) => {
      projectCards.forEach(card => {
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

  // Handle card expansion with animation
  const toggleCard = (categoryIndex, projectIndex) => {
    const cardId = `${categoryIndex}-${projectIndex}`;
    
    setIsAnimating(true);
    
    // If we're closing a card, animate it closed first
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Floating background elements */}
      <div className="floating-accent accent-1"></div>
      <div className="floating-accent accent-2"></div>
      <div className="floating-accent accent-3"></div>
      
      <header className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Professional web development, WordPress, and design projects showcasing innovative solutions and cutting-edge technologies</p>
      </header>
      
      <section className="projects-section">
        {Object.entries(projects).map(([category, categoryProjects], categoryIndex) => (
          <div key={category} className="project-category">
            <div className="category-header">
              <h2 className="category-title">
                {category}
              </h2>
              <span className="category-count">
                {categoryProjects.length} {categoryProjects.length === 1 ? 'Project' : 'Projects'}
              </span>
            </div>
            
            <div className="projects-grid">
              {categoryProjects.map((project, projectIndex) => {
                const cardId = `${categoryIndex}-${projectIndex}`;
                const isExpanded = expandedCard === cardId;
                const displayIndex = projectIndex + 1;
                
                return (
                  <div 
                    key={projectIndex} 
                    className={`project-card ${isExpanded ? 'expanded' : ''} ${project.highlight ? 'highlight' : ''} ${isAnimating ? 'animating' : ''}`}
                    onClick={() => toggleCard(categoryIndex, projectIndex)}
                    data-index={displayIndex}
                  >
                    <div className="project-card-highlight"></div>
                    
                    <div className="project-content">
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        {project.highlight && (
                          <span className="project-badge">Featured</span>
                        )}
                      </div>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-technologies">
                        {/* Show more tags on larger screens */}
                        {project.technologies.slice(0, screenSize > 768 ? 5 : 4).map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                        {project.technologies.length > (screenSize > 768 ? 5 : 4) && (
                          <span className="tech-tag-more">+{project.technologies.length - (screenSize > 768 ? 5 : 4)}</span>
                        )}
                      </div>
                    </div>
                    
                    {isExpanded && (
                      <div className="project-details">
                        <h4>Key Features & Implementation</h4>
                        <ul>
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                        
                        {/* Show all technologies when expanded */}
                        {project.technologies.length > (screenSize > 768 ? 5 : 4) && (
                          <div className="all-technologies">
                            <h4>All Technologies Used</h4>
                            <div className="project-technologies">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Project Actions */}
                        <div className="project-actions">
                          <a href={project.liveUrl} className="project-btn btn-primary" onClick={(e) => e.stopPropagation()}>
                            <span>View Live Demo</span>
                            <span>→</span>
                          </a>
                          <a href={project.githubUrl} className="project-btn btn-secondary" onClick={(e) => e.stopPropagation()}>
                            <span>Source Code</span>
                            <span>📁</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;