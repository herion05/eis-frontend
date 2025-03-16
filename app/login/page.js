import LoginForm from "./LoginForm";
import Image from "next/image";
import EisLogo from "@/public/eis_logo.svg";

export default function LoginPage() {
  return (
    <section className="pt-24 max-w-4xl mx-auto flex items-center flex-col gap-6 text-slate-700">
      <Image src={EisLogo} alt="Eis Logo" />
      <div className="bg-white p-8 md:p-10 md:pb-9 rounded-xl">
        <div className="flex flex-col items-center mb-5 pb-3 border-b border-gray-600/50">
          <p className="text-lg lg:text-xl font-bold text-center text-slate-800 mb-6 leading-none">
            Login to your account
          </p>
          <button className="inline-block px-6 py-2 bg-[#046ED9] text-white rounded-sm cursor-pointer">
            Login with Epoka Mail
          </button>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
