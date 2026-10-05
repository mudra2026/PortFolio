const fullName = 'Mudra Dattatray Kamble';
const title = 'IT Engineering Student | Android Developer';
const email = 'mudrakamble5@gmail.com';
const phone = '+91 9653270296';
const linkedinUrl = 'https://www.linkedin.com/in/mudra-kamble';
const githubUrl = 'https://github.com/mudra2026';
const whatsappUrl = 'https://wa.me/919653270296?text=Hello%20Mudra%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20connect.';
const whatsappQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`;

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
    summary: 'Business-focused app for company information, services, and quick access to enterprise contact details in a clean mobile interface.',
    stack: ['Android', 'Java', 'XML'],
    accent: 'violet'
  },
  {
    name: 'Synchromance',
    summary: 'Dating app concept focused on matching people by compatibility, shared interests, and a modern user experience.',
    stack: ['UI/UX', 'Java', 'Android'],
    accent: 'amber'
  },
  {
    name: 'Peak Flow',
    summary: 'Skill-building mobile concept designed to help users practice and track personal growth and learning routines.',
    stack: ['Product Design', 'Java', 'Android'],
    accent: 'rose'
  }
];

const education = [
  { degree: 'Bachelor of Engineering', school: 'Current Degree Pursuit', year: '2022 - Present' },
  { degree: 'Diploma in Computer Engineering', school: 'Saraswati Institute of Technology', year: '2019 - 2022' }
];

const experience = [
  {
    period: 'Jan 2022 - Present',
    company: 'Saraswati Institute of Technology',
    role: 'Android Developer',
    description: 'Built Android app concepts and user-focused interfaces using Java, XML, and Firebase while improving usability, workflow design, and project thinking.'
  },
  {
    period: '2019 - 2021',
    company: 'Campus Project Work',
    role: 'App Development Intern / Student Developer',
    description: 'Created mobile UI and logic for student applications, learning design systems, real-world app structure, and practical development techniques.'
  }
];

const references = [
  { name: 'Estelle Darcy', title: 'Wardiere Inc. / CEO', phone: '+123-456-7890', email: 'hello@reallygreatsite.com' },
  { name: 'Harper Russo', title: 'Wardiere Inc. / CEO', phone: '+123-456-7890', email: 'hello@reallygreatsite.com' }
];

function App() {
  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <div className="brand">MD</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button primary" href="/Mudra_Resume.pdf" download="Mudra_Resume.pdf">Download Resume</a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="hero-copy">
              <span className="eyebrow">Available for internship</span>
              <h1>{fullName}</h1>
              <p className="subtitle">{title}</p>
              <p className="lede">
                I build practical Android experiences, design clean interfaces, and turn ideas into user-friendly digital solutions.
              </p>
              <div className="cta-row">
                <a className="button primary" href="#projects">View Projects</a>
                <a className="button secondary" href="#contact">Let&apos;s Talk</a>
              </div>
            </div>

            <div className="profile-card">
              <div className="profile-image-wrap">
                <img src="/mudra-portrait.svg" alt={`${fullName} portrait`} />
              </div>
              <div className="profile-meta">
                <span className="status-pill">Available</span>
                <h3>{fullName}</h3>
                <p>IT Engineering Student</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section split-section">
          <div className="section-heading">
            <p className="eyebrow dark">About</p>
            <h2>Driven by technology, creativity, and confidence.</h2>
          </div>
          <div className="panel">
            <p>
              I am {fullName}, currently pursuing a Degree in IT engineering. My journey began with a Diploma in Computer Engineering from Saraswati Institute of Technology, where I built a strong foundation in programming, app development, and practical problem solving.
            </p>
            <p>
              I enjoy developing Android applications, creating XML layouts, writing Java code, and working with Firebase databases. Beyond technical work, I actively participate in college activities and I am passionate about acting, speech, and cooking.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading left">
            <p className="eyebrow dark">Skills</p>
            <h2>Technical strengths and personal strengths I bring.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading left">
            <p className="eyebrow dark">Projects</p>
            <h2>Applications I have developed and designed with real purpose.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className={`project-card ${project.accent}`}>
                <div className="project-meta">
                  <span className="tag">Featured</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="stack-row">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading left">
            <p className="eyebrow dark">Experience</p>
            <h2>Learning, building, and participating at every step.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.period} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-body">
                  <div className="timeline-top">
                    <span className="period">{item.period}</span>
                  </div>
                  <p className="company-name">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-copy">
            <p className="eyebrow dark">Let&apos;s connect</p>
            <h2>Looking for a dedicated and creative IT student ready to learn and build?</h2>
            <div className="social-links">
              <a href={`mailto:${email}`} className="button primary">{email}</a>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="button secondary">{phone}</a>
            </div>
          </div>

          <div className="whatsapp-card">
            <div className="qr-box">
              <img src={whatsappQrUrl} alt="WhatsApp QR code to contact Mudra" />
            </div>
            <div className="whatsapp-info">
              <span className="status-pill">WhatsApp</span>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="section references-block">
          <div className="section-heading left">
            <p className="eyebrow dark">References</p>
            <h2>Professional contacts and credibility.</h2>
          </div>

          <div className="references-grid">
            {references.map((person) => (
              <div key={person.name} className="reference-card">
                <h3>{person.name}</h3>
                <p>{person.title}</p>
                <span>Phone: {person.phone}</span>
                <span>Email: {person.email}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
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

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
