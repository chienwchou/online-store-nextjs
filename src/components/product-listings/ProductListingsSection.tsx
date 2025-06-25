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
      <section className="md:min-h-[1000px]">
        <div className="p-10 grid grid-cols-4 gap-5">
          {products
            .filter((product) => product.sale)
            .filter((product) => {
              //filter by categories
              if (
                productListingState.selectedCategories.length > 0 &&
                productListingState.selectedCategories.includes(
                  product.categoryId
                )
              ) {
                return true;
              }
              if (productListingState.selectedCategories.length == 0) {
                return true;
              }
              return false;
            })
            .filter((product) => {
              //filter by price
              if (
                productListingState.priceRange.length > 0 &&
                product.price >= productListingState.priceRange[0] &&
                product.price <= productListingState.priceRange[1]
              ) {
                return true;
              }
              return false;
            })
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
