"use client";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  // States to manage hover for each dropdown
  const [isUseCasesOpen, setUseCasesOpen] = useState(false);
  const [isToolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="bg-blue-500 flex justify-between items-center p-4">
      <div className="flex items-center">
        {/* Logo could be an SVG or image tag */}
        <a href="/" className="text-white text-xl font-bold mr-10">
          GravityWrite
        </a>
      </div>
      <nav className="">
        <ul className="flex space-x-4">
          {/* Example of dropdown list for 'Use Cases' */}
          <li
            className="relative"
            onMouseEnter={() => setUseCasesOpen(true)}
            onMouseLeave={() => setUseCasesOpen(false)}
          >
            <button className="inline-flex items-center text-white">
              Use Cases <span className="ml-1">▼</span>
            </button>
            {isUseCasesOpen && (
              <ul className="absolute left-0 w-40  bg-white shadow-lg">
                <li>
                  <a
                    href="/case1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Case 1
                  </a>
                </li>
                {/* More list items */}
              </ul>
            )}
          </li>
          {/* Other menu items */}
          <li>
            <a href="/features" className="text-white">
              Features
            </a>
          </li>
          <li>
            <a href="/pricing" className="text-white">
              Pricing
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button className="inline-flex items-center text-white">
              Tools <span className="ml-1">▼</span>
            </button>
            {isToolsOpen && (
              <ul className="absolute left-0 w-40  bg-white shadow-lg">
                <li>
                  <a
                    href="/tool1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Tool 1
                  </a>
                </li>
                {/* More list items */}
              </ul>
            )}
          </li>
          <li>
            <a href="/blog" className="text-white">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <a href="/login" className="text-white mr-4">
          Log in
        </a>
        <a href="/signup" className="bg-green-600 text-white px-4 py-2 rounded">
          Start for Free
        </a>
      </div>
    </header>
  );
};

export default Header;
