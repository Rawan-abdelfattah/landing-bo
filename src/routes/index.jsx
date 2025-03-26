import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "../pages/Gallery";
import Feature from "../pages/Feature";
import Pricing from "../pages/Pricing";
import Support from "../pages/Support";
import Home from "../pages/Home";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";

const AppRoutes = () => {
  const storedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(
    storedTheme ? storedTheme === "dark" : true
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
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
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        {loading ? (
          <Loading darkMode={darkMode}  />  
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
            <Route
              path="/feature"
              element={
                <Feature darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/gallery"
              element={
                <Gallery darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/pricing"
              element={
                <Pricing darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/support"
              element={
                <Support darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route path="*" element={<NotFound darkMode={darkMode} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default AppRoutes;
