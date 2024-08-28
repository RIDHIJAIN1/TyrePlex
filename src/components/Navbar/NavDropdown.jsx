import { useState, useRef, useEffect } from "react";

const NavDropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left z-10 lg:z-0"
      ref={dropdownRef}
    >
      <a
        onClick={toggleDropdown}
        className="block lg:inline-block py-2 px-1 hover:text-red-500 transition duration-300"
      >
        {title}
      </a>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 lg:w-56 bg-black text-white rounded-lg shadow-lg z-100">
          <ul className="py-1">
            {options.map((option, index) => (
              <li key={index}>
                <a href="#" className="block px-4 py-2 hover:bg-red-600 z-50">
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
