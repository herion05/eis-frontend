"use client";
import { useState, useRef, useEffect } from "react";
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
  Bell,
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

export default function Sidebar({ type }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [stickyStyleObject, setStickyStyleObject] = useState(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleSidebarResizing() {
      if (!sidebarRef) return;
      const mq = window.matchMedia("(max-width: 768px)");
      if (!mq.matches) return;
      if (!isSidebarExpanded) {
        sidebarRef.current.style.height = "0";
      }

      const fullHeight = sidebarRef.current.scrollHeight;
      if (isSidebarExpanded) {
        sidebarRef.current.style.height = fullHeight + "px";
      }
    }

    handleSidebarResizing();
  }, [isSidebarExpanded]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq) return;

    const header = document.getElementById("header");
    if (header) {
      setStickyStyleObject({ position: "sticky", top: header.offsetHeight });
    }
  }, []);

  return (
    <aside
      className={`max-md:overflow-hidden bg-epoka-blue-50 max-md:w-full shadow-lg transition-all duration-200 ease-in-out flex flex-col ${
        isSidebarExpanded ? "md:w-64" : "md:w-14"
      }`}
      style={stickyStyleObject ? stickyStyleObject : undefined}>
      <div className="max-sm:flex max-sm:items-center max-sm:justify-between max-sm:pr-3">
        <button
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          className=" p-3 self-start flex justify-center focus:outline-none hover:bg-epoka-blue-100 transition-colors cursor-pointer"
          aria-label={isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}>
          <div>
            <Menu size="32" />
          </div>
        </button>

        <button className="sm:hidden flex gap-1 items-center cursor-pointer">
          <Bell />
          <span>Notification</span>
        </button>
      </div>

      <ul className="md:pt-4 transition-all duration-200 ease-in-out" ref={sidebarRef}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <SidebarLink item={item} isSidebarExpanded={isSidebarExpanded} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
