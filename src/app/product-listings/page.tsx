import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import GroceryFilter from "@/components/product-listings/ProductFilter";
import ProductListingsSection from "@/components/product-listings/ProductListingsSection";

export default function ProductListings() {
  return (
    <>
      <Header />
      <section className="flex flex-row">
        <div id="product-listing-filter" className="w-1/4">
          <GroceryFilter />
        </div>
        <div id="product-listing-section" className="w-3/4">
          <ProductListingsSection />
        </div>
      </section>
      <Footer />
    </>
  );
}
