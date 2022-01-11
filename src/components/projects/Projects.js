import React, { useState } from "react";
import "./projects.css";
import data from "./data";
const Projects = () => {
  return (
    <div className="main-container">
      <div className="container-one">
        <div className="card_body">
          <div className="card_title">
            <h2>My Portfolio Website</h2>
            <p className="card_description">
              "The application is developed with React Js framework. The
              application is implemented using the concepts of react router,
              react hooks and bootstrap , which displays to see my intro,
              projects done by me and also allows people to contact me.
            </p>
          </div>
        </div>
      </div>
      <div className="container-two">
        <div className="card_body">
          <div className="card_title">
            <h2>REST API Implementation</h2>
            <p className="card_description">
              REST API is developed using Node Js, Express framework and
              integrated with MongoDB to fetch, update, delete task data of the
              users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
