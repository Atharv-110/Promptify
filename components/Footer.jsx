import React from "react";
import Image from "next/image";

// images import
import githubLogo from "../public/assets/icons/github-logo.png";
import linkedinLogo from "../public/assets/icons/linkedin.png"
import twitterLogo from "../public/assets/icons/twitter.png"

const Footer = () => {
  return (
    <div className="flex flex-between w-full p-5 border border-x-0 max-sm:flex-col-reverse max-sm:gap-3">
      <div className="font-poppins text-primary-black">Made with 🖤 by Atharv Vani</div>
      <div className="flex justify-between">
        <i className="footer_icon">
          <Image src={githubLogo} width={25} height={25} alt="github-logo" />
        </i>
        <i className="footer_icon">
          <Image src={linkedinLogo} width={25} height={25} alt="github-logo" />
        </i>
        <i className="footer_icon">
          <Image src={twitterLogo} width={25} height={25} alt="github-logo" />
        </i>
      </div>
    </div>
  );
};

export default Footer;
