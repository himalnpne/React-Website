import React, { useState, useEffect } from 'react';
import './Projects.css';

const Portfolio = () => {
  // Enhanced project data with more structured information
  const projects = {
    "Web Development": [
      {
        title: "Futsal Booking System",
        description: "A comprehensive booking platform with user authentication, admin dashboard, and payment processing for futsal court reservations.",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        details: [
          "User authentication and role-based access control",
          "Interactive admin dashboard with analytics",
          "Real-time booking calendar with availability checking",
          "Integrated payment gateway with multiple options"
        ],
        highlight: true
      },
      {
        title: "Car Price Prediction",
        description: "Machine learning-powered web application that predicts car prices based on various parameters and historical data.",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Python", "ML"],
        details: [
          "Linear regression model with 85% accuracy",
          "Interactive data visualization dashboard",
          "User-friendly form with validation",
          "Optimized Apache deployment with caching"
        ]
      }
    ],
    "WordPress Development": [
      {
        title: "E-Commerce Store",
        description: "Full-featured online store with responsive design, product catalog, and secure checkout system.",
        technologies: ["WordPress", "Elementor", "WooCommerce", "PHP", "CSS3"],
        details: [
          "Mobile-first responsive design approach",
          "Custom product catalog with filtering",
          "Optimized checkout with multiple payment options",
          "SEO-friendly structure with proper schema markup"
        ],
        highlight: true
      },
      {
        title: "Fitness Center Website",
        description: "Feature-rich website for a gym with class scheduling, trainer profiles, and membership management.",
        technologies: ["WordPress", "Elementor", "CSS3", "JavaScript"],
        details: [
          "Interactive class booking calendar system",
          "Custom trainer profile templates",
          "Tiered membership subscription system",
          "Integrated Google Maps with location finder"
        ]
      }
    ],
    "UI/UX Design": [
      {
        title: "Travel Platform Design",
        description: "Comprehensive design system for a travel booking platform with responsive layouts and detailed user flows.",
        technologies: ["Figma", "UI/UX", "Prototyping", "Design System"],
        details: [
          "Complete component-based design system",
          "Responsive layouts for all screen sizes",
          "Interactive prototypes with animations",
          "User flow diagrams and journey maps"
        ],
        highlight: true
      },
      {
        title: "E-Commerce Mobile App",
        description: "Detailed mobile app design for an e-commerce platform focusing on user experience and conversion optimization.",
        technologies: ["Figma", "Mobile Design", "UI/UX", "Prototyping"],
        details: [
          "Product discovery and detail screens",
          "Optimized checkout flow with minimal steps",
          "User account management system",
          "Light/dark mode interface options"
        ]
      }
    ],
    "Mobile Development": [
      {
        title: "Flutter Cross-Platform App",
        description: "Research and development of a cross-platform mobile application using Flutter framework.",
        technologies: ["Flutter", "Dart", "Firebase", "REST API"],
        details: [
          "Framework analysis and comparison report",
          "Functional prototype with core features",
          "State management implementation using Provider",
          "Firebase integration for authentication and storage"
        ]
      }
    ]
  };

  // State management
  const [expandedCard, setExpandedCard] = useState(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    }, 300);
  };

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Professional web development, WordPress, and design projects</p>
      </header>
      
      <section className="projects-section">
        {Object.entries(projects).map(([category, categoryProjects], categoryIndex) => (
          <div key={category} className="project-category">
            <h2 className="category-title">
              {category}
            </h2>
            
            <div className="projects-grid">
              {categoryProjects.map((project, projectIndex) => {
                const cardId = `${categoryIndex}-${projectIndex}`;
                const isExpanded = expandedCard === cardId;
                
                return (
                  <div 
                    key={projectIndex} 
                    className={`project-card ${isExpanded ? 'expanded' : ''} ${project.highlight ? 'highlight' : ''} ${isAnimating ? 'animating' : ''}`}
                    onClick={() => toggleCard(categoryIndex, projectIndex)}
                  >
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-technologies">
                        {/* Show more tags on larger screens */}
                        {project.technologies.slice(0, screenSize > 768 ? 4 : 3).map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                        {project.technologies.length > (screenSize > 768 ? 4 : 3) && (
                          <span className="tech-tag-more">+{project.technologies.length - (screenSize > 768 ? 4 : 3)}</span>
                        )}
                      </div>
                    </div>
                    
                    {isExpanded && (
                      <div className="project-details">
                        <h4>Key Features</h4>
                        <ul>
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                        
                        {/* Show all technologies when expanded */}
                        {project.technologies.length > (screenSize > 768 ? 4 : 3) && (
                          <div className="all-technologies">
                            <h4>All Technologies</h4>
                            <div className="project-technologies">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        )}
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