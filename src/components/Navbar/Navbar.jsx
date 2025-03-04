import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 navbar" >
      <div className="m-8 flex items-center justify-center gap-4 text-2xl navlinks">
        <a href="https://www.linkedin.com/in/advait-salgaonkar-936360194/">  
          <FaLinkedin />
        </a>
        <a href="https://github.com/Advaitsal">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/advait_sal/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
