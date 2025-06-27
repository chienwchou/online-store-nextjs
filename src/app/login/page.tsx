"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { useApp } from "@/contexts/AppContext";

export default function UserProfile() {
  const { user, theme, setUser, setTheme, logout } = useApp();

  const handleLogin = () => {
    setUser({ name: "John Doe", email: "john@example.com" });
  };

  return (
    <>
      <Header />
      <div
        className={`p-4 md:min-h-[1000px] flex flex-col items-center justify-center`}
      >
        <div className="max-w-7xl flex flex-col">
          <h1 className="text-4xl mb-8">Market Sign In</h1>
          <form>
            <div className="form-control flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Email Address
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="h-10 w-full"
              />
            </div>
          </form>
          {user ? (
            <div>
              <p>Welcome, {user.name}!</p>
              <p>Email: {user.email}</p>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Login
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
