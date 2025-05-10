import React from "react";
import Link from "next/link";

interface PromoBannerProps {
  title: string;
  subtitle: string;
  discount?: string;
  discountLabel?: string;
  buttonText: string;
  buttonLink: string;
  bgColor: string;
  isLimited?: boolean;
  imageSrc?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  title,
  subtitle,
  discount,
  discountLabel,
  buttonText,
  buttonLink,
  bgColor,
  isLimited = false,
  imageSrc,
}) => {
  return (
    <div className={`relative overflow-hidden rounded-lg p-6 md:p-8 ${bgColor} flex-1`}>
      {isLimited && (
        <div className="absolute right-6 top-16 md:right-12 md:top-8 bg-red-600 text-white rounded-full p-3 text-center flex flex-col justify-center items-center w-16 h-16 md:w-20 md:h-20 rotate-12">
          <p className="text-xs font-bold">Limited</p>
          <p className="text-xs font-bold">supply</p>
        </div>
      )}
      
      <div className="relative z-10 max-w-md">
        <p className="text-sm font-medium mb-1">{subtitle}</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{title}</h2>
        
        {discount && (
          <div className="mt-2 mb-4">
            <span className="text-5xl md:text-7xl font-black">{discount}</span>
            <span className="text-lg md:text-2xl font-bold align-top ml-1">{discountLabel}</span>
          </div>
        )}
        
        <Link href={buttonLink}>
          <span className="inline-block mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors">
            {buttonText}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default function PromotionalBanners() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <PromoBanner
          subtitle="It's Wine O'Clock!"
          title="Great Deals on Selected Wines"
          buttonText="Shop Now"
          buttonLink="/wine-deals"
          bgColor="bg-cyan-100"
          isLimited={true}
        />
        
        <PromoBanner
          subtitle="Deal of the Week"
          title="Cleaning Supplies"
          discount="40%"
          discountLabel="off"
          buttonText="Shop Now"
          buttonLink="/cleaning-supplies"
          bgColor="bg-amber-50"
        />
      </div>
    </div>
  );
}