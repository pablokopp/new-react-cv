import React from "react";
import CuteLink from "../components/CuteLink";
import Image from "../components/Image";
import imgStill from "../data/image/footerstill.png";
import imgGif from "../data/image/footergif2.gif";

const Footer = () => {
  return (
    <div className="footer">
      <CuteLink
        cuteHref="https://github.com/pablokopp"
        cuteText="💻 GitHub"
        cnCute="github"
      />
      <CuteLink
        cuteHref="https://www.linkedin.com/in/pablo-koppargentina/"
        cuteText="👨‍💻 LinkedIn"
        cnCute="linkedin"
      />
      <Image cnImg="footer" imgSrc={imgStill} />

      <Image cnImg="footergif" imgSrc={imgGif} />
      <CuteLink
        cuteHref="https://api.whatsapp.com/send?phone=5491169478092"
        cuteText="📱 +54 9 1169478092"
        cnCute="whatsapp"
      />
      <CuteLink
        cuteHref="mailto:kopp.pablo@gmail.com"
        cuteText="✉️ kopp.pablo@gmail.com"
        cnCute="gmail"
      />
    </div>
  );
};
export default Footer;
