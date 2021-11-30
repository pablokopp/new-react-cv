import React from "react";
import Title from "../components/Title";
import WorkExp from "../components/WorkExp";
import dataW from "../data/dataW.json";

const Work = () => {
  return (
    <div className="work">
      <Title cnTitle="work" text="EXPERIENCIA LABORAL" />
      {dataW.map((item) => (
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
