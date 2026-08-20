// HireMe.js - Enhanced Version with Red Color Scheme and Team Section
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import './HireMe.css';

// Import the GIF from the images folder in the same directory
import handshakeGif from './images/Handshake.gif';

function HireMe() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [gifError, setGifError] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setIsLoaded(true);
    
    // Add mouse position tracking for card highlight effects
    const strengthItems = document.querySelectorAll('.strength-card');
    
    const handleMouseMove = (e) => {
      strengthItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        item.style.setProperty('--mouse-x', `${x}px`);
        item.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`hire-me-page ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Enhanced floating accent elements */}
      <div className="floating-accent red-accent"></div>
      <div className="floating-accent blue-accent"></div>
      <div className="floating-accent purple-accent"></div>
      
      <div className="hire-me-container">
        <div className="hire-me-content">
          <h1 className="hire-me-title">Let's Work Together</h1>
          <p className={`hire-me-description ${isLoaded ? 'animate-in' : ''}`}>
            I'm available for freelance work, collaborations, and full-time positions.
            If you have a project that needs creative solutions, let's discuss how I can help
            bring your vision to life with clean, efficient code and modern design principles.
          </p>
          
          {/* REDESIGNED Professional Strengths Section */}
          <div className="professional-strengths">
            <h2 className={`strengths-heading ${isLoaded ? 'animate-in' : ''}`}>Professional Approach</h2>
            
            <div className="strengths-grid">
              <div className="strength-card" data-index="1">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon-container">
                  <div className="strength-icon agile-icon"></div>
                  <h3 className="strength-title">Agile Methodology</h3>
                </div>
                <p>Embrace Agile principles with daily stand-ups, sprint planning, and iterative development cycles for flexible project management.</p>
                <ul className="strength-features">
                  <li>Scrum & Kanban</li>
                  <li>Sprint delivery</li>
                  <li>Continuous iteration</li>
                </ul>
              </div>
              
              <div className="strength-card" data-index="2">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon-container">
                  <div className="strength-icon workflow-icon"></div>
                  <h3 className="strength-title">Development Workflow</h3>
                </div>
                <p>Structured workflow with requirements gathering, architecture planning, and systematic implementation.</p>
                <ul className="strength-features">
                  <li>Git version control</li>
                  <li>CI/CD pipelines</li>
                  <li>Clear documentation</li>
                </ul>
              </div>
              
              <div className="strength-card" data-index="3">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon-container">
                  <div className="strength-icon efficiency-icon"></div>
                  <h3 className="strength-title">Efficiency & Delivery</h3>
                </div>
                <p>Optimized solutions balancing technical excellence with practical delivery timelines and business requirements.</p>
                <ul className="strength-features">
                  <li>On-time delivery</li>
                  <li>Resource optimization</li>
                  <li>Performance focus</li>
                </ul>
              </div>
              
              <div className="strength-card" data-index="4">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon-container">
                  <div className="strength-icon collaboration-icon"></div>
                  <h3 className="strength-title">Collaboration</h3>
                </div>
                <p>Regular updates and clear documentation ensure all stakeholders remain informed and engaged.</p>
                <ul className="strength-features">
                  <li>Progress reporting</li>
                  <li>Stakeholder engagement</li>
                  <li>Responsive comms</li>
                </ul>
              </div>
              
              <div className="strength-card" data-index="5">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon-container">
                  <div className="strength-icon quality-icon"></div>
                  <h3 className="strength-title">Quality & Reliability</h3>
                </div>
                <p>Thorough testing, code reviews, and QA processes to deliver reliable, maintainable solutions.</p>
                <ul className="strength-features">
                  <li>Automated testing</li>
                  <li>Code standards</li>
                  <li>Error handling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Handshake GIF Section - Partnership CTA */}
          <div className="partnership-section">
            <div className="partnership-card">
              <div className="partnership-content">
                <div className="partnership-image">
                  {!gifError ? (
                    <img 
                      src={handshakeGif}
                      alt="Partnership handshake" 
                      className="handshake-gif"
                      loading="lazy"
                      onError={() => setGifError(true)}
                    />
                  ) : (
                    <div className="handshake-fallback">
                      <span className="handshake-emoji">🤝</span>
                      <span className="handshake-text">Let's Partner</span>
                    </div>
                  )}
                </div>
                <div className="partnership-info">
                  <h3>Ready to Build Something Great?</h3>
                  <p>
                    Whether you need a solo developer or a full team, I'm committed to delivering 
                    exceptional results that exceed your expectations. Let's create something 
                    remarkable together.
                  </p>
                  <Link to="/contact" className="partnership-btn">
                    <span className="btn-text">Start the Conversation</span>
                    <span className="btn-icon">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Team Section */}
          <div className="team-section">
            <div className="team-card">
              <div className="team-content">
                <div className="team-icon-wrapper">
                  <div className="strength-icon team-icon"></div>
                </div>
                <div className="team-info">
                  <h3>Professional Team on Standby</h3>
                  <p>
                    Have a large-scale project that requires multiple skilled professionals? 
                    I work with a dedicated team of experienced developers, designers, and project managers 
                    ready to tackle complex challenges and deliver enterprise-level solutions.
                  </p>
                  <ul className="team-features">
                    <li>Full-stack development teams</li>
                    <li>UI/UX design specialists</li>
                    <li>Project management experts</li>
                    <li>Quality assurance engineers</li>
                    <li>DevOps and infrastructure specialists</li>
                    <li>Scalable architecture planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hire-options-wrap">
            <div className="hire-options">
              <div className="hire-option" data-index="1">
                <div className="hire-option-content">
                  <h3>Freelance Project</h3>
                  <p>Need a specific project completed? I can help with web development, design, or consulting for your business needs.</p>
                  <Link to="/contact" className="hire-option-btn">
                    <span className="btn-text">Start a Project</span>
                    <span className="btn-icon">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="hire-option" data-index="2">
                <div className="hire-option-content">
                  <h3>Full-Time Position</h3>
                  <p>Looking for a dedicated team member? I'm open to full-time opportunities with innovative companies and startups.</p>
                  <Link to="/contact" className="hire-option-btn">
                    <span className="btn-text">Discuss Position</span>
                    <span className="btn-icon">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="hire-option" data-index="3">
                <div className="hire-option-content">
                  <h3>Team Project</h3>
                  <p>Have a large project that needs multiple experts? Access our professional team for comprehensive development solutions.</p>
                  <Link to="/contact" className="hire-option-btn">
                    <span className="btn-text">Request Team</span>
                    <span className="btn-icon">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="hire-option" data-index="4">
                <div className="hire-option-content">
                  <h3>Consultation</h3>
                  <p>Need advice on your project or technical decisions? I offer consultation services to help guide your development process.</p>
                  <Link to="/contact" className="hire-option-btn">
                    <span className="btn-text">Schedule a Call</span>
                    <span className="btn-icon">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact section moved above email section */}
          <div className="contact-cta-section">
            <div className="contact-cta-card">
              <div className="contact-cta-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="contact-cta-content">
                <h3>Let's Talk About Your Project</h3>
                <p>Have a question or want to discuss your project in detail? Reach out through our contact page.</p>
                <Link to="/contact" className="contact-cta-btn">
                  <span className="btn-text">Visit Contact Page</span>
                  <span className="btn-icon">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hire-me-contact">
            <h3>Prefer to email directly?</h3>
            <a href="mailto:info@neupanehimal.com.np" className="email-link">
              info@neupanehimal.com.np
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;