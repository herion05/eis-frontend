import HeaderProfileDropdown from "./HeaderProfileDropdown";
import Link from "next/link";
import Image from "next/image";
import EisLogo from "@/public/eis_logo.svg";
import { Bell } from "lucide-react";

// Student only, will add lecturer header later
const Header = () => {
  return (
    <header className="bg-[#034587] text-white flex items-center justify-between px-4 py-3 sticky top-0 z-10">
      <div>
        <Link href="/">
          <Image src={EisLogo} alt="Eis Logo" height={24}></Image>
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <button className="flex gap-1 items-center cursor-pointer">
          <Bell />
          <span>Notification</span>
        </button>

        <HeaderProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
