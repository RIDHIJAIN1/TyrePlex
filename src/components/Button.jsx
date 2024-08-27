// src/components/Button.jsx
import React from 'react';
import '../main.css';

const Button = ({ children, onClick }) => {
  return (
    <button className="btn bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
    <i className="animation"></i>{children}<i className="animation"></i>
  </button>
  );
};

export default Button;
