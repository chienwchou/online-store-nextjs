"use client";

import { useApp } from "@/contexts/AppContext";

export default function UserProfile() {
  const { user, theme, setUser, setTheme, logout } = useApp();

  const handleLogin = () => {
    setUser({ name: "John Doe", email: "john@example.com" });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`p-4 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2>User Profile</h2>

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

      <button
        onClick={toggleTheme}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Toggle Theme ({theme})
      </button>
    </div>
  );
}
