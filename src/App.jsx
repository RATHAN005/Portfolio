import { useEffect, useState } from 'react'
import './styles.css'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActiveSection(id)
          }
        })
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0.25 }
    )

    const targets = document.querySelectorAll('[data-section]')
    targets.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setNavOpen(false)
  }

  return (
    <div className="page">
      <header className="hero" id="top" data-section>
        <nav className="nav">
          <div className="brand">
            <div className="brand-mark">RK</div>
            <div className="brand-text">
              <span className="brand-name">Rathan K</span>
              <span className="brand-role">Full-stack & AR/VR enthusiast</span>
            </div>
          </div>

          <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a className="ghost-btn" href="mailto:rathan14705@gmail.com">
              Email
            </a>
            <a className="primary-btn" href="#contact" onClick={handleNavClick('contact')}>
              Let’s talk
            </a>
          </div>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((open) => !open)}
          >
            <i className="ri-menu-3-line" />
          </button>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="pill">Available for internships • 2025</div>
            <h1>
              Building smooth experiences that blend <span className="accent">software, hardware, and 3D</span>.
            </h1>
            <p className="lead">
              Computer Science undergraduate skilled in React, Spring Boot, Node.js, and AWS with a knack for AR/VR and
              3D. I craft responsive, scalable products—whether it’s a web platform, a quantum experiment, or
              gesture-based gameplay.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects" onClick={handleNavClick('projects')}>
                View projects
              </a>
              <a className="ghost-btn" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="ri-linkedin-box-fill" /> LinkedIn
              </a>
              <a className="ghost-btn" href="https://github.com" target="_blank" rel="noreferrer">
                <i className="ri-github-fill" /> GitHub
              </a>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">8.2/10</span>
                <span className="stat-label">GPA @ KCE</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">3D assets & prototypes</span>
              </div>
              <div className="stat">
                <span className="stat-number">30%</span>
                <span className="stat-label">Latency cut in AR/VR game</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="badge">Full-stack • AR/VR • Quantum</div>
            <div className="profile-card">
              <div className="profile-info">
                <h3>Rathan K</h3>
                <p>Pollachi, India · Open to opportunities</p>
              </div>
              <div className="profile-meta">
                <div>
                  <i className="ri-mail-line" /> rathan14705@gmail.com
                </div>
                <div>
                  <i className="ri-phone-line" /> +91 63795 50368
                </div>
                <div>
                  <i className="ri-map-pin-line" /> Pollachi, Tamil Nadu
                </div>
              </div>
              <div className="chips">
                <span className="chip">React</span>
                <span className="chip">Spring Boot</span>
                <span className="chip">Node.js</span>
                <span className="chip">AWS</span>
                <span className="chip">MediaPipe</span>
                <span className="chip">Blender</span>
              </div>
              <a className="primary-btn block" href="#contact" onClick={handleNavClick('contact')}>
                Collaborate
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about" data-section>
          <div className="section-head">
            <div>
              <p className="eyebrow">About</p>
              <h2>Detail-oriented developer merging code with immersive experiences.</h2>
            </div>
            <p className="section-desc">
              I enjoy crafting interfaces that feel effortless and performant. From quantum algorithms on IBM simulators
              to gesture-driven games, I focus on measurable impact and scalable, reliable delivery.
            </p>
          </div>
          <div className="about-grid">
            <div className="card highlight">
              <h3>Professional Summary</h3>
              <p>
                Full-stack developer with a foundation in Java, Python, and C/C++, experienced in React, Spring Boot,
                Node.js, and SQL. Skilled in AWS and passionate about building systems that unite software, hardware,
                and 3D content.
              </p>
            </div>
            <div className="card">
              <h3>Education</h3>
              <p className="label">B.E. Computer Science — Karpagam College of Engineering</p>
              <p>Sept 2023 – May 2027 • GPA 8.2/10</p>
              <p className="muted">OS, DSA, Networks, TOC, AI/ML, Architecture, UI/UX</p>
            </div>
            <div className="card">
              <h3>Specializations</h3>
              <div className="chips">
                <span className="chip">AR/VR</span>
                <span className="chip">Gesture Recognition</span>
                <span className="chip">Quantum Computing</span>
                <span className="chip">3D Modeling</span>
                <span className="chip">Process Mining</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills" data-section>
          <div className="section-head">
            <div>
              <p className="eyebrow">Skills</p>
              <h2>End-to-end expertise for modern product teams.</h2>
            </div>
            <p className="section-desc">Tools I reach for to ship reliable, high-performing experiences.</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-meta">
                <span className="label">Frontend</span>
                <div className="bar">
                  <span style={{ width: '86%' }} />
                </div>
              </div>
              <p>React.js, Flutter/Dart, responsive UI/UX, animations, accessibility.</p>
            </div>
            <div className="skill-card">
              <div className="skill-meta">
                <span className="label">Backend</span>
                <div className="bar">
                  <span style={{ width: '82%' }} />
                </div>
              </div>
              <p>Spring Boot, Node.js, Django; REST APIs, SQL modeling, auth, caching.</p>
            </div>
            <div className="skill-card">
              <div className="skill-meta">
                <span className="label">Intelligent & 3D Systems</span>
                <div className="bar">
                  <span style={{ width: '88%' }} />
                </div>
              </div>
              <p>MediaPipe, Keras, AR/VR interfaces, Blender asset creation, physics.</p>
            </div>
            <div className="skill-card">
              <div className="skill-meta">
                <span className="label">Cloud & DevOps</span>
                <div className="bar">
                  <span style={{ width: '75%' }} />
                </div>
              </div>
              <p>AWS (compute & storage), Git/GitHub workflows, CI fundamentals.</p>
            </div>
            <div className="skill-card">
              <div className="skill-meta">
                <span className="label">Languages</span>
                <div className="bar">
                  <span style={{ width: '90%' }} />
                </div>
              </div>
              <p>Java, Python, C/C++, JavaScript/TypeScript, SQL.</p>
            </div>
          </div>
        </section>

        <section className="section" id="experience" data-section>
          <div className="section-head">
            <div>
              <p className="eyebrow">Experience</p>
              <h2>Hands-on work across games, quantum, and hardware.</h2>
            </div>
            <p className="section-desc">I learn fast, build fast, and measure results.</p>
          </div>
          <div className="timeline">
            <div className="timeline-card">
              <div className="timeline-meta">
                <span className="pill">2023</span>
                <p className="label">Rathinam Campus, CA — Game Dev & Design Camp</p>
              </div>
              <h3>3D & Gameplay Prototyping</h3>
              <ul>
                <li>Built 2+ prototypes in Unreal Engine; shipped 5+ Blender assets.</li>
                <li>Elevated visual quality and player engagement through optimized materials and lighting.</li>
              </ul>
            </div>
            <div className="timeline-card">
              <div className="timeline-meta">
                <span className="pill">2024</span>
                <p className="label">Quantum Computing Fundamentals</p>
              </div>
              <h3>Quantum Algorithm Experiments</h3>
              <ul>
                <li>Engineered and tested 3+ algorithms on simulators and IBM Quantum Experience.</li>
                <li>Improved computational efficiency for small datasets; documented learnings.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="projects" data-section>
          <div className="section-head">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Selected work that balances polish and performance.</h2>
            </div>
            <p className="section-desc">Each project targets a measurable outcome—latency, stability, or engagement.</p>
          </div>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-top">
                <span className="pill">Systems</span>
                <span className="pill soft">Hardware</span>
              </div>
              <h3>Custom PC Assembly</h3>
              <p>
                Engineered a custom build with BIOS tuning, cable management, and thermal optimization to cut boot time
                by 20% and boost stability.
              </p>
              <div className="project-meta">
                <span>BIOS tuning</span>
                <span>Thermals</span>
                <span>Performance</span>
              </div>
            </article>
            <article className="project-card">
              <div className="project-top">
                <span className="pill">AR/VR</span>
                <span className="pill soft">MediaPipe</span>
              </div>
              <h3>Gesture Fruit Ninja</h3>
              <p>
                Gesture-controlled game with MediaPipe, reducing input latency by 30% and improving gesture accuracy by
                25% for intuitive play.
              </p>
              <div className="project-meta">
                <span>Python</span>
                <span>CV</span>
                <span>Latency</span>
              </div>
            </article>
            <article className="project-card">
              <div className="project-top">
                <span className="pill">Mobile</span>
                <span className="pill soft">Flutter/Dart</span>
              </div>
              <h3>Mobile Application Framework</h3>
              <p>
                Flutter framework with multi-screen navigation, lifting workflow efficiency by 30% and ensuring
                responsive cross-platform UX.
              </p>
              <div className="project-meta">
                <span>Flutter</span>
                <span>Architecture</span>
                <span>UX</span>
              </div>
            </article>
            <article className="project-card">
              <div className="project-top">
                <span className="pill">Frontend</span>
                <span className="pill soft">HTML/CSS</span>
              </div>
              <h3>Apple Website Clone</h3>
              <p>
                Pixel-perfect replica of Apple’s website, achieving 150% higher engagement on design forums for visual
                fidelity.
              </p>
              <div className="project-meta">
                <span>Responsive</span>
                <span>Accessibility</span>
                <span>Performance</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="certs" data-section>
          <div className="section-head">
            <div>
              <p className="eyebrow">Certifications</p>
              <h2>Proof of continuous learning.</h2>
            </div>
            <p className="section-desc">Focused on practical, industry-relevant upskilling.</p>
          </div>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="pill soft">Coursera</div>
              <h3>Built a Website with WordPress</h3>
            </div>
            <div className="cert-card">
              <div className="pill soft">Celonis</div>
              <h3>Academic Process Mining Fundamentals</h3>
            </div>
            <div className="cert-card">
              <div className="pill soft">MongoDB</div>
              <h3>MongoDB Basics for Students</h3>
            </div>
            <div className="cert-card">
              <div className="pill soft">GeeksforGeeks</div>
              <h3>Full Stack Developer Bootcamp</h3>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" data-section>
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build something bold together.</h2>
              <p className="section-desc">
                Reach out for internships, collaborations, or rapid prototypes. I respond within 24 hours.
              </p>
              <div className="contact-actions">
                <a className="primary-btn" href="mailto:rathan14705@gmail.com">
                  Email Rathan
                </a>
                <a className="ghost-btn" href="tel:+916379550368">
                  <i className="ri-phone-fill" /> Call
                </a>
              </div>
            </div>
            <div className="contact-meta">
              <div className="meta-item">
                <span className="label">Email</span>
                <a href="mailto:rathan14705@gmail.com">rathan14705@gmail.com</a>
              </div>
              <div className="meta-item">
                <span className="label">Phone</span>
                <a href="tel:+916379550368">+91 63795 50368</a>
              </div>
              <div className="meta-item">
                <span className="label">Location</span>
                <p>Pollachi, Tamil Nadu, India</p>
              </div>
              <div className="meta-item">
                <span className="label">Profiles</span>
                <div className="profile-links">
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <i className="ri-linkedin-box-fill" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <i className="ri-github-fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 · Crafted by Rathan K · Built with care.</p>
        <a className="to-top" href="#top" onClick={handleNavClick('top')}>
          <i className="ri-arrow-up-line" />
        </a>
      </footer>
    </div>
  )
}

export default App
