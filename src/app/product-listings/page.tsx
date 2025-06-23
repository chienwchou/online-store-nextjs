import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import GroceryFilter from "@/components/product-listings/ProductFilter";

export default function ProductListings() {
  return (
    <>
      <Header />
      <section>
        <div id="product-listing-filter">
          <GroceryFilter />
        </div>
        <div id="product-listing-section"></div>
      </section>
      <Footer />
    </>
  );
}
