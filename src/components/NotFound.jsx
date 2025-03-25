import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      {/* Animated 404 Text */}
      <motion.h1
        className="text-7xl font-extrabold tracking-wide mb-4"
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
        404
      </motion.h1>

      {/* Subheading */}
      <p className="text-lg text-gray-400 mb-6">Oops! The page you are looking for does not exist.</p>

      {/* Animated Button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
