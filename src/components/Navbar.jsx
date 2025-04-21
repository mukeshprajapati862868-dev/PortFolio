import React from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom

const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl hover:text-red-500">
            Mukesh Prajapati
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
              <li><Link to="/skills" className="hover:text-yellow-400">Skills</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
              <li><Link to="/project" className="hover:text-yellow-400">Project</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
