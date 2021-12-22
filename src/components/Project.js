import Paragraph from "./Paragraph";
import React from "react";
import Title from "./Title";

const Project = ({ name, url, desc }) => {
  return (
    <div className="project">
      <a href={url} target="_blank" rel="noreferrer">
        <Title cnTitle="project" text={name} />
      </a>
      <Paragraph cnPar="project" text={desc} />
    </div>
  );
};

export default Project;
