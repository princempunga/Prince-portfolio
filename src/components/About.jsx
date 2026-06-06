import React from 'react';
import Section from './Section';

// ─── Data ────────────────────────────────────────────────────────────────────
const INFO_ITEMS = [
  { icon: 'fa fa-map-marker-alt', label: 'Location',       value: 'Kampala, Uganda' },
  { icon: 'fa fa-envelope',       label: 'Email',          value: 'princempunga422@gmail.com' },
  { icon: 'fa fa-phone',          label: 'Phone',          value: '+256 784630448' },
  { icon: 'fab fa-github',        label: 'GitHub',         value: '@princempunga', link: 'https://github.com/princempunga' },
  { icon: 'fa fa-code',           label: 'Specialization', value: 'Full-Stack & IT' },
  { icon: 'fa fa-check-circle',   label: 'Availability',   value: 'Available', badge: true },
];

const TECH = [
  { icon: 'devicon-php-plain colored',        label: 'PHP' },
  { icon: 'devicon-laravel-plain colored',    label: 'Laravel' },
  { icon: 'devicon-javascript-plain colored', label: 'JavaScript' },
  { icon: 'devicon-html5-plain colored',      label: 'HTML5' },
  { icon: 'devicon-css3-plain colored',       label: 'CSS3' },
  { icon: 'devicon-mysql-plain colored',      label: 'MySQL' },
  { icon: 'devicon-firebase-plain colored',   label: 'Firebase' },
  { icon: 'fa fa-plug tech-fa-icon',          label: 'REST APIs' },
  { icon: 'devicon-react-original colored',   label: 'React' },
  { icon: 'devicon-python-plain colored',     label: 'Python' },
  { icon: 'devicon-nodejs-plain colored',     label: 'Node.js' },
  { icon: 'devicon-github-original colored',  label: 'Git' },
  { icon: 'devicon-typescript-plain colored', label: 'TypeScript' },
  { icon: 'devicon-linux-plain colored',      label: 'Linux' },
];

const EDUCATION = [
  {
    title: 'Bachelor of Information Technology',
    date:  '2022 – Present',
    org:   'International University of East Africa (IUEA)',
    loc:   'Kampala, Uganda',
    desc:  'Ongoing studies in information technology, software development, database management, system analysis, and ICT support.',
  },
  {
    title: 'High School Diploma / Diplôme d\'État',
    date:  'Completed: 2021',
    org:   'Institut de l\'Unikis (DRC)',
    loc:   'Kisangani, DRC',
    desc:  'Completed secondary education with focus on sciences and mathematics.',
  },
  {
    title: 'Academic Projects & Practical Learning',
    date:  '2024 – Present',
    org:   'IUEA – University-Based Projects',
    loc:   'Kampala, Uganda',
    desc:  'Applied software development, system analysis, database design, testing, deployment, and documentation through real-world university projects.',
  },
];

const EXPERIENCE = [
  {
    title: 'ICT Support Specialist',
    date:  'June 2024 – Present',
    org:   'International University of East Africa (IUEA)',
    loc:   'Kampala, Uganda',
    desc:  'Provided technical support to students, lecturers, and administrative staff.',
    bullets: [
      'Troubleshot hardware, software, network & Wi-Fi issues',
      'Supported computer system installation & maintenance',
      'Managed user accounts and system configurations',
    ],
  },
  {
    title: 'Software Developer',
    date:  'June 2024 – Present',
    org:   'Academic Projects & University Personal Work',
    loc:   'Kampala, Uganda',
    desc:  'Designed and developed web-based systems using PHP, Laravel, MySQL, and JavaScript.',
    bullets: [
      'Database design, implementation & optimization',
      'Testing, debugging, deployment & documentation',
      'Built secure, scalable REST API-backed applications',
    ],
  },
  {
    title: 'Web Development & Database Management',
    date:  '2024 – Present',
    org:   'Freelance / Self-Directed Projects',
    loc:   'Kampala, Uganda',
    desc:  'Created responsive user interfaces and practical digital solutions.',
    bullets: [
      'System administration & database management',
      'Responsive UI/UX design & implementation',
      'Project documentation & technical writing',
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const InfoCard = ({ icon, label, value, link, badge }) => (
  <div className="ab-info-card animate-card">
    <div className="ab-info-card-icon">
      <i className={icon}></i>
    </div>
    <div className="ab-info-card-body">
      <span className="ab-info-label">{label}</span>
      {link
        ? <a href={link} target="_blank" rel="noopener noreferrer" className="ab-info-value ab-info-link">{value}</a>
        : badge
          ? <span className="ab-info-value ab-avail-pill">● {value}</span>
          : <span className="ab-info-value">{value}</span>
      }
    </div>
  </div>
);

const TechBadge = ({ icon, label }) => (
  <div className="ab-tech-badge animate-card" title={label}>
    <i className={icon}></i>
    <span>{label}</span>
  </div>
);

const ResumeCard = ({ title, date, org, loc, desc, bullets }) => (
  <div className="ab-resume-card animate-card">
    <div className="ab-resume-dot"></div>
    <div className="ab-resume-body">
      <div className="ab-resume-header">
        <h4 className="ab-resume-title">{title}</h4>
        <span className="ab-resume-date">{date}</span>
      </div>
      <p className="ab-resume-org">
        <i className="fa fa-building"></i> {org} &nbsp;·&nbsp; <i className="fa fa-map-marker-alt"></i> {loc}
      </p>
      <p className="ab-resume-desc">{desc}</p>
      {bullets && bullets.length > 0 && (
        <ul className="ab-resume-list">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const About = ({ activeSection, prevSection }) => (
  <Section id="about" className="about" activeSection={activeSection} prevSection={prevSection}>
    <div className="container">

      {/* ── Section title ── */}
      <div className="row">
        <div className="section-title padd-15">
          <h2>About Me</h2>
        </div>
      </div>

      {/* ── Hero bio row ── */}
      <div className="ab-bio-row animate-fade">
        <div className="ab-bio-text">
          <span className="ab-profession-chip">Full-Stack Developer &nbsp;·&nbsp; IT Support &nbsp;·&nbsp; Systems Analyst</span>
          <p className="ab-bio-paragraph">
            I am a passionate technology professional specializing in software development, systems analysis, and IT support. My experience includes designing and developing web-based applications, managing databases, troubleshooting technical issues, and implementing digital solutions that improve organizational efficiency. I have worked on various academic, institutional, and personal projects, including Wi-Fi Request Systems, Document Tracking Systems, University Voting Platforms, Attendance Management Systems, and Hotel Management Systems. My goal is to build secure, scalable, and user-friendly solutions that solve real-world problems while continuously expanding my expertise in modern technologies.
          </p>
          <a href="/cv/Prince Mpunga CV.pdf" download className="btn ab-cv-btn">
            <i className="fa fa-download"></i>&nbsp; Download CV
          </a>
        </div>

        {/* ── Tech stack ── */}
        <div className="ab-tech-panel">
          <h4 className="ab-panel-title"><i className="fa fa-layer-group"></i> Tech Stack</h4>
          <div className="ab-tech-grid">
            {TECH.map(({ icon, label }) => (
              <TechBadge key={label} icon={icon} label={label} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact info cards ── */}
      <div className="ab-section-label animate-fade"><i className="fa fa-address-card"></i> Profile Information</div>
      <div className="ab-info-grid">
        {INFO_ITEMS.map((item) => (
          <InfoCard key={item.label} {...item} />
        ))}
      </div>

      {/* ── Education & Experience ── */}
      <div className="ab-edu-exp-row">
        <div className="ab-edu-exp-col">
          <h3 className="ab-col-title">
            <span className="ab-col-icon"><i className="fa fa-graduation-cap"></i></span>
            Education
          </h3>
          <div className="ab-timeline">
            {EDUCATION.map((item) => (
              <ResumeCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="ab-edu-exp-col">
          <h3 className="ab-col-title">
            <span className="ab-col-icon"><i className="fa fa-briefcase"></i></span>
            Experience
          </h3>
          <div className="ab-timeline">
            {EXPERIENCE.map((item) => (
              <ResumeCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>

    </div>
  </Section>
);

export default About;
