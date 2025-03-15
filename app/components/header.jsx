import { AlertTriangle, Mail, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white flex items-center justify-between px-1 py-2">
      <div className="flex items-center px-2">
        <button className="mr-2">
          <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>
        </button>
        <h1 className="text-[16px] tracking-wide mr-1"> 
          <span className="text-gray-100">EPOKA</span>
        </h1>
        <h1 className="text-[16px] font-semibold tracking-wide">
          <span className="text-white">INTERACTIVE SYSTEM</span>
        </h1>
      </div>

      <div className="flex items-center space-x-3"> 
        <div className="relative">
          <AlertTriangle size={25} fill="white" stroke="rgb(29, 78, 216)" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
            •
          </span>
        </div>
        <div className="relative">
          <Mail size={26} fill="white" stroke="rgb(29, 78, 216)" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
            •
          </span>
        </div>

        <div className="flex items-center space-x-0.5">
          <div className="flex items-center border border-gray-300 bg-white text-black px-2 py-1">
            <input
              type="text"
              className="w-32 outline-none text-sm"
              placeholder="Search..."
            />
          </div>
          <button className="text-white px-2 py-1">
            <ChevronDown size={18} className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
