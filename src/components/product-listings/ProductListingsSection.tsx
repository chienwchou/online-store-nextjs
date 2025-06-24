import { FilterState } from "@/models/productListings";
import ProductGrid from "../common/ProductGrid";
import milk from "@/assets/products/milk.png";
import { useState } from "react";

interface ProductListingSectionProps {
  productListingState: FilterState;
}

const ProductListingsSection: React.FC<ProductListingSectionProps> = ({
  productListingState,
}) => {
  return (
    <>
      {JSON.stringify(productListingState)}
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
};

export default ProductListingsSection;
