"use client";
import Image from "next/image";
import freshBagel from "@/assets/fresh-bagel.png";
import freshBread from "@/assets/flat-bread.png";
import coffeeBag from "@/assets/coffee-bag.png";
import coffeeCup from "@/assets/coffee-cup.png";
import { useEffect, useState } from "react";

interface carouselType {
  backgroundColor: string;
}

export default function HeroCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carousels: carouselType[] = [
    {
      backgroundColor: "bg-amber-50",
    },
    {
      backgroundColor: "bg-amber-700",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((pre) => {
        if (pre == carousels.length - 1) {
          return 0;
        }
        return pre + 1;
      });
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="flex flex-col w-full">
      {/* Hero banner */}
      <div
        className={
          "py-6 md:py-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center transition ease-in " +
          carousels[carouselIndex].backgroundColor
        }
      >
        <div className="w-full md:w-1/3 flex justify-center items-center md:justify-end px-10 relative">
          <Image
            src={freshBread}
            alt="Fresh flatbread"
            className={
              "absolute rounded w-full max-w-md md:max-w-none h-96 transition ease-in " +
              (carouselIndex == 0 ? "opacity-100" : "opacity-0")
            }
          />
          <Image
            src={coffeeCup}
            alt="Coffee Cup"
            className={
              "absolute rounded w-full max-w-md md:max-w-none h-96 transition ease-in " +
              (carouselIndex == 1 ? "opacity-100" : "opacity-0")
            }
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

        <div className="w-full md:w-1/3 flex justify-center items-center md:justify-end relative">
          <Image
            src={freshBagel}
            alt="Fresh bread and baked goods"
            className={
              "absolute rounded w-full max-w-md md:max-w-none h-96 transition ease-in " +
              (carouselIndex == 0 ? "opacity-100" : "opacity-0")
            }
          />
          <Image
            src={coffeeBag}
            alt="Coffee Bag"
            className={
              "absolute rounded w-1/2 left-0 max-w-md md:max-w-none h-96 transition ease-in " +
              (carouselIndex == 1 ? "opacity-100" : "opacity-0")
            }
          />
        </div>
      </div>
    </section>
  );
}
