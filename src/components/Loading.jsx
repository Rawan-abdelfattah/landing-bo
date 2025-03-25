import React from "react";
import { motion } from "framer-motion"; 
import { ImSpinner2 } from "react-icons/im";  

const Loading = ({darkMode}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <ImSpinner2 className={`text-5xl ${darkMode ? 'text-[#017CD4] '  :'text-[#2c1662]  '} `} />
      </motion.div>
      
      
    </div>
  );
};

export default Loading;