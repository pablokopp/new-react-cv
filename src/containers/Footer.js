import React from "react";
// import Title from "../components/Title";
import CuteLink from "../components/CuteLink";
import Image from "../components/Image";
import img from "../data/image/footergif.gif";
const Footer = () => {
  return (
    <div className="footer">
      {/* <Title cnTitle="footer" text="CONTACTAME" /> */}
      <CuteLink
        cuteHref="https://github.com/pablokopp"
        cuteText="GitHub"
        cnCute="github"
      />
      <CuteLink
        cuteHref="https://www.linkedin.com/in/pablo-koppargentina/"
        cuteText="LinkdIn"
        cnCute="linkedin"
      />
      <Image cnImg="footer" imgSrc={img} />
      <CuteLink
        cuteHref="https://api.whatsapp.com/send?phone=5491169478092"
        cuteText="+54 9 1169478092"
        cnCute="whatsapp"
      />
      <CuteLink
        cuteHref="mailto:kopp.pablo@gmail.com"
        cuteText="kopp.pablo@gmail.com"
        cnCute="gmail"
      />
    </div>
  );
};

export default Footer;
