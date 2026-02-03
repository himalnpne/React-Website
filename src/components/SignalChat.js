import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignalMessenger } from '@fortawesome/free-brands-svg-icons';
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SignalChat.css';

const SignalChat = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const popupRef = useRef(null);
  const dismissTimerRef = useRef(null);
  const signalLink = "https://signal.me/#eu/5n2k8h1hABs_c43gYlL2yfD1jaZbLNu5YZZjigKMxcExpn0xuf9MhZc1XqGtMgTV";

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Start dismiss timer
  const startDismissTimer = () => {
    clearTimeout(dismissTimerRef.current);
    dismissTimerRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 8000); // 4 seconds
  };

  // Show popup after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      startDismissTimer();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Reset dismiss timer when user interacts with popup
  const handlePopupInteraction = () => {
    startDismissTimer();
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Check if the click is not on the Signal button
        const signalButton = document.querySelector('.signal-button');
        if (signalButton && !signalButton.contains(event.target)) {
          setShowPopup(false);
          clearTimeout(dismissTimerRef.current);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    clearTimeout(dismissTimerRef.current);
  };

  return (
    <div className="signal-chat-container">
      {showPopup && (
        <div 
          className={`signal-popup ${isMobile ? 'mobile' : ''}`}
          ref={popupRef}
          onMouseEnter={handlePopupInteraction}
          onClick={handlePopupInteraction}
        >
          <button className="close-popup" onClick={handleClosePopup}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="popup-content">
            <div className="popup-header">
              <FontAwesomeIcon icon={faComments} className="chat-icon" />
              <h3>Need quick help?</h3>
            </div>
            <p>Chat with us on Signal! We typically reply within minutes.</p>
            <a
              href={signalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="signal-chat-link"
              onClick={(e) => e.stopPropagation()}
            >
              Start Chat
            </a>
          </div>
        </div>
      )}
      <a
        href={signalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="signal-button"
        aria-label="Chat on Signal"
      >
        <FontAwesomeIcon icon={faSignalMessenger} size="xl" />
      </a>
    </div>
  );
};

export default SignalChat;