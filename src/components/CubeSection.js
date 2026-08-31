import React from 'react';
import './CubeSection.css';

export default function CubeSection() {
  return (
    <section id="cube-section" className="cube-section">
      {/* 3D cube is rendered once, globally, in App.js */}

      <div className="cube-section-content">
        <div className="cube-text">
          <h2 className="cube-title">
            <span className="cube-highlight">3D</span> Experience
          </h2>
          <p className="cube-description">
            Scroll to see the magic happen. The cube responds to your mouse movement too.
          </p>
          <div className="cube-scroll-hint">
            <span>SCROLL DOWN</span>
            <div className="cube-line" />
          </div>
        </div>
      </div>
    </section>
  );
}