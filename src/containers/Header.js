import React from "react";
import Title from "../components/Title";
import Image from "../components/Image";
import imgStill from "../data/image/headerstill.png";
import imgGif from "../data/image/headergif.gif";
const Header = () => {
  return (
    <div className="header">
      <Title cnTitle="header header--1" text="PABLO KOPP" />
      <Image cnImg="header" imgSrc={imgStill} />
      <Image cnImg="headergif" imgSrc={imgGif} />
      <Title cnTitle="header header--2" text="FRONT END DEV" />
    </div>
  );
};

export default Header;
