import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignalMessenger } from '@fortawesome/free-brands-svg-icons';
// import babyHelloGif from './gif/baby-hello.gif';
import './SignalChat.css';

const SignalChat = () => {
  const [showPopup, setShowPopup] = useState(false);
  const signalLink = "https://signal.me/#eu/AfMOsRG2KNDpql9qeXOSKJZdsSynANFcFS4r8UUEW-8fnVVO61FMhYsQUOYqMD-w";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="signal-chat-container">
      {showPopup && (
        <div className="signal-popup">
          {/* <img 
            src={babyHelloGif} 
            alt="Waving hello" 
            className="waving-gif"
          /> */}
          <p>Need quick help? Chat with us on Signal!</p>
          <p>We typically reply within minutes.</p>
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
