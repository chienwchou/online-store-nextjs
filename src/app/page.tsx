"use client";
import Footer from "@/components/common/Footer";
import GroceryDeals from "@/components/home/GroceryDeals";
import MobileBanner from "@/components/home/MobileBanner";
import PromotionalBanners from "@/components/home/PromoBanner";
import {
  Search,
  User,
  Heart,
  MapPin,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import freshBagel from "@/assets/fresh-bagel.png";
import freshBread from "@/assets/flat-bread.png";
import Image from "next/image";
import SubscriptionBanner from "@/components/home/SubscriptionBanner";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Top navigation bar */}
        <div className="bg-red-900 text-white p-4 flex justify-between items-center flex-wrap">
          <div className="flex space-x-6 text-sm md:text-base">
            <span className="cursor-pointer">About Us</span>
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
          <h1 className="text-2xl md:text-3xl font-bold">FreshMart.</h1>

          <div className="hidden md:block relative w-1/3 mx-4">
            <input
              type="text"
              placeholder="Search a product e.g. milk"
              className="w-full py-1 md:py-2 px-4 rounded-full text-black placeholder-white"
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

        {/* Hero banner */}
        <div className="bg-amber-50 py-6 md:py-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/3 flex justify-center items-center md:justify-end px-10">
            <Image
              src={freshBread}
              alt="Fresh flatbread"
              className="rounded w-full max-w-md md:max-w-none"
            />
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <p className="text-xl md:text-2xl mb-2 md:mb-4">
              Easy, Fresh & Convenient
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">
              Stock Up on
              <br />
              Daily Essentials
            </h2>
            <h3 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">
              Save Big on Your
              <br />
              Favorite Brands
            </h3>
            <button className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold">
              Shop Now
            </button>
          </div>

          <div className="w-full md:w-1/3 flex justify-center items-center md:justify-end">
            <Image
              src={freshBagel}
              alt="Fresh bread and baked goods"
              className="rounded w-full max-w-md md:max-w-none"
            />
          </div>
        </div>
      </div>
      <GroceryDeals />
      <PromotionalBanners />
      <MobileBanner />
      <SubscriptionBanner />
      <Footer />
    </>
  );
}
