import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-[250px] p-0">
      {/* Left Side - Contact Info */}
      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <div className="flex items-center space-x-2 text-lg">
          <MdEmail className="text-blue-500" />
          <span>advaitasal@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2 text-lg">
          <ImLocation2 className="text-red-500" />
          <span>Mumbai, Maharashtra, India</span>
        </div>
      </motion.div>

      {/* Right Side - Let's Connect */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center md:text-right mt-10 md:mt-0 md:ml-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect!
      </motion.h1>
    </div>
  );
};

export default Contact;
