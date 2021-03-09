import React from "react";

function Project(props) {
  return (
    <div className="card" key={props.id}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
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
