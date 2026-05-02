export default function Project1() {
  return (
    <div
      className="project-item project-item--split"
      style={{
        background: "var(--accent-bg)",
        border: "2px solid var(--accent-violet)",
        gap: 10,
      }}
    >
      <div className="pi-detail">
        <p className="pi-eyebrow">Web Application</p>
        <h2 className="pi-title" style={{ color: "var(--accent-violet)" }}>Health Record</h2>
        
        <p className="pi-desc">
          A personal medical information management web application that supports health data logging, symptom tracking, and medication management for effective communication with doctors and improved self-care.
        </p>

        <div className="pi-tech-container">
          <div className="pi-tech-group">
            <strong>Frontend:</strong> HTML, Tailwind CSS, EJS, Javascript
          </div>
          <div className="pi-tech-group">
            <strong>Backend:</strong> Node.js, Express.js
          </div>
          <div className="pi-tech-group">
            <strong>Cloud (AWS):</strong> EC2, RDS, S3
          </div>
        </div>

        <div className="pi-links">
          <a href="https://github.com/RTha66/HEALTH-RECORD-WEB-APP" target="_blank" rel="noreferrer" className="pi-link">
            View the code <span>›</span>
          </a>
          <a href="/file/Design_HealthRecord.pdf" target="_blank" rel="noreferrer" className="pi-link pi-link--accent">
            View the Design <span>›</span>
          </a>
        </div>
      </div>

      <div className="pi-pic">
        <img src="/pic/mockup_healthrecord.png" alt="Health Record mockup" className="pi-mockup" />
      </div>
    </div>
  );
}