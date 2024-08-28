import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../../images/TP-logo.png";

import Button from "../Button";
import NavDropdown from "./NavDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const options2 = [
    "MRF Tyres",
    "CEAT Tyres",
    "Goodyear Tyres",
    "APOLLO Tyres",
    "BridgeStone Tyres",
    "JK Tyres",
    "Michelin Tyres",
    "All Car Tyres",
  ];
  const options3 = [
    "MRF Tyres",
    "CEAT Tyres",
    "APOLLO Tyres",
    "BridgeStone Tyres",
    "JK Tyres",
    "Michelin Tyres",
    "Pirelli Tyres",
    "All Bike Tyres",
  ];
  const options4 = ["All Commercial Tyres"];
  const options1 = ["Tyre Pressure"];
  const options5 = ["Accessories", "Batteries", "Alloys Wheels"];
  const options6 = [
    "Cashback Offers",
    "Find Tyre Dealers",
    "Compare Tyres",
    "Are You A Tyre Dealer",
    "Wheel Balancing",
    "Wheel Alignment",
  ];

  return (
    <header className="bg-black text-white bg-opacity-70 z-10">
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
          className={`lg:flex lg:items-center cursor-pointer  lg:space-x-6 absolute lg:static inset-x-0 top-16 z-10 bg-black bg-opacity-90 lg:bg-transparent lg:opacity-100 transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-100 flex flex-col"
              : "opacity-0 pointer-events-none lg:pointer-events-auto"
          }`}
        >
          <NavDropdown title="Car Tyres" options={options2} />
          <NavDropdown title="Bike Tyres" options={options3} />
          <NavDropdown title="Tyre Pressure" options={options1} />
          <NavDropdown title="Commercial Tyres" options={options4} />
          <NavDropdown title="Accessories" options={options5} />
          <NavDropdown title="More" options={options6} />
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
