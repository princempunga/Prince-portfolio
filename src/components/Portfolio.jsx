import React, { useState } from 'react';
import Section from './Section';

const projects = [
  { src: '/images/portfolio/Smart-attendance.png',  title: 'Smart Attendance System' },
  { src: '/images/portfolio/mayele.png',            title: 'Reservation System' },
  { src: '/images/portfolio/document.png',          title: 'Document Tracking System' },
  { src: '/images/portfolio/voting system.png',     title: 'IUEA Voting System' },
  { src: '/images/portfolio/Hotel management.png',  title: 'Luxul Hotel Management System' },
  { src: '/images/portfolio/wifi request.png',      title: 'WiFi Request System' },
];

const Portfolio = ({ activeSection, prevSection }) => {
  const [lightbox, setLightbox] = useState({ open: false, src: '', title: '' });

  const openLightbox  = (src, title) => setLightbox({ open: true, src, title });
  const closeLightbox = () => setLightbox({ open: false, src: '', title: '' });

  return (
    <>
      <Section id="portfolio" className="portfolio" activeSection={activeSection} prevSection={prevSection}>
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Major Projects :</h2>
            </div>
          </div>
          <div className="row">
            {projects.map(({ src, title }) => (
              <div className="portfolio-item padd-15 animate-card" key={title}>
                <div
                  className="portfolio-item-inner shadow-dark"
                  onClick={() => openLightbox(src, title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(src, title)}
                  aria-label={`Open ${title}`}
                >
                  <div className="portfolio-img">
                    <img src={src} alt={title} loading="lazy" />
                    <div className="portfolio-hover-overlay">
                      <i className="fa fa-search-plus portfolio-zoom-icon"></i>
                      <p className="portfolio-hover-title">{title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="lightbox open"
          id="portfolio-lightbox"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className="lightbox-content">
            <span className="lightbox-close" onClick={closeLightbox} role="button" aria-label="Close">&times;</span>
            <h3 className="lightbox-title">{lightbox.title}</h3>
            <img src={lightbox.src} alt={lightbox.title} className="lightbox-img" />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
