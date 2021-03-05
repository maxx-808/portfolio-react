import React from "react";

function Projcet(props) {
  return (
    <div className="card port-card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name: </strong> {props.project_name}
          </li>
          <li>
            <strong>Project Description: </strong> {props.description}
          </li>
          <li>
            <strong>Repository: </strong> {props.repo}
          </li>
          <li>
            <strong>Deployed App: </strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
