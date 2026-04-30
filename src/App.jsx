import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
  { href: '#resume', label: 'Resume' }, 
];




const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);



const RESUME_FILES = [
  {
    title: 'Full Resume',
    desc: 'Complete work history, skills, education, and achievements. Best for recruiters and ATS systems.',
    tags: ['PDF', '2 pages', 'Updated Apr 2026'],
    file: '/resume/Thisandu_Dahanayake_Resume.pdf',   // 👈 update this path
    primary: true,
  },
];

function Resume() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [activeFile, setActiveFile] = useState(null);

  const handleDownload = (file, title) => {
    setProgress(0);
    setActiveFile(title);
    setStatus('Preparing your download…');
    let p = 0;
    const interval = setInterval(() => {
      p = Math.min(p + Math.random() * 20, 90);
      setProgress(p);
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setStatus('Download started! Check your downloads folder.');
      const a = document.createElement('a');
      a.href = file;
      a.download = file.split('/').pop();
      a.click();
      setTimeout(() => { setProgress(0); setStatus(''); setActiveFile(null); }, 3500);
    }, 1400);
  };

  return (
    <section className="section resume-section" id="resume">
      <div className="container section-heading">
        <span className="section-label">Resume</span>
        <h2>Download My Resume</h2>
      </div>
      <div className="container resume-wrapper">
        <p className="section-intro">
          A snapshot of my experience, skills, and work crafted for clarity and impact.
        </p>
        <div className="resume-cards">
          {RESUME_FILES.map((r) => (
            <div className={`resume-card${r.primary ? ' resume-card--primary' : ''}`} key={r.title}>
              <div className="resume-card-icon"><FileIcon /></div>
              <div className="resume-card-body">
                <h3 className="resume-card-title">{r.title}</h3>
                <p className="resume-card-desc">{r.desc}</p>
                <div className="resume-tags">
                  {r.tags.map((t) => <span className="resume-tag" key={t}>{t}</span>)}
                </div>
                <button
                  className={`resume-download-btn${r.primary ? ' resume-download-btn--primary' : ''}`}
                  onClick={() => handleDownload(r.file, r.title)}
                  disabled={activeFile !== null}
                >
                  <DownloadIcon />
                  {r.primary ? 'Download PDF' : 'Download'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {progress > 0 && (
          <div className="resume-progress-wrap">
            <div className="resume-progress-bar">
              <div className="resume-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <p className="resume-status">{status}</p>
          </div>
        )}

        <div className="resume-divider" />
        <div className="resume-footer">
          <p className="resume-footer-text">Prefer to connect professionally?</p>

          <a 
          
            href="https://www.linkedin.com/in/thisandu-dahanayake-0b86812b6"
            target="_blank"
            rel="noreferrer"
            className="resume-linkedin-btn"
            >
            <LinkedinIcon /> View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}



const PROJECTS = [
  {
    img: 'Pictures/Gemini_Generated_Image_iqxdeyiqxdeyiqxd.png',
    alt: 'Employee Registration System',
    title: 'Employee Registration System',
    desc: 'A full-stack web application for managing employee records, featuring user authentication, CRUD operations, and data visualization. Built with modern web technologies for efficient HR management.',
    tech: ['Frontend: HTML, CSS, JavaScript', 'Backend: PHP, MySQL', 'Features: Registration, login, employee dashboard'],
    github: 'https://github.com/Thisandu04/EmployeeRegistrationSystem.git',
  },
  {
    img: 'Pictures/Gemini_Generated_Image_6r0df86r0df86r0d.png',
    alt: 'YouTube Clone',
    title: 'YouTube UI Clone',
    desc: "A pixel-perfect UI clone of YouTube's interface, showcasing responsive design and modern web development techniques. Focuses on user experience, layout, and interactive elements.",
    tech: ['Frontend: HTML, CSS, JavaScript', 'Features: Video thumbnails, search bar, sidebar navigation', 'Responsive design for all devices'],
    github: 'https://github.com/Thisandu04/YouTube-UI-clone.git',
  },
];

const BLOG_POSTS = [
  {
    img: 'Pictures/Screenshot 2026-04-05 194201.png',
    alt: 'Diagrams Blog Thumbnail',
    title: 'More Than Just Words: Why Diagrams Are Important',
    desc: 'Exploring the importance of diagrams for undergraduates and IT majors in visualizing complex concepts and improving understanding.',
    url: 'https://medium.com/@thisandu2004sethmitha/more-than-just-words-why-diagrams-are-important-0ad8f608e4d4',
  },
  {
    img: 'Pictures/Screenshot 2026-04-05 194219.png',
    alt: 'Optical Isolator Blog Thumbnail',
    title: 'Improving Optical Isolator Performance Using Statistical Quality Tools',
    desc: 'A research-focused article on enhancing optical isolator performance through statistical quality control methods and data analysis.',
    url: 'https://medium.com/@thisandu2004sethmitha/improving-optical-isolator-performance-using-statistical-quality-tools-cc730ba836b5',
  },
  {
    img: 'Pictures/Screenshot 2026-04-05 194230.png',
    alt: 'CIA Triad Blog Thumbnail',
    title: 'Introduction to the CIA Triad: The Foundation of Cybersecurity',
    desc: 'An overview of the CIA Triad (Confidentiality, Integrity, Availability) as the cornerstone of cybersecurity practices and real-world applications.',
    url: 'https://medium.com/@thisandu2004sethmitha/introduction-to-the-cia-triad-the-foundation-of-cyber-security-3bc64089d9c6',
  },
];

const CERTIFICATES = [
  {
    img: 'Pictures/Screenshot 2026-04-06 120149.png',
    alt: 'AWS Networking Basics Certificate',
    title: 'AWS Networking Basics',
    issuer: 'Amazon Web Services',
    date: '22 March 2026',
    desc: "Understanding how to design and manage scalable, secure cloud networks is a critical skill in today's cloud-first world.",
    url: 'https://skillbuilder.aws/learn/S1VYRYHD8V/aws-networking-basics/SKP7248UVF',
  },
];

const BADGES = [
  {
    icon: '🧠',
    title: 'Prompt Engineering & Programming with OpenAI',
    platform: 'Columbia University',
    date: 'March 31, 2026',
    desc: '(Module - 2) Mastered advanced prompt crafting techniques to elicit precise AI responses, including chain-of-thought prompting and few-shot examples. Explored OpenAI API integration for building practical applications like chatbots and content generators using Python.',
    url: 'https://www.linkedin.com/posts/thisandu-dahanayake-0b86812b6_prompt-engineering-programming-with-openai-activity-7444395040526757888-7IWF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvq90wBOYzHNhxJi4x23u7e4XgaLkNeU5o',
  },
  {
    icon: '🧠',
    title: 'Prompt Engineering & Programming with OpenAI',
    platform: 'Columbia University',
    date: 'March 29, 2026',
    desc: '(Module - 1) This course gave me hands-on experience in understanding Large Language Models (LLMs), crafting effective prompts (zero-shot, few-shot, and chain-of-thought), and using AI to generate content, analyze data, and solve real world problems',
    url: 'https://www.linkedin.com/posts/thisandu-dahanayake-0b86812b6_prompt-engineering-programming-with-openai-activity-7443246323056783360-qgpw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvq90wBOYzHNhxJi4x23u7e4XgaLkNeU5o',
  },
  {
    icon: '🧠',
    title: 'Plan with DevOps',
    platform: 'Microsoft Learn',
    date: 'March 18, 2026',
    desc: 'This course provided comprehensive training in DevOps practices, including continuous integration, continuous deployment, and infrastructure as code. I gained practical experience in automating software release processes and managing cloud environments.',
    url: 'https://www.linkedin.com/posts/thisandu-dahanayake-0b86812b6_plan-with-devops-activity-7440383039920300032-1sD2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvq90wBOYzHNhxJi4x23u7e4XgaLkNeU5o',
  },
  {
    icon: '🧠',
    title: 'Develop with DevOps',
    platform: 'Microsoft Learn',
    date: 'February 21, 2026',
    desc: 'This course provided comprehensive training in DevOps practices, including continuous integration, continuous deployment, and infrastructure as code. I gained practical experience in automating software release processes and managing cloud environments.',
    url: 'https://www.linkedin.com/posts/thisandu-dahanayake-0b86812b6_develop-with-devops-activity-7431715398649204737-ShkI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvq90wBOYzHNhxJi4x23u7e4XgaLkNeU5o',
  },
];

const SKILLS = [
  { iconClass: 'devicon-python-plain colored', label: 'Python' },
  { iconClass: 'devicon-javascript-plain colored', label: 'JavaScript' },
  { iconClass: 'devicon-java-plain colored', label: 'Java' },
  { iconClass: 'devicon-c-plain colored', label: 'C' },
  { iconClass: 'devicon-html5-plain colored', label: 'HTML' },
  { iconClass: 'devicon-css3-plain colored', label: 'CSS' },
  { iconClass: 'devicon-mysql-plain colored', label: 'MySQL' },
  { isOpenAIImg: true, label: 'OpenAI API' },
  { iconClass: 'devicon-github-original colored', label: 'GitHub' },
  { iconClass: 'devicon-git-plain colored', label: 'Git' },
  { iconClass: 'devicon-docker-plain colored', label: 'Docker' },
  { iconClass: 'devicon-react-original colored', label: 'React' },
  { iconClass: 'devicon-vscode-plain colored', label: 'VS Code' },
  { iconClass: 'devicon-openai-plain colored', label: 'Prompt Engineering' },
  { iconClass: 'devicon-nodejs-plain colored', label: 'Node.js' },
  { iconClass: 'devicon-googlecloud-plain colored', label: 'Google Cloud' },
  { iconClass: 'devicon-amazonwebservices-plain-wordmark colored', label: 'AWS' },
  { iconClass: 'devicon-postman-plain colored', label: 'Postman' },
  { iconClass: 'devicon-photoshop-plain colored', label: 'Photoshop' },
  { iconClass: 'devicon-figma-plain colored', label: 'Figma' },
];

// SVG Icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width={20} height={20}>
    <path style={{ fill: 'currentColor' }} d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width={20} height={20}>
    <path style={{ fill: 'currentColor' }} d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width={20} height={20}>
    <path style={{ fill: 'currentColor' }} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const EmailIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path style={{ fill: 'currentColor' }} d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16}>
    <path style={{ fill: 'currentColor' }} d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

function useSmoothScroll() {
  return (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      window.scrollTo({ top: target.offsetTop - headerOffset, behavior: 'smooth' });
    }
  };
}

function Header({ dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = useSmoothScroll();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={(e) => handleScroll(e, '#home')}>
          Thisandu Dahanayake
        </a>
        <nav className={`nav-menu${menuOpen ? ' active' : ''}`} id="navMenu">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => { handleScroll(e, link.href); setMenuOpen(false); }}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? '☀️' : '🌙'}
          </button>
          <button className={`menu-toggle${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen((o) => !o)} aria-label="Open navigation menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const handleScroll = useSmoothScroll();
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">I am,</span>
          <h1>Thisandu Dahanayake</h1>
          <img src="Pictures/IMG-20250912-WA0012.jpg" alt="Profile Photo" className="profile-photo" />
          <h3 className="intro">Software Engineering Undergraduate | AI, ML &amp; Data Science Enthusiast</h3>
          <p>Passionate about AI/ML solutions: building intelligent systems, analyzing data, and deploying end-to-end projects from preprocessing to scalable apps.</p>
          <div className="hero-buttons">
            <a className="btn primary" href="#projects" onClick={(e) => handleScroll(e, '#projects')}>View Projects</a>
            <a className="btn secondary" href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Say Hello</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-inner">
            <p className="highlight">Currently learning:</p>
            <ul>
              <li>Python for Deep Learning</li>
              <li>Data Analytics and Storytelling</li>
              <li>Web Development</li>
            </ul>
            <div className="stats-grid">
              <div><strong>AI &amp; ML</strong><span>Enthusiast</span></div>
              <div><strong>2+</strong><span>Projects</span></div>
              <div><strong>3+</strong><span>Badges</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollDown() {
  const handleScroll = useSmoothScroll();
  return (
    <div className="scroll-down">
      <a href="#about" className="scroll-down-link" onClick={(e) => handleScroll(e, '#about')}>
        <svg viewBox="0 0 24 24" width={32} height={32}><path d="M7 10l5 5 5-5z" fill="currentColor" /></svg>
      </a>
    </div>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container section-heading">
        <span className="section-label">About Me</span>
        <h1>Who I am</h1>
      </div>
      <div className="container about-grid">
        <div className="about-photo">
          <img src="Pictures/1000335862.jpg" alt="Thisandu Dahanayake - Profile Photo" className="profile-image" />
        </div>
        <div className="about-text">
          <p>I am an undergraduate software engineering student with a strong passion for Artificial Intelligence, Machine Learning, and Data Science. I enjoy turning ideas into clean software and extracting insights from data.</p>
          <p>My strengths include problem solving, quick learning, and working well in teams. I focus on maintainable code, efficient data workflows, and intuitive user experiences.</p>
          <ul className="about-highlights">
            <li>Current Focus: AI-powered web apps and predictive modeling</li>
            <li>Interests: Computer Vision, NLP, Research, Automation</li>
          </ul>
        </div>
        <div className="about-cards">
          <div className="info-card"><strong>Education</strong><p>Undergraduate Software Engineering student at University of Kelaniya.</p></div>
          <div className="info-card"><strong>Projects</strong><p>Building academic and personal projects in AI, Data Analytics, and Responsive Web Development.</p></div>
          <div className="info-card"><strong>Growth</strong><p>Continuously learning through Online Courses, Certifications, and Practical Experimentation.</p></div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education" id="education">
      <div className="container section-heading">
        <span className="section-label">Education</span>
        <h2>Academic Journey</h2>
      </div>
      <div className="container timeline">
        <div className="timeline-item">
          <span className="timeline-date">2025 - Present</span>
          <h3>Bachelor of Software Engineering</h3>
          <h4>University of Kelaniya</h4>
          <p>Undergraduate student at University of Kelaniya focusing on Software Development, Algorithms, AI, and System Design.</p>
        </div>
        <div className="timeline-item">
          <span className="timeline-date">2021-2023</span>
          <h3>Advanced Level Examination</h3>
          <h4>Physical Science Stream</h4>
          <p>Completed A/Ls in the Physical Science stream with Chemistry, Physics, and Combined Mathematics.</p>
          <p><span className="score-badge">Z-score: 1.5251</span> Qualified for admission to the University of Kelaniya and strengthened my foundation in technical problem solving.</p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container section-heading">
        <span className="section-label">Projects</span>
        <h2>Selected Work</h2>
      </div>
      <div className="container projects-grid">
        {PROJECTS.map((p) => (
          <article className="project-card" key={p.title}>
            <img src={p.img} alt={p.alt} className="project-thumb" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <ul>{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
            <a href={p.github} className="github-btn" target="_blank" rel="noreferrer">
              <GithubIcon /> View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="section blog" id="blog">
      <div className="container section-heading">
        <span className="section-label">Blog</span>
        <h2>Ideas &amp; Learning</h2>
      </div>
      <div className="container blog-grid">
        {BLOG_POSTS.map((post) => (
          <article className="blog-card" key={post.title}>
            <img src={post.img} alt={post.alt} className="blog-thumb" />
            <a href={post.url} target="_blank" rel="noreferrer"><h3>{post.title}</h3></a>
            <p>{post.desc}</p>
            <a href={post.url} className="medium-btn" target="_blank" rel="noreferrer">
              <MediumIcon /> Read on Medium
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section className="section certificates" id="certificates">
      <div className="container section-heading">
        <span className="section-label">Certificates</span>
        <h2>Professional Certifications &amp; Achievements</h2>
      </div>
      <div className="container">
        <p className="section-intro">Showcasing my commitment to continuous learning through professional certifications and skill badges earned from reputable platforms and courses.</p>
        <div className="certificates-subsection">
          <h3>📜 Certificates</h3>
          <div className="certificates-grid">
            {CERTIFICATES.map((cert) => (
              <div className="certificate-card" key={cert.title}>
                <div className="certificate-image"><img src={cert.img} alt={cert.alt} /></div>
                <div className="certificate-details">
                  <h4>{cert.title}</h4>
                  <div className="certificate-info">
                    <span className="issuer">{cert.issuer}</span>
                    <span className="date">{cert.date}</span>
                  </div>
                  <p>{cert.desc}</p>
                  <a href={cert.url} target="_blank" rel="noreferrer" className="view-cert-btn">View Certificate</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="badges-subsection">
          <h3>🏆 Badges</h3>
          <div className="badges-grid">
            {BADGES.map((badge, i) => (
              <div className="badge-card" key={i}>
                <div className="badge-display">
                  <a href={badge.url} target="_blank" rel="noreferrer" className="badge-link">
                    <span className="badge-icon">{badge.icon}</span>
                  </a>
                </div>
                <div className="badge-details">
                  <h4><a href={badge.url} target="_blank" rel="noreferrer">{badge.title}</a></h4>
                  <div className="badge-info">
                    <span className="platform">{badge.platform}</span>
                    <span className="date">{badge.date}</span>
                  </div>
                  <p>{badge.desc}</p>
                  <div className="badge-meta"><span className="badge-type">Achievement Badge</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const gridRef = useRef(null);
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        grid.querySelectorAll('.skill-item').forEach((item, i) => {
          setTimeout(() => item.classList.add('skill-visible'), i * 60);
        });
        observer.unobserve(grid);
      }
    }, { threshold: 0.15 });
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills">
      <div className="container section-heading">
        <span className="section-label">Skills</span>
        <h2>Tools I Use</h2>
      </div>
      <div className="container">
        <div className="skills-grid" ref={gridRef}>
          {SKILLS.map((skill) => (
            <div className="skill-item" key={skill.label}>
              {skill.isOpenAIImg
                ? <img className="devicon-openai-plain" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" width={40} height={40} alt="OpenAI" />
                : <i className={skill.iconClass} style={{ fontSize: 40 }} />
              }
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container section-heading">
        <span className="section-label">Contact</span>
        <h2>Let&apos;s connect</h2>
      </div>
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="contact-header">
            <EmailIcon size={48} />
            <h3>Get In Touch</h3>
          </div>
          <p>If you have a project idea, collaboration opportunity, or want to talk about AI and data science, I&apos;d love to hear from you.</p>
        </div>
        <form className="contact-form" action="mailto:thisandu2004sethmitha@gmail.com" method="post" encType="text/plain">
          <div className="form-group">
            <label htmlFor="name">
              <svg viewBox="0 0 24 24" width={16} height={16}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" /></svg>
              Name
            </label>
            <input type="text" id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email"><EmailIcon size={16} /> Email</label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">
              <svg viewBox="0 0 24 24" width={16} height={16}><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor" /></svg>
              Subject
            </label>
            <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <svg viewBox="0 0 24 24" width={16} height={16}><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="currentColor" /></svg>
              Message
            </label>
            <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or idea..." required />
          </div>
          <button type="submit" className="btn primary large">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 Thisandu Dahanayake — All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Thisandu04" target="_blank" rel="noreferrer" className="social-badge"><GithubIcon /> GitHub</a>
          <a href="https://www.linkedin.com/in/thisandu-dahanayake-0b86812b6" target="_blank" rel="noreferrer" className="social-badge"><LinkedinIcon /> LinkedIn</a>
          <a href="https://www.instagram.com/this_and_u/" target="_blank" rel="noreferrer" className="social-badge"><InstagramIcon /> Instagram</a>
          <a href="mailto:thisandu2004sethmitha@gmail.com" className="social-badge"><EmailIcon /> Email</a>
        </div>
      </div>
    </footer>
  );
}

function ScrollUp() {
  const [show, setShow] = useState(false);
  const handleScroll = useSmoothScroll();
  useEffect(() => {
    const onScroll = () => setShow(window.pageYOffset > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`scroll-up${show ? ' show' : ''}`}>
      <a href="#home" className="scroll-up-link" onClick={(e) => handleScroll(e, '#home')}>
        <svg viewBox="0 0 24 24" width={24} height={24}><path d="M7 14l5-5 5 5z" fill="currentColor" /></svg>
      </a>
    </div>
  );
}

function useSectionFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('fade-in'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.section').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  useSectionFadeIn();

  return (
    <>
      <Header dark={dark} toggleTheme={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <ScrollDown />
        <About />
        <Education />
        <Projects />
        <Blog />
        <Certificates />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

