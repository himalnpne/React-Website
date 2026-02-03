
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import './Post.css';
import allPosts from './Posts';

// Helper component to render HTML content safely
const HTMLParagraph = ({ html }) => {
  return <p className="post-text" dangerouslySetInnerHTML={{ __html: html }} />;
};

// Helper component to render HTML list items
const HTMLListItem = ({ html }) => {
  return <li dangerouslySetInnerHTML={{ __html: html }} />;
};

// Updated ContentRenderer component
const ContentRenderer = ({ content }) => {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  return content.map((item, index) => {
    if (!item) return null;

    switch (item.type) {
      case 'paragraph':
        // Check if text contains HTML tags
        if (item.text && (item.text.includes('<strong>') || item.text.includes('<em>') || item.text.includes('<code>') || item.text.includes('<span>') || item.text.includes('<a>'))) {
          return <HTMLParagraph key={index} html={item.text} />;
        } else {
          return <p key={index} className="post-text">{item.text}</p>;
        }
        
      case 'header':
        const HeaderTag = `h${item.level || 2}`;
        return <HeaderTag key={index} className="post-header">{item.text}</HeaderTag>;
        
      case 'image':
        return (
          <figure 
            key={index}
            className={`post-image ${item.float ? `float-${item.float}` : ''}`}
            style={{ width: item.width || '100%' }}
          >
            <img src={item.src} alt={item.alt} />
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        );
        
      case 'columns':
        // Handle columns content properly
        return (
          <div key={index} className={`post-columns cols-${item.count || 2}`}>
            {item.content && item.content.map((col, colIdx) => (
              <div key={colIdx} className="post-col">
                {col.type === 'paragraph' ? (
                  <HTMLParagraph html={col.text} />
                ) : (
                  <ContentRenderer content={[col]} />
                )}
              </div>
            ))}
          </div>
        );
        
      case 'quote':
        return (
          <blockquote key={index} className="post-quote">
            <p>{item.text}</p>
            {item.author && <footer>— {item.author}</footer>}
          </blockquote>
        );
        
      case 'table':
        return (
          <div key={index} className="table-container">
            <table className="post-table">
              {item.headers && (
                <thead>
                  <tr>
                    {item.headers.map((header, i) => (
                      <th key={i}>{header}</th>
                    ))}
                  </tr>
                </thead>
              )}
              {item.rows && (
                <tbody>
                  {item.rows.map((row, i) => (
                    <tr key={i} className={row.tier || ''}>
                      {Array.isArray(row.data) ? (
                        row.data.map((cell, j) => (
                          <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                        ))
                      ) : Array.isArray(row) ? (
                        // Handle the simpler table format from first-post.js
                        row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        );
        
      case 'list':
        return (
          <ul key={index} className="post-list">
            {item.items && item.items.map((listItem, listIdx) => (
              <HTMLListItem key={listIdx} html={listItem} />
            ))}
          </ul>
        );
        
      default:
        console.warn(`Unknown content type: ${item.type}`);
        return null;
    }
  });
};

const Post = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    // Find the post with the matching slug
    const foundPost = allPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      setLoading(false);
      
      // Update document title with post title
      document.title = `${foundPost.title} | Your Blog Name`;
    } else {
      // If no post is found, redirect to the blog page
      console.error(`Post with slug "${slug}" not found`);
      setLoading(false);
      navigate('/blog');
    }
  }, [slug, navigate]);

  if (loading) {
    return <div className="post-loading">Loading post...</div>;
  }

  if (!post) {
    return <div className="post-not-found">Post not found</div>;
  }

  return (
    <div className={`single-post-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <article className="single-post">
        {post.featuredImage && (
          <div className="post-hero">
            <img 
              src={post.featuredImage} 
              alt={`Featured: ${post.title}`} 
              className="post-featured-image"
            />
          </div>
        )}
        
        <div className="post-header-container">
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-meta">
            <span className="post-author">By {post.author}</span>
            <span className="post-date">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          
          <div className="post-tags">
            {post.tags && post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        
        <div className="post-full-content">
          <ContentRenderer content={post.content} />
        </div>
        
        <div className="post-navigation">
          <button 
            onClick={() => navigate('/blog')} 
            className="back-to-blog"
          >
            Back to Blog
          </button>
        </div>
      </article>
    </div>
  );
};

export default Post;
