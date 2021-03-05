import React from "react";
import projects from "../assets/projects.json";
import Project from "../components/Project";

const ProjectPage = () => {
  {
    projects.map((project_name, image, description, repo, location) => (
      <Project
        name={project_name}
        image={image}
        description={description}
        repo={repo}
        location={location}
      />
    ));
  }
  return (
    <div className="conatiner portfolio-container">
      <h1>List of My Projects</h1>
      <div className="row"></div>
    </div>
  );
};

export default ProjectPage;
