import React from "react";
import "../../assets/projects.json";

const baseURL = process.env.PUBLIC_URL;

function Project(props) {
  return (
    <div className="card project-card" key={props.id}>
      <div className="img-container">
        <img width="280px" alt={props.name} src={baseURL + props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name: </strong> {props.name}
          </li>
          <li>
            <strong>Project Description: </strong> {props.description}
          </li>
          <li>
            <strong>Technical Skills: </strong> {props.skills}
          </li>
          <li>
            <strong>Repository: </strong>
            <a target="blank" href={props.repo}>
              {props.repo}
            </a>
          </li>
          <li>
            <strong>Deployed App: </strong>
            <a target="blank" href={props.location}>
              {props.location}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
