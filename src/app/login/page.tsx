"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { useApp } from "@/contexts/AppContext";
import Link from "next/link";
import { useState } from "react";

export default function UserProfile() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const { user, theme, setUser, setTheme, logout } = useApp();

  const handleLogin = () => {
    setUser({ name: "John Doe", email: "john@example.com" });
  };

  return (
    <>
      <Header />
      <div className="bg-red-400 py-20">
        <div
          className={`p-20 max-w-3xl min-h-[700px] flex flex-col items-center mx-auto bg-white`}
        >
          <div className="flex flex-col w-full">
            <h1 className="text-4xl mb-8">Customer Sign In</h1>
            <div className="relative flex bg-gray-200 mb-4 p-2 rounded-md">
              <button
                onClick={() => setIsLoginForm(true)}
                className={`flex-1 py-2 px-4 text-xl font-semibold transition-colors duration-200 border-r-1 ${
                  isLoginForm
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                LOGIN
              </button>
              <button
                onClick={() => setIsLoginForm(false)}
                className={`flex-1 py-2 px-4 text-xl font-semibold transition-colors duration-200 border-l-1 ${
                  !isLoginForm
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                SIGN UP
              </button>
            </div>

            {isLoginForm && (
              <form
                className="gap-y-6 flex flex-col w-full mb-2"
                onSubmit={handleLogin}
              >
                <h2 className="font-semibold text-3xl">
                  Sign in for existing users
                </h2>
                <div className="form-control flex flex-col">
                  <label htmlFor="email" className="font-semibold text-xl mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="h-10 w-full bg-blue-100 border border-blue-300 rounded-md appearance-none p-4"
                  />
                </div>
                <div className="form-control flex flex-col">
                  <label
                    htmlFor="password"
                    className="font-semibold text-xl mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="h-10 w-full bg-blue-100 border border-blue-300 rounded-md appearance-none p-4"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 w-full h-12"
                >
                  LOGIN
                </button>
              </form>
            )}
            {!isLoginForm && (
              <form className="gap-y-6 flex flex-col w-full mb-2">
                <h2 className="font-semibold text-3xl">Create Account</h2>
                <div className="flex gap-5">
                  <div className="w-1/2 form-control flex flex-col">
                    <label
                      htmlFor="first-name"
                      className="font-semibold text-xl mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      name="email"
                      className="h-10 w-full bg-blue-100 border border-blue-300 rounded-md appearance-none p-4"
                    />
                  </div>
                  <div className="w-1/2 form-control flex flex-col">
                    <label
                      htmlFor="last-name"
                      className="font-semibold text-xl mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      name="email"
                      className="h-10 w-full bg-blue-100 border border-blue-300 rounded-md appearance-none p-4"
                    />
                  </div>
                </div>
                <div className="form-control flex flex-col">
                  <label htmlFor="email" className="font-semibold text-xl mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="h-10 w-full bg-blue-100 border border-blue-300 rounded-md appearance-none p-4"
                  />
                </div>
                <div className="form-control flex flex-col">
                  <label
                    htmlFor="password"
                    className="font-semibold text-xl mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="h-10 w-full bg-blue-100 border border-blue-300 rounded-md appearance-none p-4"
                  />
                </div>
                <div className="form-control flex flex-col">
                  <label
                    htmlFor="confirm-password"
                    className="font-semibold text-xl mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    name="confirmPassword"
                    className="h-10 w-full bg-blue-100 border border-blue-300 rounded-md appearance-none p-4"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 w-full h-12"
                >
                  Create account
                </button>
              </form>
            )}
            <hr className="my-2 text-gray-400" />
            <Link href="/forgot-password" className="text-blue-500">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
