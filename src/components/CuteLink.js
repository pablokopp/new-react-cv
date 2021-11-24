import React from "react";

const CuteLink = ({ cuteHref, cuteText, cnCute }) => {
  let classCute = `cuteLink cuteLink--${cnCute}`;
  return (
    <a className={classCute} href={cuteHref}>
      {cuteText}
    </a>
  );
};

export default CuteLink;
