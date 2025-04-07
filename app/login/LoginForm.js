"use client";

import { login } from "@/lib/auth";
import { useState, useActionState } from "react";
import { ChevronDown, UserRound, LockKeyhole } from "lucide-react";

export default function LoginForm() {
  const [isOpened, setIsOpened] = useState(false);
  const [stateMessage, formAction, isPending] = useActionState(login, { message: "" });

  return (
    <>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="flex items-center justify-between gap-1 pr-0.5 cursor-pointer">
        <p className="text-[14px] md:text-[15px] lg:text-[17px] font-semibold">Or Login with</p>
        <ChevronDown className={`transition-transform duration-200 ${isOpened ? "rotate-180" : "rotate-0"}`} />
      </div>
      <div className={`grid transition-all duration-200 ${isOpened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <form action={formAction} className="pt-4 px-1 flex flex-col gap-3 overflow-hidden">
          <div>
            <label htmlFor="email" className="block text-[13px] md:text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <UserRound className="absolute top-1/2 left-2 -translate-y-1/2 z-1" size="22" />
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-2 pl-10 text-[14px] md:text-[15px] lg:text-[17px] leading-none border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 relative z-10"
                placeholder="your@email.com"
                disabled={isPending}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-[13px] md:text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <LockKeyhole className="absolute top-1/2 left-2 -translate-y-1/2" size="22" />
              <input
                id="password"
                type="password"
                name="password"
                required
                className="w-full p-2 pl-10 text-[14px] md:text-[15px] lg:text-[17px] leading-none border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 relative z-10  "
                placeholder="••••••••"
                disabled={isPending}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="py-1">
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-2 px-4 bg-epoka-blue-600 hover:bg-epoka-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 cursor-pointer">
              {isPending ? "Logging in..." : "Log In"}
            </button>
          </div>
          {stateMessage.error && (
            <div className="mt-4 px-3 py-2.5 bg-red-100 border border-red-400 text-red-700 rounded">
              {stateMessage.message}
            </div>
          )}
        </form>
      </div>
    </>
  );
}
