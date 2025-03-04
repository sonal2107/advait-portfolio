import React from "react";
import { motion } from "framer-motion";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from "@mui/lab";
import { School, GraduationCap, Book } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor's of Science, Information Technology",
    institute: "Rizvi College of Arts, Science & Commerce",
    duration: "2020 - 2022",
    location: "Bandra",
    icon: <GraduationCap size={30} />,
  },
  {
    degree: "Diploma in Information Technology",
    institute: "Vidyalankar Polytechnic",
    duration: "2016 - 2019",
    location: "Wadala East",
    icon: <Book size={30} />,
  },
  {
    degree: "SSC",
    institute: "I.E.S VN Sule Guruji English Medium School",
    duration: "2015 - 2016",
    location: "Dadar East",
    icon: <School size={30} />,
  },
];

const EducationTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-6 max-w-3xl mx-auto"
    >
      <h2 className="text-2xl text-blue-300 font-bold mb-6 text-center">Education</h2>
      <Timeline position="alternate">
        {educationData.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent className="text-white">
              {edu.duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className="bg-blue-500 text-white p-2">{edu.icon}</TimelineDot>
              {index !== educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-lg"

              >
                <h3 className="text-lg text-blue-500 font-semibold">{edu.degree}</h3>
                <p className="text-blue-200">{edu.institute}</p>
                <p className="text-purple-400 text-sm">{edu.location}</p>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
};

export default EducationTimeline;
