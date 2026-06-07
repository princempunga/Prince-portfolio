import React from 'react';

/**
 * Section wrapper
 *  - On desktop (≥1200px) sections are position:fixed overlays.
 *    Only the active one is visible (z-index 2); the previous one
 *    sits behind it (back-section / z-index 1) for the slide animation.
 *  - On mobile sections flow naturally in the DOM.
 */
const Section = ({ id, className = '', activeSection, prevSection, children }) => {
  const isActive = activeSection === id;
  const isBack   = prevSection  === id && activeSection !== id;

  const classes = [
    'section',
    className,
    isActive ? 'active'       : '',
    isBack   ? 'back-section' : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={classes} id={id}>
      {children}
    </section>
  );
};

export default Section;
