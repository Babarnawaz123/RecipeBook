import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout, getUser } from "../utils/auth";
import React from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const authed = isAuthenticated();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between ">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-xl text-emerald-700 hover:text-emerald-400 transition-colors"
        >
          RecipeBook
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="hover:text-emerald-400 transition-colors text-emerald-700"
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="hover:text-emerald-400 transition-colors text-emerald-700"
          >
            Recipes
          </Link>

          {/* Auth Buttons */}
          {authed ? (
            <>
              <span className="text-sm text-gray-600 hidden sm:block">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
