import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      {/* Animated Glowing Text "Boitr" */}
      <motion.h1
        className="text-5xl font-bold tracking-wide mb-4"
        animate={{
          textShadow: [
            "0px 0px 10px #6366F1",
            "0px 0px 20px #EC4899",
            "0px 0px 30px #F59E0B",
            "0px 0px 40px #22D3EE",
          ],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Boitr
      </motion.h1>
 
    </div>
  );
};

export default Loading;
