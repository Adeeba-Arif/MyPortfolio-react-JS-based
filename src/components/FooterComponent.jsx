// src/components/FooterComponent.jsx
import React from "react";

const FooterComponent = ({ isDark }) => {
  return (
    <footer className={`mt-20 py-8 text-center text-sm ${isDark ? "text-gray-300" : "text-black"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Adeeba Arif. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;