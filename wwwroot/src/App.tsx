import { useEffect } from 'react';

const fullName = 'Mudra Dattatray Kamble';
const email = 'mudrakamble5@gmail.com';
const phone = '+91 9653270296';
const linkedinUrl = 'https://www.linkedin.com/in/mudra-kamble';
const githubUrl = 'https://github.com/mudra2026';
const whatsappUrl = 'https://wa.me/919653270296?text=Hello%20Mudra%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20connect.';
const whatsappQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(whatsappUrl)}`;

export type Concept = 'hooks' | 'router' | 'props' | 'state';

export const concepts: Array<{ id: Concept; label: string; kicker: string; color: string }> = [
  { id: 'hooks', label: 'Hooks', kicker: 'Logic with a pulse', color: '#f08a4b' },
  { id: 'router', label: 'Router', kicker: 'Move without reloads', color: '#4e87d8' },
  { id: 'props', label: 'Props', kicker: 'Pass the good stuff down', color: '#43a27d' },
  { id: 'state', label: 'State', kicker: 'Your UI remembers', color: '#be65a4' }
];

const skills = [
  {
    title: 'Mobile App Development',
    items: ['Android app development', 'Java programming', 'XML layouts', 'UI designing', 'App logic building']
  },
  {
    title: 'Database & Backend Basics',
    items: ['Firebase database', 'Realtime data handling', 'Data storage logic', 'Project integration', 'Authentication basics']
  },
  {
    title: 'Creative & Campus Skills',
    items: ['Public speaking', 'Acting', 'Cooking', 'College participation', 'Team collaboration']
  }
];

const projects = [
  {
    name: 'Tulika Enterprises',
    summary: 'A business-focused app for managing company information, services, and quick access to enterprise contact details in a professional mobile interface.',
    stack: ['Android', 'Java', 'XML'],
    accent: 'violet'
  },
  {
    name: 'Synchromance',
    summary: 'A dating app concept built around matching people by shared interests, personality, and compatibility in a modern, user-friendly design.',
    stack: ['UI/UX', 'Java', 'Android'],
    accent: 'amber'
  },
  {
    name: 'Peak Flow',
    summary: 'A skill-focused app designed to help users improve personal abilities through practice, progress tracking, and learning routines.',
    stack: ['Product Design', 'Java', 'Android'],
    accent: 'rose'
  }
];

const experience = [
  {
    role: 'Diploma in Computer Engineering',
    company: 'Saraswati Institute of Technology',
    period: 'Completed',
    details: 'Completed Diploma in Computer Engineering with a strong foundation in programming, software basics, and practical technical skills.'
  },
  {
    role: 'B.E. in Information Technology',
    company: 'Current Degree Pursuit',
    period: 'Present',
    details: 'Currently pursuing a Degree in Information Technology engineering and improving technical knowledge in modern app development and systems.'
  },
  {
    role: 'College Activities & Communication',
    company: 'Campus Life',
    period: 'Active',
    details: 'Actively involved in college activities, communication-based events, and public participation that builds confidence and leadership.'
  }
];

const stats = [
  { label: 'Age', value: '18' },
  { label: 'Diploma', value: 'Completed' },
  { label: 'Hobbies', value: '3' }
];

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-page">
      <header className="site-header reveal">
        <nav className="top-nav">
          <div className="brand-mark">MD</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
          <a className="button button-primary" href="#contact">
            Let’s talk
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section reveal">
          <div className="hero-showcase">
            <div className="hero-header-row">
              <span className="availability-badge">Available for internship</span>
              <a className="button button-primary" href="/Mudra_Resume.pdf" download="Mudra_Resume.pdf">
                Download Resume
              </a>
            </div>

            <div className="hero-content">
              <div className="hero-copy">
                <p className="eyebrow">IT Engineering Student • Android Developer</p>
                <h1 className="hero-name" aria-label={fullName}>{fullName}</h1>
                <p className="lede">
                  I build meaningful Android experiences, design clean interfaces, and turn ideas into practical,
                  user-friendly digital solutions.
                </p>
                <div className="cta-row">
                  <a className="button button-primary" href="#projects">
                    View Projects
                  </a>
                  <a className="button button-secondary" href="#contact">
                    Let&apos;s Talk
                  </a>
                </div>
              </div>

              <div className="hero-panel">
                <div className="profile-card">
                  <div className="photo-frame">
                    <img src="/mudra-portrait.svg" alt={`${fullName} portrait`} />
                  </div>
                  <div className="profile-meta">
                    <span className="status-pill">Available</span>
                    <h3>{fullName}</h3>
                    <p>IT Engineering Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section split-section reveal">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Driven by technology, creativity, and confidence.</h2>
          </div>
          <div className="about-copy">
            <p>
              I am {fullName}, currently pursuing a Degree in IT engineering. My journey began with a Diploma in Computer Engineering from Saraswati Institute of Technology, where I built a strong foundation in programming, app development, and practical problem solving.
            </p>
            <p>
              I enjoy developing Android applications, creating XML layouts, writing Java code, and working with Firebase databases. Beyond technical work, I actively participate in college activities and I am passionate about acting, speech, and cooking.
            </p>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-heading align-left">
            <p className="eyebrow">Skills</p>
            <h2>Technical strengths and personal strengths I bring.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-heading align-left">
            <p className="eyebrow">Projects</p>
            <h2>Applications I have developed and designed with real purpose.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className={`project-card ${project.accent}`}>
                <div className="project-top">
                  <span className="project-tag">Featured</span>
                  <span className="dot" />
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <div className="section-heading align-left">
            <p className="eyebrow">Education & growth</p>
            <h2>Learning, building, and participating at every step.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="company-name">{item.company}</p>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-banner reveal">
          <div className="contact-content">
            <p className="eyebrow">Let’s connect</p>
            <h2>Looking for a dedicated and creative IT student ready to learn and build?</h2>
            <div className="contact-links">
              <a className="button button-primary" href={`mailto:${email}`}>
                {email}
              </a>
              <a className="button button-secondary" href={`tel:${phone.replace(/\s+/g, '')}`}>
                {phone}
              </a>
            </div>
          </div>

          <div className="whatsapp-card">
            <div className="qr-box">
              <img src={whatsappQrUrl} alt="WhatsApp QR code to contact Mudra" />
            </div>
            <div className="whatsapp-info">
              <span className="status-pill">WhatsApp</span>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer reveal">
        <p>© 2026 {fullName}</p>
        <div className="footer-links">
          <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${email}`}>Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
