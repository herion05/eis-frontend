import LoginForm from "./LoginForm";
import Image from "next/image";
import EisLogo from "@/public/eis_logo.svg";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="pt-20 max-w-4xl mx-auto flex items-center flex-col gap-6 text-slate-700">
      <Image src={EisLogo} alt="Eis Logo" />
      <div className="bg-white max-w-lg md:min-w-sm p-8 md:p-10 md:pb-9 rounded-xl">
        <div className="flex flex-col mb-5 pb-3 border-b border-gray-600/50">
          <p className="text-lg lg:text-xl xl:text-[22px] font-bold text-slate-800 mb-6 leading-none lg:leading-none">
            Login to your account
          </p>
          <button className="flex gap-2 justify-center px-6 py-2 bg-[#046ED9] text-white rounded-sm cursor-pointer">
            <LogIn />
            <span>Login with Epoka Mail </span>
          </button>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
