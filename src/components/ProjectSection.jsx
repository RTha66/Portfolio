import { useEffect, useRef } from "react";

export default function ProjectSection() {
  const projectRef = useRef(null);

  useEffect(() => {
    const container = document.querySelector(".portfolio-container");
    const project = projectRef.current;

    let isScrolling = false;

    const handleWheel = (e) => {
      const rect = project.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!isInView) return;

      const isAtStart = project.scrollLeft <= 0;
      const isAtEnd = project.scrollLeft + project.clientWidth >= project.scrollWidth - 1;

      if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
        e.preventDefault();
        if (isScrolling) return;

        const width = project.clientWidth;
        const currentIndex = Math.round(project.scrollLeft / width);
        const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

        isScrolling = true;
        project.scrollTo({
          left: nextIndex * width,
          behavior: "smooth",
        });

        setTimeout(() => { isScrolling = false; }, 700);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="project-section" ref={projectRef}>
      <div className="project-item">Project 1</div>
      <div className="project-item">Project 2</div>
      <div className="project-item">Project 3</div>
    </section>
  );
}