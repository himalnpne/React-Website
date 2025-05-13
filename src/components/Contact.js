import React, { useState } from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    username: '', 
    platform: '', 
    message: '' 
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading' | null
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
    setTouched({ ...touched, [e.target.id]: true });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email && !form.username) newErrors.contact = 'Please provide either email or username';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Please enter a valid email';
    if (form.username && form.username.length < 3) newErrors.username = 'Username must be at least 3 characters';
    if (form.username && !form.platform) newErrors.platform = 'Please select a platform';
    if (!form.message.trim()) newErrors.message = 'Please enter your message';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('entry.2005620554', form.name);
      formData.append('entry.89055849', form.email);
      formData.append('entry.1795697902', form.username);
      formData.append('entry.818374615', form.platform);
      formData.append('entry.839337160', form.message);

      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeudTJfppkkRYXqlgaw50zONswJtng-7IGDhEBjt2_l0KMK1A/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleNewMessage = () => {
    setStatus(null);
    setForm({ name: '', email: '', username: '', platform: '', message: '' });
    setErrors({});
    setTouched({});
  };

  return (
    <main className="contact-container">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c8002a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#014b92', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <div className="contact-header">
        <div className="contact-icon">
          <i className="fas fa-paper-plane"></i>
        </div>
        <h1>Connect With Us</h1>
        <p>Got a question? Send us a message!</p>
      </div>

      {status !== 'success' ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="required">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your name here"
              className={`form-control ${touched.name && errors.name ? 'input-error' : ''}`} 
              value={form.name} 
              onChange={handleChange} 
              onBlur={() => setTouched({...touched, name: true})}
            />
            {touched.name && errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label className="required">Contact Method</label>
            <div className="contact-option">
              <input 
                type="email" 
                id="email" 
                placeholder="your@email.com" 
                className={`form-control ${touched.email && errors.email ? 'input-error' : ''}`} 
                value={form.email} 
                onChange={handleChange}
                onBlur={() => setTouched({...touched, email: true})}
              />
              <div className="or-divider">OR</div>
              <input 
                type="text" 
                id="username" 
                placeholder="your.social.username" 
                className={`form-control ${touched.username && errors.username ? 'input-error' : ''}`} 
                value={form.username} 
                onChange={handleChange}
                onBlur={() => setTouched({...touched, username: true})}
              />
            </div>
            {errors.contact && <div className="error-message">{errors.contact}</div>}
            {touched.email && errors.email && <div className="error-message">{errors.email}</div>}
            {touched.username && errors.username && <div className="error-message">{errors.username}</div>}
          </div>

          {form.username && (
            <div className="form-group">
              <label htmlFor="platform" className="required">Social Platform</label>
              <select 
                id="platform" 
                className={`form-control ${touched.platform && errors.platform ? 'input-error' : ''}`} 
                value={form.platform} 
                onChange={handleChange}
                onBlur={() => setTouched({...touched, platform: true})}
              >
                <option value="">Select your social platform</option>
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Signal">Signal</option>
                <option value="Snapchat">Snapchat</option>
                <option value="Telegram">Telegram</option>
                <option value="X">X (formerly Twitter)</option>
              </select>
              {touched.platform && errors.platform && <div className="error-message">{errors.platform}</div>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="message" className="required">Your Message</label>
            <textarea 
              id="message" 
              placeholder="Type your message here..."
              className={`form-control ${touched.message && errors.message ? 'input-error' : ''}`} 
              value={form.message} 
              onChange={handleChange}
              onBlur={() => setTouched({...touched, message: true})}
            ></textarea>
            {touched.message && errors.message && <div className="error-message">{errors.message}</div>}
          </div>

          <button type="submit" className="submit-btn" disabled={status === 'loading'}>
            {status === 'loading' ? (
              <>
                <svg className="spinner" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="url(#icon-gradient)" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
                  <path fill="url(#icon-gradient)" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {status === 'error' && (
            <div className="alert error-alert">
              <svg viewBox="0 0 20 20">
                <path fill="url(#icon-gradient)" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>An error occurred. Please try again.</span>
            </div>
          )}

          <div className="privacy-note">
            By submitting, you agree to our <a href="#" className="privacy-link">Privacy Policy</a>.
          </div>
        </form>
      ) : (
        <div className="success-content">
          <div className="alert success-alert">
            <svg viewBox="0 0 20 20">
              <path fill="url(#icon-gradient)" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p>Thank you for your message!</p>
              <p className="success-details">We'll get back to you soon.</p>
            </div>
          </div>
          
          <button onClick={handleNewMessage} className="submit-btn submit-another">
            Send Another Message
          </button>
          
          <div className="privacy-note">
            Need help? <a href="#" className="privacy-link">Contact us</a>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;