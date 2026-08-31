import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
//import ScrollToTop from './components/ScrollToTop';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Subscription from './components/Subscription';
import VibeCheck from './components/VibeCheck';
import Photos from './components/Photos';
import Blog from './components/Blog';
import Post from './components/Post';
import SignalChat from './components/SignalChat';
import HireMe from './components/HireMe';
import PrivacyPolicy from './components/PrivacyPolicy';
import SupportMe from './components/SupportMe';


// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// RedirectHandler for 404 recovery
const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedRedirect = sessionStorage.getItem('redirectPath');
      if (storedRedirect && storedRedirect !== '/') {
        sessionStorage.removeItem('redirectPath');
        navigate(storedRedirect, { replace: true });
      }
    } catch (e) {
      console.warn('sessionStorage not available:', e);
    }
  }, [navigate]);

  return null;
};

// Main App Content
const AppContent = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <ScrollToTop />
      <RedirectHandler />
      <Header />

      <main className={isDarkMode ? 'dark-mode' : ''}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Testimonials />
                <Subscription />
              </>
            }
          />

          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vibecheck" element={<VibeCheck />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:slug" element={<Post />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<SupportMe />} />

          {/* React-side 404 - Enhanced */}
          <Route 
            path="*" 
            element={
              <div style={{ 
                textAlign: 'center', 
                padding: '100px 20px',
                minHeight: '60vh'
              }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>404</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                  Page not found. The page you're looking for doesn't exist.
                </p>
                <a 
                  href="/" 
                  style={{
                    padding: '12px 24px',
                    background: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    display: 'inline-block'
                  }}
                >
                  Go to Homepage
                </a>
              </div>
            } 
          />
        </Routes>
      </main>

      <SignalChat />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <DarkModeProvider>
      {/* Remove basename if deploying to root domain */}
      {/* Use basename="/React-Website" if deploying to GitHub Pages subdirectory */}
      <Router basename="/">
        <AppContent />
      </Router>
    </DarkModeProvider>
  );
}

export default App;