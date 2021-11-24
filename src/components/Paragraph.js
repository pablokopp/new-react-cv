import React from "react";

const Paragraph = ({ cnPar, text }) => {
  let classPar = `paragraph paragraph--${cnPar}`;

  return <p className={classPar}>{text}</p>;
};

export default Paragraph;
