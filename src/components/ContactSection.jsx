import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("+66958215257");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="contact-section">
      <div className="contact-inner">

        <p className="contact-eyebrow">I look forward to hearing from you.</p>
        <h1 className="contact-heading">
          <span className="contact-heading-blue">GET IN</span>
          <br />
          <span className="contact-heading-italic">Touch.</span>
        </h1>

        <div className="contact-links">
          <a href="mailto:rhatanapornm@gmail.com" className="contact-link-item">
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">rhatanapornm@gmail.com</span>
            <span className="contact-link-arrow">↗</span>
          </a>

          <a href="https://github.com/RTha66" target="_blank" rel="noreferrer" className="contact-link-item">
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-value">RTha66</span>
            <span className="contact-link-arrow">↗</span>
          </a>

          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="contact-link-item">
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-value">Rhatanaporn M.</span>
            <span className="contact-link-arrow">↗</span>
          </a>

          <div className="contact-link-item" onClick={handleCopy} style={{ cursor: "pointer" }}>
            <span className="contact-link-label">Phone</span>
            <span className="contact-link-value">+66958215257</span>
            <span className="contact-link-arrow">
              {copied
                ? <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary-blue)' }}>Copied!</span>
                : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor">
                    <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
                  </svg>
                )
              }
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}