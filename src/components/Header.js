import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) && 
          hamburgerRef.current && 
          !hamburgerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="#home">
            <img 
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="Logo" 
              className="logo-img" 
            />
          </a>
        </div>
        
        <nav className="desktop-nav">
          {['Home', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          
          <button 
            ref={hamburgerRef}
            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </nav>
      </div>
      
      <div 
        className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      />
      
      <div 
        ref={menuRef}
        className={`expanded-menu ${isMenuOpen ? 'open' : ''}`}
      >
        <button 
          className="close-btn" 
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        
        <div className="expanded-menu-container">
          <div className="menu-section">
            <h3 className="menu-heading">Menu</h3>
            <div className="menu-links">
              {['Home', 'Blog', 'Contact', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="menu-section">
            <h3 className="menu-heading">Portfolio</h3>
            <div className="menu-links">
              {['Projects', 'Skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="menu-section contact-section">
            <h3 className="menu-heading">Connect</h3>
            <div className="contact-info">
              <div className="social-links">
                <a href="https://github.com/himalnpne" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.5C19.9988 8.30635 19.5325 7.16303 18.7 6.30005C19.0905 5.26296 19.0545 4.11949 18.6 3.10005C18.6 3.10005 17.5 2.80005 15.1 4.40005C13.0672 3.8706 10.9328 3.8706 8.9 4.40005C6.5 2.80005 5.4 3.10005 5.4 3.10005C4.94548 4.11949 4.90953 5.26296 5.3 6.30005C4.46745 7.16303 4.00122 8.30635 4 9.50005C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/himalnpne" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.behance.net/hmlnpan" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Behance">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 12H14C15.4 12 16.5 10.9 16.5 9.5C16.5 8.1 15.4 7 14 7H8.5V12ZM8.5 12V14.5C8.5 15.9 9.6 17 11 17H14C15.4 17 16.5 15.9 16.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 9H18.5C17.7 9 17 9.7 17 10.5V10.5C17 11.3 17.7 12 18.5 12H19C19.8 12 20.5 12.7 20.5 13.5V13.5C20.5 14.3 19.8 15 19 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/himal_npne" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M17.5 6.51L17.51 6.4989" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;