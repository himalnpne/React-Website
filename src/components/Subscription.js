import React, { useState } from 'react';
import './Subscription.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState(null);
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading' | null
  const [touched, setTouched] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    setStatus('loading');

    if (!email || !isValidEmail(email)) {
      setStatus(null);
      return;
    }

    const formData = new FormData();
    formData.append('emailAddress', email);
    formData.append('fvv', '1');
    formData.append('partialResponse', '[null,null,"8451942554320962319"]');
    formData.append('pageHistory', '0');
    formData.append('fbzx', '5057574322375540524');

    try {
      await fetch(
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfhMCTSn5w5E2O091mmWmGVy4UTXOEfje3Rp3wf7GAinKNSlg/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );
      setStatus('success');
      setSubmittedEmail(email);
      setEmail('');
      setTouched(false);
    } catch (err) {
      setStatus('error');
      console.error('Submission error:', err);
    }
  };

  const handleNewSubscription = () => {
    setStatus(null);
    setSubmittedEmail(null);
    setEmail('');
  };

  return (
    <div className="newsletter">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c8002a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#014b92', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <div className="newsletter-icon">
        <i className="fas fa-envelope"></i>
      </div>
      
      <h3 className="newsletter-title">Stay Updated</h3>
      <p className="newsletter-description">Subscribe to our newsletter for the latest news and updates.</p>

      {status !== 'success' ? (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="newsletter-form-group">
            <label htmlFor="email" className="newsletter-label">Email Address *</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="your@email.com"
              className={`newsletter-input ${touched && !isValidEmail(email) ? 'newsletter-input-error' : ''}`}
            />
            {touched && !isValidEmail(email) && (
              <p className="newsletter-error">
                {email ? 'Please enter a valid email' : 'Email is required'}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="newsletter-submit"
          >
            {status === 'loading' ? (
              <>
                <svg className="newsletter-spinner" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="url(#icon-gradient)" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
                  <path fill="url(#icon-gradient)" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                </svg>
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </button>

          {status === 'error' && (
            <div className="newsletter-alert newsletter-error-alert">
              <svg viewBox="0 0 20 20">
                <path fill="url(#icon-gradient)" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>An error occurred. Please try again.</span>
            </div>
          )}

          <p className="newsletter-privacy">
            By subscribing, you agree to our{' '}
            <a href="#" className="newsletter-privacy-link">Privacy Policy</a>. We'll never spam you or share your email with third parties.
          </p>
        </form>
      ) : (
        <div className="newsletter-success-content">
          <div className="newsletter-alert newsletter-success">
            <svg viewBox="0 0 20 20">
              <path fill="url(#icon-gradient)" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p>Thank you for subscribing!</p>
              <p className="newsletter-success-email">
                We've sent a confirmation to <strong>{submittedEmail}</strong>
              </p>
            </div>
          </div>
          
          <button
            onClick={handleNewSubscription}
            className="newsletter-submit newsletter-submit-another"
          >
            Subscribe Another Email
          </button>
          
          <p className="newsletter-privacy">
            Need help? <a href="#" className="newsletter-privacy-link">Contact us</a>
          </p>
        </div>
      )}
    </div>
  );
}