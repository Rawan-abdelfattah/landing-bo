import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    const root = document.documentElement; // Select the <html> element

    if (darkMode) {
      root.classList.add("dark", "bg-black", "text-white");
      root.classList.remove("bg-white", "text-gray-900");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark", "bg-black", "text-white");
      root.classList.add("bg-white", "text-gray-900");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <div
        className={`root min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route path="*" element={<>404</>} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
