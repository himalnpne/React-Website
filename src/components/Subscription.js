import React, { useState } from 'react';
import './Subscription.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading' | null
  const [touched, setTouched] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    
    if (!email || !isValidEmail(email)) {
      return;
    }

    setStatus('loading');

    const formData = new FormData();
    formData.append('emailAddress', email);
    formData.append('fvv', '1');
    formData.append('partialResponse', '[null,null,"8451942554320962319"]');
    formData.append('pageHistory', '0');
    formData.append('fbzx', '5057574322375540524');

    try {
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfhMCTSn5w5E2O091mmWmGVy4UTXOEfje3Rp3wf7GAinKNSlg/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setStatus('success');
      setEmail('');
      setTouched(false);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-card">
        <div className="newsletter-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        
        <h2 className="newsletter-title">Join Our Newsletter</h2>
        <p className="newsletter-description">Get exclusive updates, tips, and offers delivered straight to your inbox.</p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address *</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="your@email.com"
              className={`form-input ${touched && !isValidEmail(email) ? 'form-input-error' : ''}`}
              aria-invalid={touched && !isValidEmail(email)}
              aria-describedby="email-error"
            />
            {touched && !isValidEmail(email) && (
              <p id="email-error" className="error-message">
                {email ? 'Please enter a valid email address' : 'Email is required'}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="submit-btn"
          >
            {status === 'loading' ? (
              <>
                <svg className="spinner" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
                  <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                </svg>
                Processing...
              </>
            ) : (
              'Subscribe Now'
            )}
          </button>

          {status === 'success' && (
            <div className="alert alert-success">
              <svg className="alert-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Thank you for subscribing! Please check your email to confirm.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-error">
              <svg className="alert-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Something went wrong. Please try again later.</span>
            </div>
          )}

          <p className="privacy-note">
            We respect your privacy. Unsubscribe at any time. By subscribing, you agree to our{' '}
            <a href="#" className="privacy-link">Privacy Policy</a> and consent to receive updates.
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;