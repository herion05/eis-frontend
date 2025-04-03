import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function DashboardCard({ title, Icon, bgColor, href }) {
  return (
    <Link href={href} className={`flex flex-col justify-between p-4 h-44 shadow-md text-white rounded-lg ${bgColor}`}>
      <div className="flex justify-between items-center mb-auto">
        <Icon size={48} className="text-white" />
        <h2 className="text-2xl font-bold text-right flex-1">{title}</h2>
      </div>
      <div className="mt-auto border-t border-white w-full pt-4 flex justify-between items-center text-base">
        <span>VIEW MORE</span>
        <ArrowRight size={18} className="text-white stroke-2" />
      </div>
    </Link>
  );
}

export default DashboardCard;
