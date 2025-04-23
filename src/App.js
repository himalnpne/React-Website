import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Subscription from './components/Subscription';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <MobileMenu />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Subscription />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;