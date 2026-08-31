import React, { useEffect, useState } from 'react';
import './Logo3DAnimation.css';

function Logo3DAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      setMouse({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation calculations
  const mergeProgress = Math.min(scrollProgress / 0.45, 1);
  const rotateProgress = Math.min(Math.max((scrollProgress - 0.45) / 0.25, 0), 1);
  const explodeProgress = Math.min(Math.max((scrollProgress - 0.7) / 0.3, 0), 1);

  // Sharp edge transition - adjusted for larger logos
  const leftPosition = -600 * (1 - mergeProgress);
  const rightPosition = 600 * (1 - mergeProgress);

  const scrollRotateY = rotateProgress * 180;
  const scrollRotateX = rotateProgress * 30;

  const mouseRotateY = mouse.x * 15;
  const mouseRotateX = mouse.y * -10;

  const totalRotateX = scrollRotateX + mouseRotateX;
  const totalRotateY = scrollRotateY + mouseRotateY;

  // Sharp explosion
  const explosion = explodeProgress * 200;

  // Opacity
  const baseOpacity = 0.1 + (mouse.x * 0.02) + (mouse.y * 0.01);
  const finalOpacity = Math.min(Math.max(baseOpacity, 0.1), 0.35);

  // SVG Logo Components - viewBox adjusted for better scaling
  const LogoH = () => (
    <svg viewBox="0 0 4000 4000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M1898.56,1475.16c76-3.43,155.85.2,232,.37,66.32.14,129.8-3.46,196.52.27-18.05,65.72-43.07,137.18-64.62,202l-75.44,232.53-147.82,457.8c-16.62,51.25-32.69,108.05-49.81,157.94l-60.81-.12-238.23,0c-40.63.06-88.41-1-128.6.75,9.77-38.49,25.38-78.28,37.21-116.64,28-90.92,60.25-182.16,87.73-273.1-48.85-2.83-106.06-.18-155.45-.48-78.78-.48-157.23-.5-236,1.07-6.83,32.25-28.61,89.45-39.58,123.39l-85.26,265-274.14-.27c-43.9,0-100.07-1.33-143,1,2.69-15,11.52-40,16.53-54.93q12.2-36.21,23.88-72.6L886,2113.29l140.55-437.06c11.5-35.59,23.28-71.42,34.35-107.12,10.09-32.53,18-62.27,30.9-93.95,18.35,1,44.24-.08,63.14-.32l170.84.49c62.28-.19,120.86-1.39,183.15.32-9.32,32.82-20.6,64.87-31,97.36L1419,1757.59c-10.83,33.94-23,70.27-32.09,104.57l388.7,0C1817.82,1733.23,1855.12,1603.85,1898.56,1475.16Z"
        fill="#960605"
      />
    </svg>
  );

  const LogoN = () => (
    <svg viewBox="0 0 4000 4000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M2393.76,1473.1c89,176,159.53,365.93,239.16,547.51,62.24-177.88,119.36-364.86,176.36-545.19,145.58-.48,291.78-2.75,437.42.24-105.37,333.64-231,715.57-340.56,1050.05-114.6.89-345.44-1.82-456.91,1.19-55.92-139.78-169.86-403.44-221.28-547.5C2275.92,1822.91,2338.23,1626.92,2393.76,1473.1Z"
        fill="#960605"
      />
    </svg>
  );

  return (
    <div className="bg-3d-layer">
      <div className="bg-scene-wrapper">
        <div
          className="bg-scene"
          style={{
            transform: `
              rotateX(${totalRotateX}deg)
              rotateY(${totalRotateY}deg)
            `,
          }}
        >
          {/* Left Logo - H */}
          <div
            className="bg-logo-half left-half"
            style={{
              transform: `
                translateX(${leftPosition - explosion}px)
                translateZ(${explodeProgress * 50}px)
              `,
            }}
          >
            <div className="bg-logo-container">
              <div 
                className="bg-logo-image"
                style={{
                  opacity: finalOpacity,
                  transform: `
                    scale(${1 - explodeProgress * 0.2})
                    rotateY(${rotateProgress * 10}deg)
                  `
                }}
              >
                <LogoH />
              </div>
            </div>
          </div>

          {/* Right Logo - N */}
          <div
            className="bg-logo-half right-half"
            style={{
              transform: `
                translateX(${rightPosition + explosion}px)
                translateZ(${explodeProgress * 50}px)
              `,
            }}
          >
            <div className="bg-logo-container">
              <div 
                className="bg-logo-image"
                style={{
                  opacity: finalOpacity,
                  transform: `
                    scale(${1 - explodeProgress * 0.2})
                    rotateY(${-rotateProgress * 10}deg)
                  `
                }}
              >
                <LogoN />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo3DAnimation;