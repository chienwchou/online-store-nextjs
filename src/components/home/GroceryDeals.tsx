import { JSX, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
  Headphones,
  Smartphone,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import bananas from "@/assets/products/bananas.png";
import blackRice from "@/assets/products/black-rice.png";
import cucumber from "@/assets/products/cucumber.png";
import milk from "@/assets/products/milk.png";
import orangeJuice from "@/assets/products/orange-juice.png";
import tomatoes from "@/assets/products/tomatoes.png";

// Define TypeScript interfaces
interface Product {
  id: string;
  name: string;
  image: StaticImageData;
  originalPrice: number | null;
  price: number;
}

interface QuantityState {
  [key: string]: number;
}

export default function GroceryDeals(): JSX.Element {
  const products: Product[] = [
    {
      id: "bananas",
      name: "Bananas",
      image: bananas,
      originalPrice: null,
      price: 2.99,
    },
    {
      id: "black-rice",
      name: "Black Rice",
      image: blackRice,
      originalPrice: null,
      price: 3.99,
    },
    {
      id: "cucumber",
      name: "Cucumber 1lb",
      image: cucumber,
      originalPrice: 4.99,
      price: 4.49,
    },
    {
      id: "milk",
      name: "Milk",
      image: milk,
      originalPrice: 2.99,
      price: 2.69,
    },
    {
      id: "orange-juice",
      name: "Orange Juice",
      image: orangeJuice,
      originalPrice: 4.49,
      price: 4.04,
    },
    {
      id: "tomatoes",
      name: "Tomatoes",
      image: tomatoes,
      originalPrice: 4.49,
      price: 4.04,
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Initialize quantities for all products
  const initialQuantities = products.reduce((acc, product) => {
    acc[product.id] = 1;
    return acc;
  }, {} as QuantityState);

  const [quantities, setQuantities] =
    useState<QuantityState>(initialQuantities);

  const incrementQuantity = (item: string): void => {
    setQuantities((prev) => ({ ...prev, [item]: prev[item] + 1 }));
  };

  const decrementQuantity = (item: string): void => {
    if (quantities[item] > 1) {
      setQuantities((prev) => ({ ...prev, [item]: prev[item] - 1 }));
    }
  };

  const scrollLeft = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Scroll by card width + gap
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Scroll by card width + gap
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mx-auto px-20 py-8">
      {/* Service Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 border-b pb-6 mb-8 mx-auto">
        <div className="flex items-center gap-3">
          <div className="text-red-600">
            <Truck className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Free Delivery</h3>
            <p className="text-sm">To Your Door</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-red-600">
            <ShoppingCart className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Local Pickup</h3>
            <p className="text-sm">
              Check Out <span className="underline">Locations</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-red-600">
            <Headphones className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Available for You</h3>
            <p className="text-sm">
              <span className="underline">Online Support</span> 24/7
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-red-600">
            <Smartphone className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Order on the Go</h3>
            <p className="text-sm">
              <span className="underline">Download</span> Our App
            </p>
          </div>
        </div>
      </div>

      {/* Best Deals Section */}
      <h2 className="text-3xl font-bold mb-6">Best Deals</h2>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[300px] border rounded-md p-4 flex flex-col"
            >
              <div className="relative">
                <div className="bg-red-600 text-white text-sm py-1 px-3 rounded-full absolute top-0 left-0">
                  Best Deal
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="mx-auto h-36 object-contain my-6"
                />
              </div>

              <h3 className="font-medium mb-1">{product.name}</h3>

              <div className="flex items-center mb-4">
                {product.originalPrice && (
                  <span className="text-red-600 line-through mr-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-red-600 font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <div className="mt-auto">
                <div className="flex border rounded-md mb-3">
                  <button
                    className="px-3 py-2"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="flex-1 text-center py-2">
                    {quantities[product.id]}
                  </div>
                  <button
                    className="px-3 py-2"
                    onClick={() => incrementQuantity(product.id)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button className="bg-black text-white rounded-full w-full py-2 flex items-center justify-center">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Shop All Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-600 text-white rounded-full px-8 py-3 font-medium">
          Shop Best Deals
        </button>
      </div>
    </div>
  );
}
