export default function Project4() {
    return (
        <div
            className="project-item project-item--split"
            style={{
                background: "#F0F8FF",
                border: "2px solid var(--primary-blue)",
            }}
        >
            <div className="pi-pic">
                <img
                    src="/pic/mockup_dom.png"
                    alt="Project 4 mockup"
                    className="pi-mockup"
                />
            </div>

            <div className="pi-detail">
                <p className="pi-eyebrow">Web Application</p>

                <h2 className="pi-title pi-title-dorm" style={{ color: "var(--primary-blue)" }}>
                    Dormitory Management System
                </h2>

                <p className="pi-desc">
                    A Java-based OOP application for dormitory management. It features a GUI for easy room data handling and uses an SQL database for organized storage.
                </p>

                <div className="pi-tech-container">
                    <div className="pi-tech-group">
                        <strong>Frontend:</strong> Java Swing, AWT, NetBeans GUI Builder
                    </div>
                    <div className="pi-tech-group">
                        <strong>Backend:</strong> Java (OOP Architecture)
                    </div>
                    <div className="pi-tech-group">
                        <strong>Database:</strong> SQL
                    </div>
                    <div className="pi-tech-group">
                        <strong>Development Tools:</strong> NetBeans IDE, Apache Ant, Git
                    </div>
                </div>

                <div className="pi-links">
                    <a href="https://github.com/RTha66/DORMITORY-MANAGEMENT-SYSTEM" target="_blank" rel="noreferrer" className="pi-link">
                        View the code <span>›</span>
                    </a>
                    <a href="/file/design_dom.pdf" target="_blank" rel="noreferrer" className="pi-link pi-link--accent">
                        View the Design <span>›</span>
                    </a>
                </div>
            </div>

        </div>
    );
}