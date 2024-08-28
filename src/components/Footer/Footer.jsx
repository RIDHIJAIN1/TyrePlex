import React from "react";
import logo from "../../../images/TP-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black bg-opacity-70 text-white p-10">
        <div className="container mx-auto flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src={logo} alt="Logo" className=" mb-4" />

            <div className="flex  space-x-5  sm:space-x-2 mb-6">
              <a
                href="#"
                className="text-xl sm:text-sm text-gray-400 hover:text-white transition border-red-500 border-2 p-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-xl sm:text-sm text-gray-400 hover:text-white transition  border-red-500 border-2 p-2"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-xl sm:text-sm text-gray-400 hover:text-white transition  border-red-500 border-2 p-2"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-xl sm:text-sm text-gray-400 hover:text-white transition  border-red-500 border-2 p-2"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-youtube-square"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-google-plus-square"></i>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">MY ACCOUNT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Sign in
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Create account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Are you a Dealer?
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-400">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shipping & Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms Of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-red-500 my-6" />

        {/* Copyright Notice */}
        <p className="text-sm text-white text-center hover:text-gray-400 cursor-pointer">
          ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
