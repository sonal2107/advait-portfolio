import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="main-experience pb-4 mb-[90px]">  
      <div className=" pb-4 flex flex-col items-center">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Experience
        </motion.h1>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-neutral-300 text-center max-w-2xl px-4"
        >
          I have been working as an{" "}
          <span className="text-blue-300 font-semibold">
            Associate Network Engineer
          </span>{" "}
          specializing in{" "}
          <span className="text-blue-300 font-semibold">L3 VPN</span> at{" "}
          <span className="text-blue-300 font-semibold">
            Reliance Telecommunications
          </span>{" "}
          from{" "}
          <span className=" text-blue-400 font-semibold">
            July 2023 to Jan 2025
          </span>
          . My role involves configuring, managing, and troubleshooting
          enterprise-level VPN solutions to ensure seamless network
          connectivity.
        </motion.p>
      </div>
    </div>
  );
};

export default Experience;
