import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', username: '', platform: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
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

      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <main className="form-container">
      <div className="form-header">
        <h1>Connect With Us</h1>
        <p>Got a question? We'd love to hear from you. Send us a message!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="required">Full Name</label>
          <input type="text" id="name" className="form-control" value={form.name} onChange={handleChange} />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label className="required">Contact Method</label>
          <div className="contact-option">
            <input type="email" id="email" placeholder="Email" className="form-control" value={form.email} onChange={handleChange} />
            <div className="or-divider">OR</div>
            <input type="text" id="username" placeholder="Username" className="form-control" value={form.username} onChange={handleChange} />
          </div>
          {errors.contact && <div className="error-message">{errors.contact}</div>}
          {errors.email && <div className="error-message">{errors.email}</div>}
          {errors.username && <div className="error-message">{errors.username}</div>}
        </div>

        {form.username && (
          <div className="form-group">
            <label htmlFor="platform" className="required">Social Platform</label>
            <select id="platform" className="form-control" value={form.platform} onChange={handleChange}>
              <option value="">Select a Platform</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Signal">Signal</option>
              <option value="Snapchat">Snapchat</option>
              <option value="Telegram">Telegram</option>
              <option value="X">X (formerly Twitter)</option>
            </select>
            {errors.platform && <div className="error-message">{errors.platform}</div>}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="message" className="required">Your Message</label>
          <textarea id="message" className="form-control" value={form.message} onChange={handleChange}></textarea>
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {submitted && (
        <div className="success-message">
          <i className="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.
        </div>
      )}

      <div className="privacy-note">
        By submitting, you agree to our <a href="#" target="_blank">Privacy Policy</a>.
      </div>
    </main>
  );
};

export default Contact;
