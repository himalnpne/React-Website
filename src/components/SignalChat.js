import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignalMessenger } from '@fortawesome/free-brands-svg-icons';
import { faComments, faTimes, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../DarkModeContext';
import './SignalChat.css';
import qrImage from './images/signal-qr.jpeg';

const SignalChat = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isQRExpanded, setIsQRExpanded] = useState(false);
  const [isHoveringPopup, setIsHoveringPopup] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [timer, setTimer] = useState(4);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const popupRef = useRef(null);
  const dismissTimerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const timerIntervalRef = useRef(null);
  
  const signalLink = "https://signal.me/#eu/TXMDKP0cwDqAYa4TemME17dk_qORav7Z24ZxCcUAioUtERRn7s9Ii563ZlWt6mLs";
  const { isDarkMode } = useDarkMode();

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

  // Timer functions
  const startTimer = () => {
    clearTimer();
    setTimer(3);
    setIsTimerRunning(true);
    
    timerIntervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearTimer();
          setShowPopup(false);
          setIsTimerRunning(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const clearTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    clearTimer();
    if (showPopup && !isHoveringPopup && !isQRExpanded && !isHoveringButton) {
      startTimer();
    }
  };

  const stopTimer = () => {
    clearTimer();
    setTimer(4);
  };

  // Show popup after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      startTimer();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        const signalButton = document.querySelector('.signal-button');
        if (signalButton && !signalButton.contains(event.target)) {
          setShowPopup(false);
          setIsQRExpanded(false);
          clearTimer();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle hover for desktop
  const handleButtonMouseEnter = () => {
    if (!isMobile) {
      setIsHoveringButton(true);
      clearTimeout(hoverTimeoutRef.current);
      setShowPopup(true);
      stopTimer();
    }
  };

  const handleButtonMouseLeave = () => {
    setIsHoveringButton(false);
    if (!isMobile && !isHoveringPopup && !isQRExpanded) {
      hoverTimeoutRef.current = setTimeout(() => {
        startTimer();
      }, 300);
    }
  };

  const handlePopupMouseEnter = () => {
    setIsHoveringPopup(true);
    stopTimer();
    clearTimeout(hoverTimeoutRef.current);
  };

  const handlePopupMouseLeave = () => {
    setIsHoveringPopup(false);
    if (!isQRExpanded && !isHoveringButton) {
      startTimer();
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsQRExpanded(false);
    clearTimer();
  };

  const toggleQRExpand = (e) => {
    e.stopPropagation();
    setIsQRExpanded(!isQRExpanded);
    if (!isQRExpanded) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const handleSignalButtonClick = (e) => {
    if (isMobile) {
      return;
    }
    
    e.preventDefault();
    setShowPopup(!showPopup);
    if (!showPopup) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div className="signal-chat-container">
      {showPopup && (
        <div 
          className={`signal-popup ${isMobile ? 'mobile' : ''}`}
          ref={popupRef}
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
          data-dark-mode={isDarkMode}
        >
          <button 
            className="close-popup" 
            onClick={handleClosePopup}
            aria-label="Close chat popup"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          {/* Timer Bar */}
          {isTimerRunning && !isHoveringPopup && !isQRExpanded && (
            <div className="timer-container">
              <div className="timer-bar">
                <div 
                  className="timer-bar-fill" 
                  style={{ width: `${(timer / 4) * 100}%` }}
                />
              </div>
              <span className="timer-text">Closing in {timer}s</span>
            </div>
          )}
          
          <div className="popup-layout">
            {/* Left side - Main content */}
            <div className="popup-main-content">
              <div className="popup-header">
                <FontAwesomeIcon icon={faComments} className="chat-icon" />
                <h3>Need quick help?</h3>
              </div>
              <p>Chat with us on Signal! We typically reply within minutes.</p>
              <div className="popup-actions">
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

            {/* Right side - QR Code */}
            <div className="popup-qr-section">
              <div className="qr-container">
                <img 
                  src={qrImage} 
                  alt="Signal QR Code" 
                  className={`qr-image ${isQRExpanded ? 'qr-expanded' : ''}`}
                />
                <button 
                  className={`qr-expand-btn ${isQRExpanded ? 'active' : ''}`}
                  onClick={toggleQRExpand}
                  aria-label={isQRExpanded ? "Collapse QR code" : "Expand QR code"}
                  title={isQRExpanded ? "Collapse" : "Expand QR for easier scanning"}
                >
                  <FontAwesomeIcon icon={isQRExpanded ? faCompress : faExpand} />
                </button>
                <span className="qr-label">Scan to chat</span>
              </div>
            </div>
          </div>

          {/* Fullscreen QR overlay when expanded */}
          {isQRExpanded && (
            <div className="qr-overlay" onClick={() => setIsQRExpanded(false)}>
              <div className="qr-overlay-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="qr-overlay-close"
                  onClick={toggleQRExpand}
                  aria-label="Close QR view"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <h4>Scan with Signal</h4>
                <img src={qrImage} alt="Signal QR Code" className="qr-overlay-image" />
                <p className="qr-overlay-hint">Open Signal app and scan this code</p>
                <a
                  href={signalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="signal-chat-link qr-overlay-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  Or click to open Signal
                </a>
              </div>
            </div>
          )}
        </div>
      )}
      
      <a
        href={signalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="signal-button"
        aria-label="Chat on Signal"
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
        onClick={handleSignalButtonClick}
      >
        <FontAwesomeIcon icon={faSignalMessenger} size="xl" />
        {!isMobile && showPopup && (
          <span className="hover-tooltip">Chat with us</span>
        )}
      </a>
    </div>
  );
};

export default SignalChat;