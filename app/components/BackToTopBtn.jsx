"use client";
import { ChevronUp } from "lucide-react";

export default function BackToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={() => scrollToTop()}
      className="text-sm lg:text-[15px] flex items-center gap-2 p-1 cursor-pointer text-gray-700 hover:bg-epoka-blue-100">
      <span>Back to top</span>
      <ChevronUp />
    </button>
  );
}
