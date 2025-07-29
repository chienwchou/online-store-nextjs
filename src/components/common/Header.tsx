"use client";
import React, { useState } from "react";
import {
  Search,
  User,
  Heart,
  MapPin,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import ModalDemo from "./Modal";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="bg-red-600 text-black">
      <div className="flex flex-col w-full">
        {/* Top navigation bar */}
        <div className="bg-red-900 text-white p-4 flex justify-between items-center flex-wrap">
          <div className="flex space-x-6 text-sm md:text-base">
            <Link href="/about-us" className="cursor-pointer">
              About Us
            </Link>
            <span className="cursor-pointer">Customer Support</span>
          </div>
          <div className="hidden md:flex items-center text-sm">
            <span>Shop on the go, download our app.</span>
            <span className="ml-2 underline cursor-pointer">Details</span>
          </div>
          <div className="flex items-center text-sm md:text-base">
            <User className="mr-2" size={18} />
            <span className="cursor-pointer">Log in</span>
          </div>
        </div>

        {/* Main header with search */}
        <div className="bg-red-600 text-white py-3 px-4 md:py-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-bold">
            FreshMart.
          </Link>

          <div className="hidden md:block relative w-1/3 mx-4">
            <input
              type="text"
              placeholder="Search a product e.g. milk"
              className="w-full py-1 md:py-2 px-4 rounded-full text-black placeholder-white outline-none"
            />
            <div className="absolute right-0 top-0 bg-gray-200 h-full rounded-r-full flex items-center px-4">
              <Search size={20} className="text-gray-600" />
            </div>
          </div>

          <div className="flex space-x-3 md:space-x-6 items-center">
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <MapPin size={22} className="hidden sm:block" />
            <Heart size={22} />
            <div className="flex items-center">
              <ShoppingCart size={22} />
              <span className="bg-white text-red-600 rounded-full h-5 w-5 md:h-6 md:w-6 flex items-center justify-center ml-1 text-xs md:text-sm">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden relative px-4 py-2 bg-red-600">
          <input
            type="text"
            placeholder="Search a product e.g. milk"
            className="w-full py-1 px-4 rounded-full text-black"
          />
          <div className="absolute right-4 top-2 bg-gray-200 h-8 rounded-r-full flex items-center px-3">
            <Search size={18} className="text-gray-600" />
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b py-2">
            <div className="flex flex-col px-4">
              <span className="py-2 border-b">Deals</span>
              <span className="py-2 border-b">Food</span>
              <span className="py-2 border-b">Beverages</span>
              <span className="py-2 border-b">Household</span>
              <span className="py-2 border-b">Personal Care</span>
              <span className="py-2 text-red-600">My Orders</span>
            </div>
          </div>
        )}

        {/* Categories navbar - desktop */}
        <div className="hidden md:flex bg-white py-3 border-b justify-center space-x-8 lg:space-x-12">
          <span className="cursor-pointer">Deals</span>
          <span className="cursor-pointer">Food</span>
          <span className="cursor-pointer">Beverages</span>
          <span className="cursor-pointer">Household</span>
          <span className="cursor-pointer">Personal Care</span>
          <span className="cursor-pointer text-red-600">My Orders</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
