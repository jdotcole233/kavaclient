import React from "react";
import SSL from "../../assets/ssl-sm.png";

const Footer = () => {
  return (
    <div className="h-16 w-full flex items-center px-3 justify-between bg-gray-100">
      <img className="" src={SSL} alt="" />
      <div>
        <a
          className="text-green-400 hover:text-green-600+"
          href="http://comfytechnology.tech/"
          rel="noreferrer"
          target="_blank"
        >
          Comfy Technology &#169; {new Date().getFullYear()}
        </a>
      </div>
    </div>
  );
};

export default Footer;
