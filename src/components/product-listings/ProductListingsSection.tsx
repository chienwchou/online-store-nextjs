import ProductGrid from "../common/ProductGrid";
import milk from "@/assets/products/milk.png";

export default function ProductListingsSection() {
  return (
    <>
      <section>
        <div className="p-10 grid grid-cols-4 gap-5">
          <ProductGrid
            id="1"
            image={milk}
            name="milk"
            originalPrice={0.11}
            price={0.5}
          />
          <ProductGrid
            id="1"
            image={milk}
            name="milk"
            originalPrice={0.11}
            price={0.5}
          />
          <ProductGrid
            id="1"
            image={milk}
            name="milk"
            originalPrice={0.11}
            price={0.5}
          />
          <ProductGrid
            id="1"
            image={milk}
            name="milk"
            originalPrice={0.11}
            price={0.5}
          />
          <ProductGrid
            id="1"
            image={milk}
            name="milk"
            originalPrice={0.11}
            price={0.5}
          />
        </div>
      </section>
    </>
  );
}
