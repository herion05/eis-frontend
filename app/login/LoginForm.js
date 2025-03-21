"use client";

import { login } from "@/lib/auth";
import { redirect } from "next/navigation";
import { useState, useActionState } from "react";

export default function LoginForm() {
  const [isOpened, setIsOpened] = useState(false);

  const handleLoginRedirect = state => {
    if (state.message === "Success") {
      redirect("/dashboard");
    }
    return state;
  };
  const [stateMessage, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const state = await login(formData);
      return handleLoginRedirect(state);
    },
    { message: "" }
  );

  return (
    <>
      <p onClick={() => setIsOpened(!isOpened)} className="font-bold flex items-center">
        Or Login with <span>&#8964;</span>
      </p>
      <div className={`grid transition-all duration-300 ${isOpened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <form action={formAction} className="pt-4 flex flex-col gap-3 overflow-hidden">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              disabled={isPending}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              disabled={isPending}
            />
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

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 cursor-pointer">
              {isPending ? "Logging in..." : "Log In"}
            </button>
          </div>
        </form>
      </div>

      {stateMessage.error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{stateMessage.message}</div>
      )}
    </>
  );
}
