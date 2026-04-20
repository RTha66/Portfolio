import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkillSection() {
    const [isWebDevView, setIsWebDevView] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsWebDevView((prev) => !prev);
        }, 8000); 
        return () => clearInterval(timer);
    }, []);

    const generalSkills = [
        { title: "Design Tools", skills: [{ name: "Figma", icon: "/icon/figma.svg" }, { name: "Adobe Illustrator", icon: "/icon/ai.svg" }] },
        { title: "Programming Languages", skills: [{ name: "Java", icon: "/icon/java.svg" }, { name: "Python", icon: "/icon/py.svg" }, { name: "C", icon: "/icon/c.svg" }] },
        { title: "DevOps & Tools", skills: [{ name: "Docker", icon: "/icon/docker.svg" }, { name: "GitHub", icon: "/icon/github.svg" }] }
    ];

    const webDevDetailed = [
        { title: "Front-End", skills: [{ name: "HTML5", icon: "/icon/html.svg" }, { name: "CSS3", icon: "/icon/css.svg" }, { name: "JavaScript", icon: "/icon/js.svg" }, { name: "React", icon: "/icon/React.svg" }, { name: "Tailwind", icon: "/icon/tailwind.svg" }] },
        { title: "Back-End", skills: [{ name: "Node.js", icon: "/icon/node.svg" }, { name: "EJS", icon: "/icon/ejs.svg" }] },
        { title: "Database", skills: [{ name: "MongoDB", icon: "/icon/mongo.svg" }, { name: "SQLite", icon: "/icon/sql.svg" }] }
    ];

    const currentCategories = isWebDevView ? webDevDetailed : generalSkills;

    return (
        <section className="skill-education-container">
            <h1 className="section-title">SKILL & EDUCATION</h1>

            <div className="eduction-info">
                <p><span>KING MONGKUT'S INSTITUTE OF TECHNOLOGY LADKRABANG (KMITL)</span><br />
                BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY <br />
                (MULTIMEDIA AND GAME DEVELOPMENT)</p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={isWebDevView ? 'web' : 'general'} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className={`skills-grid-wrapper ${isWebDevView ? 'view-web' : 'view-general'}`}
                >
                    {currentCategories.map((cat) => (
                        <div key={cat.title} className="skill-group">
                            <h4>{cat.title}</h4>
                            <div className="icon-grid">
                                {cat.skills.map((skill, i) => (
                                    <div key={i} className="skill-icon-box">
                                        <img src={skill.icon} alt={skill.name} className="skill-img" />
                                        <span className="skill-name-tooltip">{skill.name}</span>
                                    </div>
                                )).reverse()}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>

            <div className="pagination-dots">
                <span className={!isWebDevView ? 'active' : ''} onClick={() => setIsWebDevView(false)}></span>
                <span className={isWebDevView ? 'active' : ''} onClick={() => setIsWebDevView(true)}></span>
            </div>
        </section>
    );
}