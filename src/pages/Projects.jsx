import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container projects-content">

        {/* Top Image */}
        <div className="image-wrapper">
          <img
            src="/assets/project.png"
            alt="Excited for what's coming"
            className="top-image"
          />
        </div>
        {/* Project Blocks */}
        <div className="projects-blocks">
          <div className="block social-media">
            <h2>Social Media Application</h2>
          </div>

          <div className="block ecommerce">
            <h2>E-Commerce Application</h2>
          </div>
        </div>
        {/* CTA */}
      </div>
    </section>
  );
};

export default Projects;
