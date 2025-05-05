// Footer.js
import React from 'react';
import './Footer.css';
import { FiArrowUp, FiMail, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="email-section">
                    <FiMail className="email-icon" />
                    <div className="email-text">
                        <span className="email-label">EMAIL ME</span>
                        <a href="mailto:info@neupanehimal.com.np" className="email-address">
                            info@neupanehimal.com.np
                        </a>
                    </div>
                </div>
                
                <div className="social-links">
                    <a href="https://github.com/himalnpne" className="social-link" target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/himalnpne" className="social-link" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin />
                    </a>

                    <a href="https://instagram.com/himal_npne" className="social-link" target="_blank" rel="noopener noreferrer">
                        <FiInstagram />
                    </a>
                </div>
                
                <button className="back-to-top" onClick={scrollToTop}>
                    <FiArrowUp /> TOP
                </button>
                
                <div className="copyright">
                    &copy; {currentYear} HIMAL NEUPANE. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;