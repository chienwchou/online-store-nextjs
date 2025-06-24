"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import GroceryFilter from "@/components/product-listings/ProductFilter";
import ProductListingsSection from "@/components/product-listings/ProductListingsSection";
import { FilterState } from "@/models/productListings";
import { useState } from "react";

export default function ProductListings() {
  const [filter, setFilter] = useState<FilterState>({
    selectedCategories: [],
    priceRange: [0, 1000],
  });

  const onFilterChange = (event: FilterState) => {
    setFilter(event);
  };

  return (
    <>
      <Header />
      <section className="flex flex-row">
        <div id="product-listing-filter" className="w-1/4">
          <GroceryFilter onFilterChange={onFilterChange} />
        </div>
        <div id="product-listing-section" className="w-3/4">
          <ProductListingsSection productListingState={filter} />
        </div>
      </section>
      <Footer />
    </>
  );
}
