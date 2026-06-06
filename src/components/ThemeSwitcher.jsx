import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    if (document.body.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleSwitcher = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  const setActiveStyle = (color) => {
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });
  };

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div className="style-switcher-toggler s-icon" onClick={toggleSwitcher}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="day-night s-icon" onClick={toggleDarkMode}>
        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        <span className="color-1" onClick={() => setActiveStyle('color-1')}></span>
        <span className="color-2" onClick={() => setActiveStyle('color-2')}></span>
        <span className="color-3" onClick={() => setActiveStyle('color-3')}></span>
        <span className="color-4" onClick={() => setActiveStyle('color-4')}></span>
        <span className="color-5" onClick={() => setActiveStyle('color-5')}></span>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
