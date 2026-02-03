import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import './Blog.css';
import Subscription from './Subscription';
import jamesMayGif from './gif/jamesmay.gif';
import allPosts from './Posts';

// Helper to calculate reading time
const calculateReadingTime = (content) => {
  if (!content) return '2 min read';
  
  const wordsPerMinute = 200;
  let wordCount = 0;
  
  // Count words in content
  content.forEach(item => {
    if (item.text) {
      wordCount += item.text.split(/\s+/).length;
    }
    if (item.items) {
      item.items.forEach(itemText => {
        wordCount += itemText.split(/\s+/).length;
      });
    }
  });
  
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};

const Blog = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`blog-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Optional Header Section - Uncomment if needed */}
      {/* 
      <header className="blog-header">
        <h1 className="blog-title">Blog</h1>
        <p className="blog-subtitle">
          Insights, tutorials, and thoughts on technology and development
        </p>
      </header>
      */}
      
      {allPosts.length > 0 ? (
        <div className="posts-grid">
          {allPosts.map(post => (
            <article 
              key={post.id}
              className={`blog-post ${post.layout || 'default'}`}
            >
              <Link to={`/blog/post/${post.slug}`} className="post-link">
                {/* Category/Tag Badge */}
                {post.tags && post.tags.length > 0 && (
                  <span className="post-category">
                    {post.tags[0]}
                  </span>
                )}
                
                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="post-image-container">
                    <img 
                      src={post.featuredImage}
                      alt={`Featured: ${post.title}`}
                      className="post-featured-image"
                      loading="lazy"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="post-content-wrapper">
                  <h2 className="post-title">{post.title}</h2>
                  
                  {/* Optional Excerpt - Uncomment if you want to show excerpt */}
                  {post.excerpt && (
                    <p className="post-excerpt">{post.excerpt}</p>
                  )}
                  
                  {/* Meta Information */}
                  <div className="post-meta">
                    <span className="post-date">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="read-time">
                      {calculateReadingTime(post.content)}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
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
        </div>
      )}
      <Subscription />
    </div>
  );
};

export default Blog;