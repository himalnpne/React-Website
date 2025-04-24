import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Subscription from './components/Subscription';

function App() {
  return (
    <Router> {/* No basename needed for localhost */}
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Testimonials />
              <Subscription />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;