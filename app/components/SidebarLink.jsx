"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function SidebarLink({ item, isSidebarExpanded }) {
  const [linkExpanded, setLinkExpanded] = useState(false);
  const [linkWidth, setLinkWidth] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setLinkWidth(textRef.current.offsetWidth + 32);
    }
  }, []);

  function handleMouseEnter() {
    if (isSidebarExpanded) return;
    setLinkExpanded(true);
  }

  function handleMouseLeave() {
    if (isSidebarExpanded) return;
    setLinkExpanded(false);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center h-12 hover:bg-[#CAD7E5] transition-all duration-200 cursor-pointer overflow-hidden"
      style={{
        width: isSidebarExpanded ? "100%" : linkExpanded ? `calc(40px + ${linkWidth}px)` : "40px",
      }}>
      <span className="min-w-10 flex justify-center text-gray-700 ml-2">{item.icon}</span>

      <div
        ref={textRef}
        className={`whitespace-nowrap text-gray-700 transition-all duration-300 ml-2 ${
          isSidebarExpanded || linkExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
        <Link href={item.link}>{item.name}</Link>
      </div>
    </div>
  );
}
