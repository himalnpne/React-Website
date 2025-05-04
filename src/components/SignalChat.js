// src/components/SignalChat.js
import React, { useState, useEffect } from 'react';
import './SignalChat.css';

const SignalChat = () => {
  const [showPopup, setShowPopup] = useState(false);
  const signalLink = "https://signal.me/#eu/AfMOsRG2KNDpql9qeXOSKJZdsSynANFcFS4r8UUEW-8fnVVO61FMhYsQUOYqMD-w";

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
      
      // Hide popup after 8 seconds
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 8000);
      
      return () => clearTimeout(hideTimer);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="signal-chat-container">
      {showPopup && (
        <div className="signal-popup">
          <p>Need quick help? Chat with us on Signal!</p>
          <p>We typically reply within minutes.</p>
        </div>
      )}
      <a
        href={signalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="signal-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="white" d="M15.6 2.2c-2.5-1-5.3 0-6.3 2.5-1 2.5 0 5.3 2.5 6.3.4.1.7.3.9.6.2.3.3.7.2 1.1v2.9c0 .3.2.5.5.5h2.9c.4 0 .8-.2 1.1-.4.3-.2.5-.5.6-.9 1-2.5 3.8-3.5 6.3-2.5s3.5 3.8 2.5 6.3c-.5 1.3-1.5 2.3-2.8 2.8-1 .4-2.1.4-3.1 0-1.3-.5-2.3-1.5-2.8-2.8-.4-1-.4-2.1 0-3.1.1-.2.3-.4.5-.4h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1.5c-.6 0-1.1.3-1.4.8-.7 1.7-.7 3.6 0 5.3.8 2 2.7 3.3 4.8 3.8 2.1.5 4.3 0 5.8-1.5 1.5-1.5 2-3.7 1.5-5.8-.5-2.1-1.8-3.9-3.8-4.8-1.7-.7-3.6-.7-5.3 0-.5.2-.8.8-.8 1.4v1.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2.9c0-.2 0-.4.1-.5.1-.2.3-.3.5-.4 2.5-1 3.5-3.8 2.5-6.3-1-2.5-3.8-3.5-6.3-2.5zM8.8 7.2c-1.5-.6-3.2 0-3.8 1.5-.3.8-.1 1.7.5 2.3.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-3.2c0-.3.2-.5.5-.5s.5.2.5.5v6.2c0 .3.2.5.5.5h4.5c.1 0 .2 0 .3-.1.2-.2.2-.5 0-.7l-1.5 1.5c-1.4-1.4-1.1-4.5.9-7.4L17 7c.3-.3.1-.6-.1-.7-.1-.1-.2-.1-.3-.1h-4.5c-.3 0-.5.2-.5.5v4.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8.8c0-.2 0-.4.1-.5.1-.2.3-.3.5-.4 1.5-.6 2.1-2.3 1.5-3.8-.6-1.5-2.3-2.1-3.8-1.5-.8.3-1.4.9-1.7 1.7-.4 1 0 2.1.9 2.6.2.1.5 0 .6-.2.1-.2 0-.5-.2-.6-.6-.3-.8-1.2-.5-2 .3-.6.9-1 1.5-1.2z"/>
        </svg>
      </a>
    </div>
  );
};

export default SignalChat;