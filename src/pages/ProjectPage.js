import React from "react";
import projects from "../assets/projects.json";
import Project from "../components/project/Project";

const ProjectPage = () => {
  console.log(projects);
  return (
    <div className="container portfolio-container">
      <h1>List of My Projects</h1>
      <div className="row">
        {projects.map(
          ({ project_name, image, description, repo, location }, index) => (
            <Project
              key={index}
              name={project_name}
              image={image}
              description={description}
              repo={repo}
              location={location}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
