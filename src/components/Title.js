import React from "react";

const Title = ({ text, cnTitle }) => {
  let classTitle = `title title--${cnTitle}`;
  return <h1 className={classTitle}>{text}</h1>;
};

export default Title;
