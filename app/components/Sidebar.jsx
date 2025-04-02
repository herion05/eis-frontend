"use client";
import { useState } from "react";
import {
  Menu,
  Home,
  User,
  List,
  CheckSquare,
  FileText,
  Calendar,
  File,
  DollarSign,
  Link,
  Book,
  Code,
} from "lucide-react";
import SidebarLink from "./SidebarLink";

const menuItems = [
  { name: "Home", icon: <Home size={20} />, link: "#" },
  { name: "My Profile", icon: <User size={20} />, link: "#" },
  { name: "Selected Courses", icon: <List size={20} />, link: "#" },
  { name: "Interim Grades", icon: <List size={20} />, link: "#" },
  { name: "Attendance", icon: <CheckSquare size={20} />, link: "#" },
  { name: "Transcript", icon: <FileText size={20} />, link: "#" },
  { name: "Timetable", icon: <Calendar size={20} />, link: "#" },
  { name: "Course Selection", icon: <File size={20} />, link: "#" },
  { name: "Finance", icon: <DollarSign size={20} />, link: "#" },
  { name: "Quick Links", icon: <Link size={20} />, link: "#" },
  { name: "Student Guide", icon: <Book size={20} />, link: "#" },
  { name: "Changelog v.2.2.15", icon: <Code size={20} />, link: "#" },
];

export default function Sidebar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`fixed bg-[#E1E8F0] h-screen shadow-lg transition-all duration-200 ease-in-out ${
          isSidebarExpanded ? "w-64" : "w-14"
        }`}>
        <button
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          className="w-full py-3 flex justify-center focus:outline-none hover:bg-[#CAD7E5] transition-colors cursor-pointer"
          aria-label={isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}>
          <div>
            <Menu size="32" />
          </div>
        </button>

        <ul className="mt-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <SidebarLink item={item} isSidebarExpanded={isSidebarExpanded} />
            </li>
          ))}
        </ul>
      </div>

      <div className={`transition-all duration-300 ${isSidebarExpanded ? "w-64" : "w-14"}`}></div>
    </div>
  );
}
