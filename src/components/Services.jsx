import React from 'react';
import Section from './Section';

const Services = ({ activeSection, prevSection }) => {
  const items = [
    { icon: 'fa fa-mobile-alt', title: 'Web Development',        desc: 'I design and develop responsive web applications using PHP, Laravel, JavaScript, HTML, CSS, and modern web technologies.' },
    { icon: 'fa fa-laptop-code', title: 'Database Management',   desc: 'I design, manage, and optimize databases using MySQL, Firebase Firestore, and Supabase.' },
    { icon: 'fa fa-palette',    title: 'ICT Support',            desc: 'I provide technical support for hardware, software, network, Wi-Fi connectivity, and user account management.' },
    { icon: 'fa fa-code',       title: 'System Analysis',        desc: 'I analyze user requirements and design practical, secure, and efficient digital solutions.' },
    { icon: 'fa fa-search',     title: 'Software Testing',       desc: 'I test, debug, and document systems to improve reliability, performance, and usability.' },
    { icon: 'fa fa-bullhorn',   title: 'Project Documentation',  desc: 'I prepare clear technical documentation for academic, professional, and software development projects.' },
  ];

  return (
    <Section id="services" className="service" activeSection={activeSection} prevSection={prevSection}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          {items.map(({ icon, title, desc }) => (
            <div className="service-item padd-15 animate-card" key={title}>
              <div className="service-item-inner">
                <div className="icon"><i className={icon}></i></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
