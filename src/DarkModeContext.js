import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (!savedMode) return false;

      try {
        // Try to parse boolean stored as JSON
        const parsed = JSON.parse(savedMode);
        if (typeof parsed === 'boolean') return parsed;
      } catch {
        // If not valid JSON, check if it's a string like "true"/"false"
        if (savedMode === 'true') return true;
        if (savedMode === 'false') return false;
      }

      // fallback for invalid values like "disabled"
      return false;
    }
    return false;
  });

  const applyDarkModeStyles = (darkMode) => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      const body = document.body;

      if (darkMode) {
        html.classList.add('dark-mode');
        body.classList.add('dark-mode');
      } else {
        html.classList.remove('dark-mode');
        body.classList.remove('dark-mode');
      }
    }
  };

  useEffect(() => {
    applyDarkModeStyles(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    applyDarkModeStyles(isDarkMode);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('darkModeChange', { 
        detail: { isDarkMode } 
      }));
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
