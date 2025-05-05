import React, { useState, useEffect } from 'react';
import './Photos.css';

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // This path is relative to THIS component file
      const imageContext = require.context('./gallery-images', false, /\.(png|jpe?g|svg|webp)$/);
      
      // Get all image imports
      const importedImages = imageContext.keys().map(imageContext);
      
      setImages(importedImages);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load images:", err);
      setError("Failed to load gallery images. Please try again later.");
      setLoading(false);
    }
  }, []);

  // Bento grid layout patterns
  const bentoPatterns = [
    ['tall', 'wide', 'wide'],
    ['wide', 'tall', 'square'],
    ['square', 'square', 'tall'],
    ['wide', 'wide', 'tall']
  ];

  const getRandomPattern = () => {
    return bentoPatterns[Math.floor(Math.random() * bentoPatterns.length)];
  };

  const [currentPattern] = useState(getRandomPattern());

  if (loading) {
    return (
      <div className="photo-gallery-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="photo-gallery-error">
        <p>{error}</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="photo-gallery-empty">
        <p>No images found in the gallery.</p>
      </div>
    );
  }

  return (
    <section className="photo-gallery-section">
      <div className="gallery-red-accent floating-accent"></div>
      <div className="gallery-blue-accent floating-accent"></div>
      
      <div className="photo-gallery-container">
        <h2 className="section-title">Photo Gallery</h2>
        <p className="section-subtitle">A collection of moments in bento grid layout</p>
        
        <div className="bento-grid">
          {images.map((img, index) => {
            const size = currentPattern[index % currentPattern.length];
            return (
              <div 
                key={index} 
                className={`bento-item ${size}`}
                style={{
                  '--delay': `${index * 0.1}s`,
                  '--accent-light': index % 2 === 0 ? 'var(--accent-light-red)' : 'var(--accent-light-blue)'
                }}
              >
                <div className="bento-item-inner">
                  <img 
                    src={img.default || img} // Handle both ES modules and CJS
                    alt={`Gallery item ${index + 1}`} 
                    loading="lazy"
                    className="bento-image"
                  />
                  <div className="bento-overlay">
                    <span className="bento-caption">Image {index + 1}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;