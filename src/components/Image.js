import React from "react";

const Image = ({ cnImg, imgSrc }) => {
  let classImg = `img img--${cnImg}`;
  return <img className={classImg} src={imgSrc} alt="react Img" />;
};

export default Image;
