import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/TP-logo.png';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white bg-opacity-70">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white focus:outline-none"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav 
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static inset-x-0 top-16 bg-black bg-opacity-90 lg:bg-transparent lg:opacity-100 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none lg:pointer-events-auto'
          }`}
        >
          <a href="#" className="block lg:inline-block py-2 px-4 hover:text-red-500 transition duration-300">Home</a>
          <a href="#" className="block lg:inline-block py-2 px-4 hover:text-red-500 transition duration-300">Car Tyres</a>
          <a href="#" className="block lg:inline-block py-2 px-4 hover:text-red-500 transition duration-300">Bike Tyres</a>
          <a href="#" className="block lg:inline-block py-2 px-4 hover:text-red-500 transition duration-300">Tyre Pressure</a>
          <a href="#" className="block lg:inline-block py-2 px-4 hover:text-red-500 transition duration-300">Commercial Tyres</a>
          <a href="#" className="block lg:inline-block py-2 px-4 hover:text-red-500 transition duration-300">Accessories</a>
          <a href="#" className="block lg:inline-block py-2 px-4 hover:text-red-500 transition duration-300">More</a>
        </nav>

        {/* Login Button */}
        <div className="hidden lg:flex items-center">
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
