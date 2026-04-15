import { useState } from 'react';
import './App.css'
import AboutSection from './components/AboutSection';

function NeonButton({ children, onClick }) {
  return (
    <button className="neon-bubble-button" onClick={onClick}>
      <span className="button-content">{children}</span>
    </button>
  );
}

function App() {

  return (
    <div className='portfolio-container'>
      <header className='top-header'>
        <a href='https://github.com/RTha66' className='logo'>RTha</a>
        <NeonButton children="Contact" onClick={() => console.log('Contact Clicked!')} />
      </header>

      <main className='main-layout'>

      <AboutSection />

      <aside className='side-nav'>
        <nav className='vertical-menu'>
          <div className='nav-item active'>About</div>
          <div className='nav-item'>Skill</div>
          <div className='nav-item'>Project</div>
        </nav>
        <div className="vertical-line"></div>
      </aside>
      </main>
    </div>
  )
}

export default App