import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

function DashboardCard({ title, subtitle, Icon, bgColor, href }) {
  return (
    <Link
      href={href}
      className={`flex flex-col justify-between p-4 xl:px-6 h-38 md:h-40 lg:h-42 shadow-md text-white rounded-lg ${bgColor}`}>
      <div className="flex justify-between items-start mb-auto">
        <Icon className="text-white size-8 xl:size-10" />
        <div className="flex flex-col gap-0.5">
          <p className="text-xl lg:text-2xl xl:text-[26px] leading-none lg:leading-none font-medium text-right flex-1">
            {title}
          </p>
          {subtitle && <p className="ml-auto text-neutral-200/85">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-auto pt-4 flex justify-between items-center text-sm lg:text-base leading-none lg:leading-none">
        <span>VIEW MORE</span>
        <CircleArrowRight size={18} className="text-white stroke-2" />
      </div>
    </Link>
  );
}

export default DashboardCard;
