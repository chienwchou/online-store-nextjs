"use client";
import { Minus, Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface productType {
  id: string;
  image: StaticImageData;
  name: string;
  originalPrice: number;
  price: number;
}

export default function ProductGrid({
  id,
  image,
  name,
  originalPrice,
  price,
}: productType) {
  const [quantities, setQuantities] = useState(0);

  const incrementQuantity = (): void => {
    setQuantities((prev) => prev + 1);
  };

  const decrementQuantity = (): void => {
    if (quantities > 1) {
      setQuantities((prev) => prev - 1);
    }
  };

  return (
    <div key={id} className="border rounded-md p-4 flex flex-col">
      <div className="relative">
        <div className="bg-red-600 text-white text-sm py-1 px-3 rounded-full absolute top-0 left-0">
          Best Deal
        </div>
        <Image
          src={image}
          alt={name}
          className="mx-auto h-36 object-contain my-6"
        />
      </div>

      <h3 className="font-medium mb-1">{name}</h3>

      <div className="flex items-center mb-4">
        {originalPrice && (
          <span className="text-red-600 line-through mr-2">
            ${originalPrice.toFixed(2)}
          </span>
        )}
        <span className="text-red-600 font-bold">${price.toFixed(2)}</span>
      </div>

      <div className="mt-auto">
        <div className="flex border rounded-md mb-3">
          <button className="px-3 py-2" onClick={() => decrementQuantity()}>
            <Minus className="w-4 h-4" />
          </button>
          <div className="flex-1 text-center py-2">{quantities}</div>
          <button className="px-3 py-2" onClick={() => incrementQuantity()}>
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <button className="bg-black text-white rounded-full w-full py-2 flex items-center justify-center">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
