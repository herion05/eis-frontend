import HeaderProfileDropdown from "./HeaderProfileDropdown";
import Link from "next/link";
import Image from "next/image";
import EisLogo from "@/public/eis_logo.svg";
import { Bell } from "lucide-react";

// Student only, will add lecturer header later
const Header = ({ type }) => {
  return (
    <header
      className="bg-epoka-blue-800 text-white flex items-center justify-between p-4 lg:px-5 xl:px-6 sticky top-0 z-10"
      id="header">
      <div>
        <Link href="/">
          <Image src={EisLogo} alt="Eis Logo" height={24}></Image>
        </Link>
      </div>

      <div className="sm:flex sm:items-center sm:gap-5">
        <button className="max-sm:hidden flex gap-1 items-center cursor-pointer">
          <Bell />
          <span>Notification</span>
        </button>

        <div>
          <HeaderProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
