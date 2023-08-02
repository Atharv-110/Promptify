import Link from "next/link";
import Image from "next/image";

// images import
import githubLogo from "../public/assets/icons/github-logo.png";
import linkedinLogo from "../public/assets/icons/linkedin.png";
import twitterLogo from "../public/assets/icons/twitter.png";

const Footer = () => {
  return (
    <div className="mt-12 flex flex-between items-center w-full p-5 border border-gray-light border-x-0 border-b-0 max-sm:flex-col-reverse max-sm:gap-4">
      <div className="font-poppins text-primary-black">
        Made with 🖤 by Atharv Vani
      </div>
      <div className="flex justify-between">
        <Link
          target="_blank"
          href="https://github.com/Atharv-110"
          className="footer_icon"
        >
          <Image src={githubLogo} width={25} height={25} alt="github-logo" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/atharv-vani110/"
          className="footer_icon"
        >
          <Image src={linkedinLogo} width={25} height={25} alt="github-logo" />
        </Link>
        <Link
          target="_blank"
          href="https://twitter.com/atharv_110"
          className="footer_icon"
        >
          <Image src={twitterLogo} width={25} height={25} alt="github-logo" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
