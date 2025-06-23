"use client";
import Footer from "@/components/common/Footer";
import GroceryDeals from "@/components/home/GroceryDeals";
import MobileBanner from "@/components/home/MobileBanner";
import PromotionalBanners from "@/components/home/PromoBanner";
import SubscriptionBanner from "@/components/home/SubscriptionBanner";
import Header from "@/components/common/Header";
import HeroCarousel from "@/components/home/HeroCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <GroceryDeals />
      <PromotionalBanners />
      <MobileBanner />
      <SubscriptionBanner />
      <Footer />
    </>
  );
}
