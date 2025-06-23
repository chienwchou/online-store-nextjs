"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface GroceryFilterProps {
  onFilterChange?: (filters: FilterState) => void;
  initialCategories?: string[];
  initialPriceRange?: [number, number];
  minPrice?: number;
  maxPrice?: number;
}

interface FilterState {
  selectedCategories: string[];
  priceRange: [number, number];
}

const GroceryFilter: React.FC<GroceryFilterProps> = ({
  onFilterChange,
  initialCategories = [],
  initialPriceRange = [2, 27],
  minPrice = 2,
  maxPrice = 27,
}) => {
  const [categoryExpanded, setCategoryExpanded] = useState<boolean>(true);
  const [priceExpanded, setPriceExpanded] = useState<boolean>(true);
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(initialCategories);
  const [priceRange, setPriceRange] =
    useState<[number, number]>(initialPriceRange);

  const categories: string[] = [
    "Babies",
    "Bakery",
    "Beer",
    "Beverages",
    "Cereals",
    "Cereals & Snacks",
    "Cleaning Supplies",
    "Coffee",
    "Dairy & Eggs",
    "Fish & Seafood",
    "Food",
    "Fresh Finds",
    "Fruit",
    "Home & Kitchen",
    "Meat & Poultry",
    "Pastas & Grains",
    "Personal Hygiene",
    "Soft Drinks",
    "Start Your Cart",
    "Tea",
    "Vegetables",
    "Wine",
  ];

  const handleCategoryChange = (category: string): void => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(newSelectedCategories);

    if (onFilterChange) {
      onFilterChange({
        selectedCategories: newSelectedCategories,
        priceRange,
      });
    }
  };

  const handlePriceChange = (value: string, index: number): void => {
    const newRange: [number, number] = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);

    if (onFilterChange) {
      onFilterChange({
        selectedCategories,
        priceRange: newRange,
      });
    }
  };

  return (
    <div className="w-full bg-white border-r border-gray-200 p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Filter by</h2>

      {/* Category Section */}
      <div className="mb-8">
        <button
          onClick={() => setCategoryExpanded(!categoryExpanded)}
          className="flex items-center justify-between w-full pb-3 border-b border-gray-200"
        >
          <span className="text-base font-medium text-gray-900">Category</span>
          {categoryExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {categoryExpanded && (
          <div className="mt-4 space-y-3 max-h-80 overflow-y-auto">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-1 rounded"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <button
          onClick={() => setPriceExpanded(!priceExpanded)}
          className="flex items-center justify-between w-full pb-3 border-b border-gray-200"
        >
          <span className="text-base font-medium text-gray-900">Price</span>
          {priceExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {priceExpanded && (
          <div className="mt-4">
            <div className="px-3">
              <div className="relative">
                <input
                  type="range"
                  min={minPrice.toString()}
                  max={maxPrice.toString()}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e.target.value, 0)}
                  className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{ zIndex: 1 }}
                />
                <input
                  type="range"
                  min={minPrice.toString()}
                  max={maxPrice.toString()}
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e.target.value, 1)}
                  className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{ zIndex: 2 }}
                />
                <div
                  className="absolute h-2 bg-blue-600 rounded"
                  style={{
                    left: `${
                      ((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100
                    }%`,
                    width: `${
                      ((priceRange[1] - priceRange[0]) /
                        (maxPrice - minPrice)) *
                      100
                    }%`,
                    top: "0px",
                    zIndex: 0,
                  }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Selected Filters Summary */}
      {selectedCategories.length > 0 && (
        <div className="mt-6 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Selected Categories:
          </h4>
          <div className="flex flex-wrap gap-1">
            {selectedCategories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
              >
                {category}
                <button
                  onClick={() => handleCategoryChange(category)}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GroceryFilter;
