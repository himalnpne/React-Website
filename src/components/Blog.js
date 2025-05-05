import React from 'react';
import './Blog.css';
import Subscription from './Subscription'; // Import your Subscription component

const Blog = () => {
  return (
    <div className="coming-soon-container">
      {/* Changed to a "searching" GIF that fits the "coming soon" theme */}
      <div className="animated-person pulse-animation"></div>
      <h1 className="coming-soon-title">Our Blog is Coming Soon!</h1>
      <p className="coming-soon-text">
        We're working hard to bring you insightful articles, tips, and news. 
        Our team is putting the finishing touches on our first posts. 
        Check back soon for exciting content!
      </p>
      
      {/* Replaced the email form with your Subscription component */}
      <Subscription />
    </div>
  );
};

export default Blog;