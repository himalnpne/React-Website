import React, { useEffect, useState } from 'react';
import './HireMe.css';

function HireMe() {
  const [isLoaded, setIsLoaded] = useState(false);

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
    <div className="hire-me-page">
      {/* Floating accent elements */}
      <div className="floating-accent red-accent"></div>
      <div className="floating-accent blue-accent"></div>
      <div className="floating-accent purple-accent"></div>
      
      <div className="hire-me-container">
        <div className="hire-me-content">
          <h1 className="hire-me-title">Let's Work Together</h1>
          <p className={`hire-me-description ${isLoaded ? 'animate-in' : ''}`}>
            I'm available for freelance work, collaborations, and full-time positions.
            If you have a project that needs creative solutions, let's discuss how I can help.
          </p>
          
          {/* Professional Strengths Section */}
          <div className="professional-strengths">
            <h2 className={`strengths-heading ${isLoaded ? 'animate-in' : ''}`}>My Professional Approach</h2>
            
            <div className="strengths-grid">
              <div className="strength-card" data-index="1">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon agile-icon"></div>
                <h3 className="strength-title">Agile Methodology</h3>
                <p>I embrace Agile principles with daily stand-ups, sprint planning, and iterative development cycles to ensure flexible, responsive project management.</p>
                <ul className="strength-features">
                  <li>Scrum & Kanban practices</li>
                  <li>Sprint-based delivery</li>
                  <li>Continuous iteration</li>
                </ul>
              </div>
              
              <div className="strength-card" data-index="2">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon workflow-icon"></div>
                <h3 className="strength-title">Development Workflow</h3>
                <p>My structured workflow includes clear requirements gathering, architecture planning, and systematic implementation with proper version control.</p>
                <ul className="strength-features">
                  <li>Git-based version control</li>
                  <li>CI/CD implementation</li>
                  <li>Clear documentation</li>
                </ul>
              </div>
              
              <div className="strength-card" data-index="3">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon efficiency-icon"></div>
                <h3 className="strength-title">Efficiency & Delivery</h3>
                <p>I focus on optimized solutions that balance technical excellence with practical delivery timelines and business requirements.</p>
                <ul className="strength-features">
                  <li>On-time delivery</li>
                  <li>Resource optimization</li>
                  <li>Performance-focused code</li>
                </ul>
              </div>
              
              <div className="strength-card" data-index="4">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon collaboration-icon"></div>
                <h3 className="strength-title">Collaboration & Communication</h3>
                <p>Regular updates, clear documentation, and open channels ensure all stakeholders remain informed and engaged throughout the project.</p>
                <ul className="strength-features">
                  <li>Transparent progress reporting</li>
                  <li>Stakeholder engagement</li>
                  <li>Responsive communication</li>
                </ul>
              </div>
              
              <div className="strength-card" data-index="5">
                <div className="strength-card-highlight"></div>
                <div className="strength-icon quality-icon"></div>
                <h3 className="strength-title">Quality & Reliability</h3>
                <p>I implement thorough testing practices, code reviews, and quality assurance processes to deliver reliable, maintainable solutions.</p>
                <ul className="strength-features">
                  <li>Automated testing</li>
                  <li>Code quality standards</li>
                  <li>Robust error handling</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="hire-options-wrap">
            <div className="hire-options">
              <div className="hire-option" data-index="1">
                <div className="hire-option-content">
                  <h3>Freelance Project</h3>
                  <p>Need a specific project completed? I can help with web development, design, or consulting.</p>
                  <a href="/contact" className="hire-option-btn">
                    <span className="btn-text">Start a Project</span>
                    <span className="btn-icon">→</span>
                  </a>
                </div>
              </div>
              
              <div className="hire-option" data-index="2">
                <div className="hire-option-content">
                  <h3>Full-Time Position</h3>
                  <p>Looking for a dedicated team member? I'm open to full-time opportunities with innovative companies.</p>
                  <a href="/contact" className="hire-option-btn">
                    <span className="btn-text">Discuss Position</span>
                    <span className="btn-icon">→</span>
                  </a>
                </div>
              </div>
              
              <div className="hire-option" data-index="3">
                <div className="hire-option-content">
                  <h3>Consultation</h3>
                  <p>Need advice on your project or technical decisions? I offer consultation services.</p>
                  <a href="/contact" className="hire-option-btn">
                    <span className="btn-text">Schedule a Call</span>
                    <span className="btn-icon">→</span>
                  </a>
                </div>
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