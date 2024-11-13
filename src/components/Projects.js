import React, { useEffect, useState } from "react";
import "../assets/style/Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Récupérer les projets depuis l'API
  useEffect(() => {
    fetch("http://localhost:4000/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des projets :", error)
      );
  }, []);

  return (
    <div>
      <h2>Projets</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
