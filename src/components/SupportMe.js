// SupportMe.js
import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../DarkModeContext';
import { 
  FaHeart, 
  FaRocket, 
  FaUsers, 
  FaBolt,
  FaCopy,
  FaArrowRight,
  FaLink
} from 'react-icons/fa';
import { SiSignal } from 'react-icons/si';
import './SupportMe.css';

// Import QR code image and Payoneer logo
import payoneerQr from './images/payoneer-qr.png';
import payoneerLogo from './images/payoneer-logo.svg';

function SupportMe() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [qrError, setQrError] = useState(false);
  const { isDarkMode } = useDarkMode();

  const signalLink = "https://signal.me/#eu/TXMDKP0cwDqAYa4TemME17dk_qORav7Z24ZxCcUAioUtERRn7s9Ii563ZlWt6mLs";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCopyLink = () => {
    const link = 'https://link.payoneer.com/Token?t=F582E1BA6E154DA2A8802E884260FE94&src=pl';
    navigator.clipboard.writeText(link).then(() => {
      const btn = document.querySelector('.copy-btn');
      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      }
    }).catch(() => {
      alert('Copy this link: ' + link);
    });
  };

  return (
    <div className={`support-page ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Floating accent elements */}
      <div className="floating-accent red-accent"></div>
      <div className="floating-accent blue-accent"></div>
      <div className="floating-accent purple-accent"></div>
      <div className="floating-accent orange-accent"></div>

      <div className="support-container">
        <div className="support-content">
          {/* Header Section */}
          <div className="support-header">
            <h1 className={`support-title ${isLoaded ? 'animate-in' : ''}`}>
              Support My Work
            </h1>
            <p className={`support-subtitle ${isLoaded ? 'animate-in' : ''}`}>
              Your support helps me create better content, build innovative projects, 
              and continue sharing knowledge with the community.
            </p>
          </div>

          {/* Main Support Card */}
          <div className="support-card-wrapper">
            <div className="support-card">
              <div className="support-card-glow"></div>
              
              <div className="support-card-content">
                <div className="support-logo-wrapper">
                  <img 
                    src={payoneerLogo} 
                    alt="Payoneer" 
                    className={`payoneer-logo ${isDarkMode ? 'dark-mode' : ''}`}
                  />
                </div>

                <p className="support-description">
                  Scan the QR code below with your Payoneer app or click the link to send your support.
                  Every contribution, big or small, is deeply appreciated.
                </p>

                {/* QR Code Section */}
                <div className="qr-section">
                  <div className="qr-container">
                    {!qrError ? (
                      <img 
                        src={payoneerQr}
                        alt="Payoneer QR Code"
                        className="qr-code"
                        loading="lazy"
                        onError={() => setQrError(true)}
                      />
                    ) : (
                      <div className="qr-fallback">
                        <span className="qr-emoji">📱</span>
                        <span className="qr-text">Scan to Support</span>
                      </div>
                    )}
                    <div className="qr-label">Payoneer</div>
                  </div>
                </div>

                {/* Payment Link */}
                <div className="payment-link-section">
                  <div className="link-container">
                    <div className="link-display">
                      <FaLink className="link-icon" />
                      <span className="link-text">
                        payoneer.com/...
                      </span>
                    </div>
                    <button 
                      className="copy-btn" 
                      onClick={handleCopyLink}
                      aria-label="Copy payment link"
                    >
                      <FaCopy />
                      <span>Copy</span>
                    </button>
                  </div>
                  
                  <a 
                    href="https://link.payoneer.com/Token?t=F582E1BA6E154DA2A8802E884260FE94&src=pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support-cta-btn"
                  >
                    <span className="btn-text">Open Payoneer Link</span>
                    <FaArrowRight className="btn-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Ways to Support - Signal Only */}
          <div className="alt-support-section">
            <div className="alt-support-card">
              <div className="alt-support-content">
                <h3>Other Ways to Support</h3>
                <p>
                  You can support my work through the payment option above. For eSewa, Khalti, 
                  bank transfer, SWIFT, or other payment methods, please contact me for details. 
                  Every bit of support is genuinely appreciated.
                </p>
                <div className="alt-support-links">
                  <a 
                    href={signalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alt-support-btn signal-btn"
                  >
                    <SiSignal className="btn-icon" />
                    <span className="btn-text">Message on Signal</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Why Support Section */}
          <div className="why-support-section">
            <h2 className="why-title">Why Your Support Matters</h2>
            <div className="why-grid">
              <div className="why-card">
                <FaHeart className="why-icon" />
                <h3>Free Resources</h3>
                <p>Helps me continue creating free tutorials, open-source projects, and educational content for everyone.</p>
              </div>
              <div className="why-card">
                <FaRocket className="why-icon" />
                <h3>Innovation</h3>
                <p>Enables me to experiment with new technologies and build innovative solutions that push boundaries.</p>
              </div>
              <div className="why-card">
                <FaUsers className="why-icon" />
                <h3>Community</h3>
                <p>Supports the growth of our developer community through events, workshops, and knowledge sharing.</p>
              </div>
              <div className="why-card">
                <FaBolt className="why-icon" />
                <h3>Sustainable Development</h3>
                <p>Allows me to dedicate more time to open-source contributions and high-quality project development.</p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="support-footer-note">
            <p>Thank you for considering supporting my work. Every contribution makes a difference! </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportMe;