import { useRef, useEffect, useState } from "react";
import './App.css'
import AboutSection from './components/AboutSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

function NeonButton({ children, onClick }) {
  return (
    <button className="neon-bubble-button" onClick={onClick}>
      <span className="button-content">{children}</span>
    </button>
  );
}

const NAV_ITEMS = [
  { id: 'about',   label: 'About'   },
  { id: 'skill',   label: 'Skill'   },
  { id: 'project', label: 'Project' }
];

function App() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('about');
  let isScrolling = false;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id === 'contact' ? null : id);
          }
        },
        {
          root: containerRef.current,
          rootMargin: '-45% 0px -45% 0px',
          threshold: 0
        }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const handleWheel = (e) => {
      if (isScrolling) return;
      const projectSection = container.querySelector(".project-section");
      if (projectSection) {
        const rect = projectSection.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= window.innerHeight) return;
      }
      e.preventDefault();
      const sections = container.querySelectorAll("section");
      const scrollTop = container.scrollTop;
      const height = window.innerHeight;
      const currentIndex = Math.round(scrollTop / height);
      let nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
      nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));
      isScrolling = true;
      container.scrollTo({ top: nextIndex * height, behavior: "smooth" });
      setTimeout(() => { isScrolling = false; }, 700);
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className='portfolio-container' ref={containerRef}>

      <header className='top-header'>
        <a href='https://github.com/RTha66' className='logo'>RTha</a>
        <NeonButton onClick={() => scrollToSection('contact')}>Contact</NeonButton>
      </header>

      <aside className='side-nav'>
        <nav className='vertical-menu'>
          {NAV_ITEMS.map(({ id, label }, i) => (
            <div key={id}>
              <div className="nav-row" onClick={() => scrollToSection(id)} style={{ cursor: 'pointer' }}>
                <span className={`nav-item ${activeSection === id ? 'active' : ''}`}>
                  {label}
                </span>
                <div className={`nav-dot ${activeSection === id ? 'active' : ''}`} />
              </div>
              {i < NAV_ITEMS.length - 1 && (
                <div className="nav-line-wrap">
                  <div className="nav-line" />
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main className='content-wrapper'>
        <section id="about"><AboutSection /></section>
        <section id="skill"><SkillSection /></section>
        <section id="project"><ProjectSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
    </div>
  );
}

export default App;