import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.div
        className="relative w-24 h-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Spinning ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border-4 border-transparent border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-yellow-500 rounded-full animate-spin"></div>
        </div>

        {/* Inner pulse effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-xl"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
