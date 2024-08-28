import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-red-600 text-white flex px-4 py-2 items-center focus:outline-none focus:ring-2 focus:ring-red-500 text-center"
      >
        {title} <IoIosArrowDropdown className='ml-2' />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg">
          <ul className="py-1">
            {options.map((option, index) => (
              <li key={index}>
                <a href="#" className="block px-4 py-2 hover:bg-red-600 z-50">{option}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
