"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { useApp } from "@/contexts/AppContext";
import Link from "next/link";
import { useState } from "react";

// Type definitions
interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface User {
  name: string;
  email: string;
}

export default function UserProfile() {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState<RegisterData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { user, theme, setUser, setTheme, logout, createUser } = useApp();

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof RegisterData
  ): void => {
    const value = e.target.value;
    const newFormData = { ...registerData, [field]: value };
    setRegisterData(newFormData);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof RegisterData
  ): void => {
    const value = e.target.value;
    const newFormData = { ...registerData, [field]: value };
    setRegisterData(newFormData);
    if (
      field === "confirmPassword" ||
      (field === "password" && newFormData.confirmPassword)
    ) {
      setPasswordMatch(newFormData.password === newFormData.confirmPassword);
    }
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (true) {
      setUser({ name: "John Doe", email: "john@example.com" });
    }
  };

  const handleRegistration = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    event.preventDefault();
    createUser(registerData);
  };

  const handleLoginFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof LoginData
  ): void => {
    const value = e.target.value;
    setLoginData({ ...loginData, [field]: value });
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
                className={`flex-1 py-2 px-4 text-xl font-semibold transition-colors duration-200 ${
                  isLoginForm
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                LOGIN
              </button>
              <div className="w-0.5 bg-black"></div>
              <button
                onClick={() => setIsLoginForm(false)}
                className={`flex-1 py-2 px-4 text-xl font-semibold transition-colors duration-200 ${
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
                onSubmit={handleLogin}
                className="gap-y-6 flex flex-col w-full mb-2"
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
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={(e) => handleLoginFieldChange(e, "email")}
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
                    value={loginData.password}
                    onChange={(e) => handleLoginFieldChange(e, "password")}
                    className="h-10 w-full bg-blue-100 border border-blue-300 rounded-md appearance-none p-4"
                  />
                </div>
                <button
                  type="submit"
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
                      name="firstName"
                      value={registerData.firstName}
                      required
                      onChange={(event) => {
                        handleFieldChange(event, "firstName");
                      }}
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
                      name="lastName"
                      value={registerData.lastName}
                      required
                      onChange={(event) => {
                        handleFieldChange(event, "lastName");
                      }}
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
                    type="email"
                    name="email"
                    value={registerData.email}
                    required
                    onChange={(event) => {
                      handleFieldChange(event, "email");
                    }}
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
                    value={registerData.password}
                    required
                    onChange={(event) => {
                      handlePasswordChange(event, "password");
                    }}
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
                    value={registerData.confirmPassword}
                    required
                    onChange={(event) => {
                      handlePasswordChange(event, "confirmPassword");
                    }}
                    className="h-10 w-full bg-blue-100 border border-blue-300 rounded-md appearance-none p-4"
                  />
                </div>
                {registerData.confirmPassword.length > 0 &&
                  registerData.confirmPassword &&
                  !passwordMatch && (
                    <p className="mt-1 text-sm text-red-600">
                      Passwords do not match
                    </p>
                  )}
                {registerData.confirmPassword.length > 0 &&
                  registerData.confirmPassword &&
                  passwordMatch &&
                  registerData.password && (
                    <p className="mt-1 text-sm text-green-600">
                      Passwords matched!
                    </p>
                  )}
                <button
                  onClick={handleRegistration}
                  disabled={!passwordMatch}
                  className={
                    "text-white px-4 py-2 rounded mr-2 w-full h-12 " +
                    (passwordMatch ? "bg-blue-500" : "bg-gray-500")
                  }
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
