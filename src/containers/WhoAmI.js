import React from "react";
import { useContext } from "react";

import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import dataES from "../data/whoAmI.json";
import dataEN from "../data/whoAmIen.json";
import { Language } from "../context/Language";

const WhoAmI = () => {
  const { english } = useContext(Language);

  return (
    <div className="whoAmI ">
      <Title cnTitle="whoAmI" text={english ? "WHO AM I?" : "QUIEN SOY"} />
      {english ? (
        <Paragraph cnPar="whoAmI" text={dataEN[0].text} />
      ) : (
        <Paragraph cnPar="whoAmI" text={dataES[0].text} />
      )}{" "}
    </div>
  );
};

export default WhoAmI;
