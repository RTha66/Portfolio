import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Rhatanaporn Maturasakul</h1>
        <p>Information Technology Student (Multimedia), KMITL</p>
      </header>
      
      <section id="about">
        <h2>About Me</h2>
        <p>นักศึกษาชั้นปีที่ 3 คณะเทคโนโลยีสารสนเทศ สจล. สนใจด้าน Web Development และ UX/UI</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        {/* คุณสามารถเพิ่มรายการโปรเจกต์ที่นี่ */}
      </section>
    </div>
  )
}

export default App