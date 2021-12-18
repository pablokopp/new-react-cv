import { Language } from "../context/Language";
import React from "react";
import Title from "../components/Title";
import WorkExp from "../components/WorkExp";
import dataW from "../data/dataW.json";
import dataWen from "../data/dataWen.json";
import { useContext } from "react";

const Work = () => {
  const { english } = useContext(Language);
  return (
    <div className="work">
      <Title
        cnTitle="work"
        text={english ? "WORK EXPERIENCE" : "EXPERIENCIA LABORAL"}
      />
      {english
        ? dataWen.map((item) => (
            <WorkExp
              jwhere={item.jwhere}
              jwhen={item.jwhen}
              jhow={item.jhow}
              jdesc={item.jdesc}
              key={item.jhow}
            />
          ))
        : dataW.map((item) => (
            <WorkExp
              jwhere={item.jwhere}
              jwhen={item.jwhen}
              jhow={item.jhow}
              jdesc={item.jdesc}
              key={item.jhow}
            />
          ))}
    </div>
  );
};

export default Work;
