import React from "react";
import Title from "../components/Title";
import StudyExp from "../components/StudyExp";
import dataS from "../data/dataS.json";

const Study = () => {
  return (
    <div className="study">
      <Title cnTitle="study" text="MIS ESTUDIOS" />
      {dataS.map((item) => (
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
