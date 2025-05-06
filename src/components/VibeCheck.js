import React, { useEffect } from 'react';
import './VibeCheck.css';

const VibeCheck = () => {
  // Add parallax effect to floating accents on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const moveX = (clientX - windowWidth / 2) / 50;
      const moveY = (clientY - windowHeight / 2) / 50;
      
      const redAccent = document.querySelector('.red-accent');
      const blueAccent = document.querySelector('.blue-accent');
      const purpleAccent = document.querySelector('.purple-accent');
      
      if (redAccent && blueAccent && purpleAccent) {
        redAccent.style.transform = `translate(${moveX * -1}px, ${moveY * -1}px)`;
        blueAccent.style.transform = `translate(${moveX}px, ${moveY}px)`;
        purpleAccent.style.transform = `translate(${moveY * -1}px, ${moveX}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="vibe-check compact">
      {/* Floating accent backgrounds */}
      <div className="floating-accent red-accent"></div>
      <div className="floating-accent blue-accent"></div>
      <div className="floating-accent purple-accent"></div>
      
      <div className="vibe-content">
        <header className="vibe-header">
          <div className="name-container">
            <h1 className="vibe-title">VibeCheck</h1>
            <div className="splash-effect"></div>
            <div className="ripple-effect"></div>
            <div className="ripple-effect-2"></div>
          </div>
          <p className="vibe-subtitle">My personal collection - if our music taste matches, we can vibe together</p>
        </header>
        
        <div className="music-icon-container">
          <img 
            src="./gif/music.gif" 
            alt="Music animation" 
            className="music-gif"
          />
        </div>
        
        <div className="playlist-buttons">
          <div className="button-group">
            <a 
              href="https://www.youtube.com/playlist?list=PLMFLP6-j47w3AIa_SqUEPeBDdqquR4_g-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="playlist-button youtube-button"
            >
              My YouTube Mix
              <span className="button-arrow">→</span>
            </a>
            
            <a 
              href="https://open.spotify.com/playlist/5MBirI8pSfRodbaqhbIR56?si=f2C0gjSMRz-hq25zDNdeyw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="playlist-button spotify-button"
            >
              My Spotify Vibes
              <span className="button-arrow">→</span>
            </a>
          </div>
        </div>
        
        <footer className="vibe-footer">
          <p>Keep the vibes going strong ✨</p>
        </footer>
      </div>
    </div>
  );
};

export default VibeCheck;