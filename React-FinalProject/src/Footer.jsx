import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold tracking-wide">MD's Movies</h1>
            <p className="mt-2 text-sm">Watch the latest movies and TV shows anywhere, anytime!</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
          <ul className="flex space-x-8 mb-4 md:mb-0">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Movies</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">TV Shows</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">New Releases</a></li>
          </ul>

          <div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full transition">
              Download the App
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} MD's Movies. All rights reserved.</p>
          <ul className="flex justify-center mt-4 space-x-6">
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
