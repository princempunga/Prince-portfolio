import React from 'react';

const Sidebar = ({ activeSection, isMobileNavOpen, toggleMobileNav, navigateTo }) => {
  const navItems = [
    { id: 'home',      label: 'Home',      icon: 'fa fa-home' },
    { id: 'about',     label: 'About',     icon: 'fa fa-user' },
    { id: 'services',  label: 'Services',  icon: 'fa fa-list' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fa fa-briefcase' },
    { id: 'contact',   label: 'Contact',   icon: 'fa fa-comments' },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    navigateTo(id);
  };

  return (
    <div className={`aside ${isMobileNavOpen ? 'open' : ''}`}>
      <div className="logo">
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
          <span>P</span>rince
        </a>
      </div>

      <div
        className={`nav-toggler ${isMobileNavOpen ? 'open' : ''}`}
        onClick={toggleMobileNav}
        aria-label="Toggle navigation"
      >
        <span></span>
      </div>

      <ul className="nav">
        {navItems.map(({ id, label, icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={(e) => handleClick(e, id)}
            >
              <i className={icon}></i> {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
