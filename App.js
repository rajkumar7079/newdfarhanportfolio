import './App.css';

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-block">
          <span className="brand-tag">FARHAN</span>
          <p>Frontend Developer &amp; UI Engineer</p>
        </div>
        <nav className="top-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-panel">
          <div className="hero-glow" />
          <div className="hero-copy">
            <p className="eyebrow">Portfolio Experience</p>
            <h1 className="glitch-title">Md Farhan Akhtar</h1>
            <p className="hero-description">
              Crafting polished, modern web interfaces with React and clean animation, delivering premium frontend
              experiences in every project.
            </p>
            <div className="hero-actions">
              <a href="#about" className="cta-button">Explore My Story</a>
              <a href="#contact" className="ghost-button">Let&apos;s Connect</a>
            </div>
          </div>
          <div className="hero-panel__code">
            <div className="code-header">
              <span /> <span /> <span />
            </div>
            <pre>
              <code>
{`const frontend = {
  name: 'Farhan',
  role: 'Frontend Developer',
  tech: ['React', 'CSS', 'JavaScript'],
  mindset: 'Premium hacker aesthetic with polished UI'
};

function buildPortfolio() {
  return frontend;
}`}
              </code>
            </pre>
          </div>
        </section>

        <section id="about" className="info-section">
          <div className="section-header">
            <span>01</span>
            <h2>About Me</h2>
          </div>
          <p>
            I design sleek, high-concept frontend experiences with a hacker-inspired visual edge. My focus is on
            building interfaces that feel premium, fast, and immersive while remaining easy to use and readable.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Interaction Design</h3>
              <p>Animated buttons, subtle motion, and polished UX for modern web products.</p>
            </div>
            <div className="feature-card">
              <h3>React Efficiency</h3>
              <p>Reusable components, clean project structure, and responsive code-ready layouts.</p>
            </div>
            <div className="feature-card">
              <h3>Style Systems</h3>
              <p>Branded color systems, glassmorphism, and futuristic UI treatment with premium polish.</p>
            </div>
          </div>
        </section>

        <section id="education" className="info-section">
          <div className="section-header">
            <span>02</span>
            <h2>Education</h2>
          </div>
          <div className="education-grid">
            <article className="education-card">
              <h3>Bachelor of Computer Science</h3>
              <p>University of Technology</p>
              <span>2020 - 2024</span>
            </article>
            <article className="education-card">
              <h3>Frontend Developer Bootcamp</h3>
              <p>Advanced React &amp; UI Engineering</p>
              <span>2024</span>
            </article>
          </div>
          <p className="education-note">
            I specialize in building web applications using React, CSS animations, and intuitive layout systems that
            scale across devices.
          </p>
        </section>

        <section id="contact" className="info-section contact-section">
          <div className="section-header">
            <span>03</span>
            <h2>Contact</h2>
          </div>
          <p>
            Ready to transform your frontend vision into a polished React experience? I&apos;m available for freelance
            work, collaborations, and UI-focused product development.
          </p>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Email</h3>
              <p>farhanakhtar4648@gmail.com</p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <p>+92 97716 95959</p>
            </div>
            <div className="contact-card">
              <h3>Location</h3>
              <p>Mohali / Punjab</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div>
            <h3>Md Farhan Akhtar</h3>
            <p>Frontend Developer - React, UI Animation, Web Interactions</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <p className="footer-note">Designed with a premium hacker portfolio aesthetic and polished frontend detail.</p>
      </footer>
    </div>
  );
}

export default App;
