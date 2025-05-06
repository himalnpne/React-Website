import React from 'react';
import './Blog.css';
import Subscription from './Subscription';
import jamesMayGif from './gif/jamesmay.gif';

const Blog = () => {
  return (
    <div className="coming-soon-container">
      <div className="animated-person pulse-animation">
        <img 
          src={jamesMayGif} 
          alt="James May animation" 
          className="gif-image"
        />
      </div>
      <h1 className="coming-soon-title">Our Blog is Coming Soon!</h1>
      <p className="coming-soon-text">
        We're working hard to bring you insightful articles, tips, and news. 
        Our team is putting the finishing touches on our first posts. 
        Check back soon for exciting content!
      </p>
      <Subscription />
    </div>
  );
};

export default Blog;