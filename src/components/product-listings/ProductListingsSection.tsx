import { FilterState } from "@/models/productListings";
import ProductGrid from "../common/ProductGrid";
import milk from "@/assets/products/milk.png";
import products from "@/products.json";

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
          {products
            .filter((product) => product.sale)
            .map((product, index) => {
              return (
                <ProductGrid
                  key={"deal" + index}
                  id={"deal" + index}
                  image={milk}
                  name={product.name}
                  originalPrice={product.originalPrice}
                  price={product.price}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default ProductListingsSection;
