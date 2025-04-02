"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, User, Expand, Key, LogOut } from "lucide-react";

export default function HeaderProfileDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(dropdownRef.current);
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1 bg-transparent cursor-pointer">
        <div className="w-6 h-8 bg-gray-300 ml-2"></div>
        <span className="text-white text-sm font-medium">Student Name</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-100 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div
        className={`absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md overflow-hidden transition-all duration-100 ${
          dropdownOpen
            ? "translate-y-0 translate-x-0 opacity-100 pointer-events-auto visible"
            : "-translate-y-1.5 translate-x-1 opacity-0 pointer-events-none invisible"
        }`}>
        <ul className="text-sm">
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <User size={16} className="mr-2" /> My Profile
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Expand size={16} className="mr-2" /> Full Screen
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Key size={16} className="mr-2" /> Switch Role
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <LogOut size={16} className="mr-2" /> Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}
