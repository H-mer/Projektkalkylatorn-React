import React from "react";
import "../styles/headerfooter.css"; // Importera CSS-fil

function ProjectNav() {
  return (
    <nav id="project-nav">
      <button id="new-project-btn" className="new-project-btn">
        <i className="fas fa-folder-plus"></i> Nytt projekt
      </button>
    </nav>
  );
}

export default ProjectNav;
