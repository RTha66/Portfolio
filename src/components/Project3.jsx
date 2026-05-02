export default function Project3() {
  return (
    <div
      className="project-item project-item--split"
      style={{
        background: "#f7fdee",
        border: "2px solid var(--highlight-lime)",
      }}
    >
      {/* --- ฝั่งซ้าย: ส่วนรายละเอียดเนื้อหา --- */}
      <div className="pi-detail">
        <p className="pi-eyebrow">Web Application</p>
        
        {/* หัวข้อโปรเจกต์ ใช้สีเขียวมะนาวให้เข้าธีม */}
        <h2 className="pi-title" style={{ color: "var(--highlight-lime)" }}>
          Custom Jewelry
        </h2>
        
        <p className="pi-desc">
          A jewelry web application where users can design custom-made jewelry or buy ready-made products.
        </p>

        {/* ส่วนแสดงเทคโนโลยีที่ใช้ แบ่งหมวดหมู่ให้อ่านง่าย */}
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
        </div>

        <div className="pi-links">
          <a href="https://github.com/RTha66/WebproProject" target="_blank" rel="noreferrer" className="pi-link">
            View the code <span>›</span>
          </a>
          <a href="/file/design_jewelry.pdf" target="_blank" rel="noreferrer" className="pi-link pi-link--accent">
            View the Design <span>›</span>
          </a>
        </div>
      </div>

      <div className="pi-pic">
        <img 
          src="/pic/mockup_jewelry.png"
          alt="Project 3 mockup" 
          className="pi-mockup pi-mockup--landscape"
        />
      </div>
    </div>
  );
}