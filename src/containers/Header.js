import React from "react";
import Title from "../components/Title";
import Image from "../components/Image";
const Header = () => {
  return (
    <div className="header">
      <Title cnTitle="header header--1" text="PABLO KOPP" />
      <Title cnTitle="header header--2" text="FRONT END DEV" />
      <Image
        cnImg="header"
        imgSrc="https://firebasestorage.googleapis.com/v0/b/proyectocv-firegram.appspot.com/o/Foto%20Cara%20Actual.jpg?alt=media&token=51939eeb-fecd-48af-aa8a-190b002851c9"
      />
    </div>
  );
};

export default Header;
