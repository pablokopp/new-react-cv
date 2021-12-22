import { Language } from "../context/Language";
import Project from "../components/Project";
import React from "react";
import Title from "../components/Title";
import dataP from "../data/dataP.json";
import dataPen from "../data/dataPen.json";
import { useContext } from "react";

const Projects = () => {
  const { english } = useContext(Language);

  return (
    <div className="projects">
      <Title cnTitle="projects" text={english ? "PROJECTS" : "PROYECTOS"} />
      <div className="projects--list">
        {english
          ? dataPen.map((item) => <Project {...item} />)
          : dataP.map((item) => <Project {...item} />)}
      </div>
    </div>
  );
};

export default Projects;
