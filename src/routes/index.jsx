import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { FaMoon, FaSun } from 'react-icons/fa';

const AppRoutes = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
        {/* <div className="flex justify-end p-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <FaSun size={20} className="text-yellow-500" /> : <FaMoon size={20} className="text-gray-800" />}
          </button>
        </div> */}
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
