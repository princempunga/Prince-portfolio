import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Section from './Section';

const Home = ({ activeSection, prevSection }) => {
  const typingRef = useRef(null);
  const typedRef  = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(typingRef.current, {
      strings: ['', 'Software Developer', 'IT Support Specialist', 'Systems Analyst', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    return () => typedRef.current.destroy();
  }, []);

  return (
    <Section id="home" className="home" activeSection={activeSection} prevSection={prevSection}>
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Prince Mpunga</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing" ref={typingRef}></span>
            </h3>
            <p>
              Results-driven technology professional with experience in software development,
              database management, web application design, and IT infrastructure support. Skilled
              in building secure, scalable, and efficient digital solutions using PHP, Laravel,
              JavaScript, MySQL, Firebase, and REST APIs. Strong expertise in system analysis,
              troubleshooting, technical support, and project implementation. Passionate about
              delivering innovative technology solutions that improve business processes, enhance
              user experiences, and solve real-world challenges.
            </p>
            <a href="/cv/Prince Mpunga CV.pdf" className="btn" download>
              Download CV
            </a>
          </div>
          <div className="home-img padd-15">
            <img src="/images/Prince-removebg-preview.png" alt="Prince Mpunga" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
