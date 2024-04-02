import React from 'react';
import { motion } from 'framer-motion';

const NSkills = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return <div>No skills found</div>;
  }
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="skills"
    >
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">{skill.name}</p>
            <span className="w-full h-2 bg-opacity-50 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ width: `${skill.percentage}%` }} // Adjust width dynamically based on percentage
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">{skill.percentage}%</span>
              </motion.span>
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default NSkills;
