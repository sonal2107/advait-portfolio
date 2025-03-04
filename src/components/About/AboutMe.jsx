import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="main-aboutMe flex items-center justify-center h-screen ml-10">
      <motion.div
        className="left-aboutMe"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-blue-300">Know more about me</h1>
      </motion.div>
      <motion.div
        className="right-aboutMe"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>
          I am Advait Salgaonkar, an Associate Network Engineer with expertise
          in L3 VPN, routing, and network security. With a strong foundation in
          CCNA, CCNP, and S CORE, I specialize in packet switching, routing
          protocols, and zone-based firewalls, ensuring efficient and secure
          network operations. My experience in networking allows me to design,
          troubleshoot, and optimize enterprise-level infrastructures,
          contributing to seamless communication and data flow. As an IT
          professional, I also have a working knowledge of C, C++, HTML, CSS,
          and Java, which enables me to understand the intersection of
          networking and software development. This additional technical
          background helps me approach problem-solving with a broader
          perspective, bridging the gap between networking and programming when
          required. I am passionate about staying updated with the latest
          advancements in networking and cybersecurity, constantly seeking
          opportunities to expand my skill set and enhance my expertise.
          Whether it's optimizing network performance, implementing security
          measures, or learning emerging technologies, I am dedicated to
          delivering high-quality solutions in the ever-evolving tech landscape.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;