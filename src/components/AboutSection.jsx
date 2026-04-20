export default function AboutSection(){
    return (
        <section className="about-section">
            <h1 className="name-large">RHATANAPORN</h1>
            <h1 className="name-italic">
                <span className="pink-line">Maturasakul</span>
            </h1>
            <p className="job-tag"><span className="frontend">Front-end Developer</span> / <span className="uxui">UX UI Designer</span></p>
            <p className="description">
                As a fourth-year student at King Mongkut's Institute of Technology Ladkrabang, <br />
                I am seeking an internship in Frontend Development and UX/UI Design to gain 
                hands-on experience. I am eager to apply my academic knowledge to real-world 
                projects and learn professional workflows to build a strong foundation for 
                my future career.
            </p>
            <a href="#skill" className="more-btn"><span>more</span></a>
        </section>
    );
}