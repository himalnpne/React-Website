import React, { useState, useEffect } from 'react';
import './Testimonials.css';

// Import images
import anishImage from './testimonials/anish1.jpg';
import prathamImage from './testimonials/niran.jpg';
import aayushImage from './testimonials/hemant.jpg';
import defaultAvatar from './testimonials/default-avatar.png';

const testimonials = [
  {
    name: 'Anish Neupane ',
    role: 'Graphic Designer',
    content: 'Himal helped me solve a critical issue with my MacBook that even Apple Support couldnt resolve. His expertise in tech is mind-blowing and his calm attitude made everything smooth. Highly recommend!',
    img: anishImage,
    accent: 'var(--accent-orange)',
    lightAccent: 'var(--accent-light-purple)'
  },
  {
    name: 'Niran Basnet',
    role: 'Mobile App Developer',
    content: 'As a mobile app developer new to UI/UX design, I learned so much from Himal detailed blog posts and his 1-on-1 feedback sessions. His designs are clean, user-friendly, and effective.',
    img: prathamImage,
    accent: 'var(--accent-blue)',
    lightAccent: 'var(--accent-light-blue)'
  },
  {
    name: 'Hemant Das',
    role: 'Full Stack Developer',
    content: 'Himal development insights saved me hours of debugging. I also admire his portfolio design; it inspired me to revamp my own site. Himal is a game-changer for the community.',
    img: aayushImage,
    accent: 'var(--accent-purple)',
    lightAccent: 'var(--accent-light-purple)'
  },
];

const TestimonialCard = ({ testimonial, expanded, setExpanded }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  };

  return (
    <div 
      className="testimonial-card"
      style={{
        '--card-accent': testimonial.accent,
        '--card-light-accent': testimonial.lightAccent
      }}
    >
      <div className="testimonial-content">
        {expanded ? testimonial.content : `${testimonial.content.substring(0, 150)}...`}
      </div>
      {testimonial.content.length > 150 && (
        <button className="see-more-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'See Less' : 'See More'} 
          <i className={`fas fa-chevron-${expanded ? 'up' : 'down'}`}></i>
        </button>
      )}
      <div className="testimonial-author">
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="author-avatar"
          onError={handleImageError}
          style={{ borderColor: testimonial.accent }}
        />
        <div className="author-info">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setExpanded(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setExpanded(false);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Clients Say</h2>
        <p>Real feedback from real people who've worked with me</p>
      </div>
      
      {isMobile ? (
        <div className="mobile-testimonials-container">
          <div className="testimonial-carousel">
            <TestimonialCard 
              testimonial={testimonials[currentIndex]} 
              expanded={expanded}
              setExpanded={setExpanded}
            />
          </div>
          <div className="carousel-controls">
            <button onClick={prevTestimonial} className="carousel-button">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setExpanded(false);
                  }}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="carousel-button">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="testimonials-container">
          {testimonials.map((t, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={t} 
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;