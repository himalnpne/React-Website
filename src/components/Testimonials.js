import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

// Mock images (in a real app, you would import these)
import anishImage from './images/anish1.jpg';
import niranImage from './images/niran.jpg';
import hemantImage from './images/hemant.jpg';
import defaultAvatar from './images/defaultuser.png';

const testimonials = [
  {
    name: 'Anish Neupane',
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
    img: niranImage,
    accent: 'var(--accent-blue)',
    lightAccent: 'var(--accent-light-blue)'
  },
  {
    name: 'Hemant Das',
    role: 'Full Stack Developer',
    content: 'Himal development insights saved me hours of debugging. I also admire his portfolio design; it inspired me to revamp my own site. Himal is a game-changer for the community.',
    img: hemantImage,
    accent: 'var(--accent-purple)',
    lightAccent: 'var(--accent-light-purple)'
  },
  {
    name: 'Anonymous User',
    role: 'Business Owner',
    content: 'I needed a system to give my business a competitive edge. This solution has been invaluable, helping me streamline operations and stay ahead in my industry. I am unable to disclose the specifics due to legal regulations, but I can confidently say it has made a significant difference.',
    img: defaultAvatar,
    accent: 'var(--accent-orange)',
    lightAccent: 'var(--accent-light-purple)'
  }
];

const TestimonialCard = ({ testimonial, isExpanded, onToggleExpand, isMobile }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        // Reset to collapsed state to measure natural height
        const wasExpanded = isExpanded;
        if (wasExpanded) {
          contentRef.current.style.webkitLineClamp = isMobile ? '3' : '4';
        }
        
        const lineHeight = parseInt(getComputedStyle(contentRef.current).lineHeight) || 24;
        const contentHeight = contentRef.current.scrollHeight;
        const maxHeight = lineHeight * (isMobile ? 3 : 4);
        setIsOverflowing(contentHeight > maxHeight);
        
        // Restore expanded state if it was expanded
        if (wasExpanded) {
          contentRef.current.style.webkitLineClamp = 'unset';
        }
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(checkOverflow);
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [testimonial.content, isMobile, isExpanded]);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultAvatar;
  };

  const toggleExpanded = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isOverflowing) {
      onToggleExpand();
    }
  };

  return (
    <div 
      className="testimonial-card"
      style={{
        '--card-accent': testimonial.accent,
        '--card-light-accent': testimonial.lightAccent
      }}
    >
      <div 
        ref={contentRef}
        className={`testimonial-content ${isExpanded ? 'expanded' : ''}`}
      >
        {testimonial.content}
      </div>
      {isOverflowing && (
        <button 
          className="see-more-btn" 
          onClick={toggleExpanded}
          onTouchEnd={(e) => {
            e.stopPropagation();
            toggleExpanded(e);
          }}
          aria-label={isExpanded ? 'Show less' : 'Show more'}
        >
          {isExpanded ? 'Show Less' : 'Read More'} 
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
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
  const [expandedCards, setExpandedCards] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Minimum swipe distance required
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Reset expanded state when switching between mobile and desktop
      if (!mobile && Object.keys(expandedCards).length > 0) {
        setExpandedCards({});
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [expandedCards]);

  const onTouchStart = (e) => {
    // Only track touch events on the carousel container, not on buttons
    if (!e.target.closest('.see-more-btn')) {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const onTouchMove = (e) => {
    // Only track touch events on the carousel container, not on buttons
    if (!e.target.closest('.see-more-btn')) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const onTouchEnd = (e) => {
    // Don't process swipe if interaction was with see-more button
    if (e.target.closest('.see-more-btn')) {
      return;
    }

    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setExpandedCards({});
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setExpandedCards({});
  };

  // For desktop carousel
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  const handleToggleExpand = (cardId) => {
    setExpandedCards(prev => {
      // If the card is already expanded, collapse it
      if (prev[cardId]) {
        const newState = {...prev};
        delete newState[cardId];
        return newState;
      }
      // Otherwise expand it
      return {...prev, [cardId]: true};
    });
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Clients Say</h2>
        <p>Real feedback from real people who have worked with me</p>
      </div>
      
      {isMobile ? (
        <div className="mobile-testimonials-container">
          <div 
            className="testimonial-carousel"
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <TestimonialCard 
              testimonial={testimonials[currentIndex]} 
              isExpanded={!!expandedCards[currentIndex]}
              onToggleExpand={() => handleToggleExpand(currentIndex)}
              isMobile={true}
            />
          </div>
          <div className="carousel-controls">
            <button 
              onClick={prevTestimonial} 
              className="carousel-button"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setExpandedCards({});
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial} 
              className="carousel-button"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="desktop-testimonials-container">
          <div className="desktop-carousel-wrapper">
            <button 
              onClick={prevTestimonial} 
              className="desktop-carousel-button prev"
              aria-label="Previous testimonials"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="desktop-testimonials-carousel">
              {getVisibleTestimonials().map((t, index) => (
                <TestimonialCard 
                  key={`${t.originalIndex}-${currentIndex}`} 
                  testimonial={t} 
                  isExpanded={!!expandedCards[t.originalIndex]}
                  onToggleExpand={() => handleToggleExpand(t.originalIndex)}
                  isMobile={false}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial} 
              className="desktop-carousel-button next"
              aria-label="Next testimonials"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="desktop-carousel-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setExpandedCards({});
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;