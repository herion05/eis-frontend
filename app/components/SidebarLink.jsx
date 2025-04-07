"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function SidebarLink({ item, isSidebarExpanded }) {
  const [linkExpanded, setLinkExpanded] = useState(false);
  const [textWidth, setTextWidth] = useState(0);
  const linkRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    function handleBiggerViewportAnimation() {
      if (textRef.current) {
        setTextWidth(textRef.current.offsetWidth + 32);
      }
      if (linkRef.current) {
        linkRef.current.style.width = isSidebarExpanded
          ? "100%"
          : linkExpanded
          ? `calc(40px + ${textWidth}px)`
          : "40px";
      }
    }

    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
      linkRef.current.style.width = "auto";
    } else handleBiggerViewportAnimation();
  }, [isSidebarExpanded, linkExpanded]);

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
      className="relative flex items-center h-12 hover:bg-epoka-blue-100 transition-all duration-200 cursor-pointer overflow-hidden"
      ref={linkRef}>
      <span className="min-w-10 flex justify-center text-gray-700 ml-2">{item.icon}</span>

      <div
        ref={textRef}
        className={`whitespace-nowrap text-gray-700 transition-all duration-200 ml-2 ${
          isSidebarExpanded || linkExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
        <Link href={item.link}>{item.name}</Link>
      </div>
    </div>
  );
}
