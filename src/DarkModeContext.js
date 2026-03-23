import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

// Helper function to safely check if localStorage is available
const isLocalStorageAvailable = () => {
  if (typeof window === 'undefined') return false;
  
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

// Helper function to safely get localStorage item
const getSafeLocalStorage = (key, defaultValue) => {
  if (!isLocalStorageAvailable()) {
    return defaultValue;
  }
  
  try {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;
    
    try {
      const parsed = JSON.parse(item);
      if (typeof parsed === 'boolean') return parsed;
    } catch {
      if (item === 'true') return true;
      if (item === 'false') return false;
    }
    
    return defaultValue;
  } catch (error) {
    console.warn('Failed to read from localStorage:', error);
    return defaultValue;
  }
};

// Helper function to safely set localStorage item
const setSafeLocalStorage = (key, value) => {
  if (!isLocalStorageAvailable()) {
    return false;
  }
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn('Failed to write to localStorage:', error);
    return false;
  }
};

export const DarkModeProvider = ({ children }) => {
  // Initialize with a default value that doesn't try to access localStorage
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const applyDarkModeStyles = (darkMode) => {
    if (typeof document !== 'undefined') {
      try {
        const html = document.documentElement;
        const body = document.body;

        if (darkMode) {
          html.classList.add('dark-mode');
          body.classList.add('dark-mode');
        } else {
          html.classList.remove('dark-mode');
          body.classList.remove('dark-mode');
        }
      } catch (error) {
        console.warn('Failed to apply dark mode styles:', error);
      }
    }
  };

  // Load saved preference after component mounts
  useEffect(() => {
    let mounted = true;
    
    try {
      const savedMode = getSafeLocalStorage('darkMode', false);
      if (mounted) {
        setIsDarkMode(savedMode);
        applyDarkModeStyles(savedMode);
        setIsInitialized(true);
      }
    } catch (error) {
      console.warn('Failed to load dark mode preference:', error);
      if (mounted) {
        applyDarkModeStyles(false);
        setIsInitialized(true);
      }
    }
    
    return () => {
      mounted = false;
    };
  }, []);

  // Save to localStorage whenever isDarkMode changes
  useEffect(() => {
    if (isInitialized) {
      try {
        setSafeLocalStorage('darkMode', isDarkMode);
        applyDarkModeStyles(isDarkMode);

        if (typeof window !== 'undefined') {
          try {
            window.dispatchEvent(new CustomEvent('darkModeChange', { 
              detail: { isDarkMode } 
            }));
          } catch (error) {
            console.warn('Failed to dispatch event:', error);
          }
        }
      } catch (error) {
        console.warn('Failed to save dark mode preference:', error);
      }
    }
  }, [isDarkMode, isInitialized]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};