import React from "react";
import "./Hero.css";
import { LuDownload } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import pilot from "../../assets/pilot.png";
import cvFile from "../../assets/CV.pdf";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "CV.pdf"; // Name of the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/advait-salgaonkar-936360194/", "_blank");
  };

  return (
    <motion.div
      className="main-hero-container"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{ originX: 0.5 }}
    >
      <motion.div
        className="left-hero"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <p className="hero-title">Associate Network Engineer</p>
        <h1>Hello I'm</h1>
        <h1 className="name">Advait Salgaonkar</h1>
        <p>I specialize in packet switching, routing protocols, and zone-based firewalls</p>
        <p>CCNA & CCNP Certified</p>
        <div className="hero-buttons">
          <button className="resume" onClick={handleDownloadCV}>
            Download CV <LuDownload />
          </button>
          <button className="linked" onClick={handleLinkedIn}>
            LinkedIN <FaLinkedin />
          </button>
        </div>
      </motion.div>
      <motion.div
        className="right-hero"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.img
          src={pilot}
          className="hero-img"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;