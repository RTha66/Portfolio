export default function Project2() {
  return (
    <div
      className="project-item project-item--split"
      style={{
        background: "#fef1f8",
        border: "2px solid var(--action-pink)",
      }}
    >
      <div className="pi-pic">
        <img
          src="/pic/mockup_crape.png"
          alt="Project 2 mockup"
          className="pi-mockup pi-mockup--large"
        />
      </div>

      <div className="pi-detail">
        <p className="pi-eyebrow">Web Application</p>
        <h2 className="pi-title" style={{ color: "var(--action-pink)" }}>Order Crape</h2>

        <p className="pi-desc">
          A specialized crepe shop web application that uses an online MongoDB database. It features real-time order tracking for customers, order management, and sales analytics.
        </p>

        <div className="pi-tech-container">
          <div className="pi-tech-group">
            <strong>Frontend:</strong> HTML, EJS, Tailwind CSS, JavaScript
          </div>
          <div className="pi-tech-group">
            <strong>Backend:</strong> Node.js, Express.js, JWT
          </div>
          <div className="pi-tech-group">
            <strong>Database:</strong> MongoDB
          </div>
          <div className="pi-tech-group">
            <strong>Tools & Testing:</strong> Jest , Supertest, Swagger UI
          </div>
        </div>

        <div className="pi-links">
          <a href="https://github.com/Imparaloy/Crape-jeah-Pornthip" target="_blank" rel="noreferrer" className="pi-link">
            View the code <span>›</span>
          </a>
          <a href="/file/design_crape.pdf" target="_blank" rel="noreferrer" className="pi-link pi-link--accent">
            View the Design <span>›</span>
          </a>
        </div>
      </div>
    </div>
  );
}