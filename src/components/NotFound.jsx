import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = ({ darkMode }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-screen p-6 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-black text-white"
          : "bg-gradient-to-br from-gray-50 to-white text-gray-900"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? "bg-white opacity-10" : "bg-gray-700 opacity-05"
            }`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center z-10">
        {/* 404 Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/4044.png"
            className="w-full max-w-[500px] h-auto object-contain"
            alt="404 Error"
          />
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Page Not Found
          </h1>
          <p
            className={`text-lg max-w-md ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Back to Home button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-500 shadow-lg
            flex items-center gap-2 ${
              darkMode
                ? "bg-[#017CD4] hover:bg-[linear-gradient(90deg,rgba(56,155,233,0.5)_0%,rgba(177,63,188,0.5)_100%)]"
                : "text-white bg-[#2c1662] hover:bg-[#2c136f]"
            }  `}
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
