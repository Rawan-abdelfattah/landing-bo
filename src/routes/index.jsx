import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'light'
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
      <div  className={`root min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
