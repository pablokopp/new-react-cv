import React from "react";
import Title from "../components/Title";
import StudyExp from "../components/StudyExp";
import dataS from "../data/dataS.json";
import dataSen from "../data/dataSen.json";
import { useContext } from "react/cjs/react.development";
import { Language } from "../context/Language";
const Study = () => {
  const { english } = useContext(Language);
  return (
    <div className="study">
      <Title cnTitle="study" text={english ? "MY STUDIES" : "MIS ESTUDIOS"} />
      {english
        ? dataSen.map((item) => (
            <StudyExp
              swhere={item.swhere}
              swhen={item.swhen}
              show={item.show}
              sdesc={item.sdesc}
              key={item.show}
            />
          ))
        : dataS.map((item) => (
            <StudyExp
              swhere={item.swhere}
              swhen={item.swhen}
              show={item.show}
              sdesc={item.sdesc}
              key={item.show}
            />
          ))}
    </div>
  );
};

export default Study;
