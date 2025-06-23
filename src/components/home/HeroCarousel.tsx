import Image from "next/image";
import freshBagel from "@/assets/fresh-bagel.png";
import freshBread from "@/assets/flat-bread.png";

export default function HeroCarousel() {
  return (
    <section className="flex flex-col w-full">
      {/* Hero banner */}
      <div className="bg-amber-50 py-6 md:py-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/3 flex justify-center items-center md:justify-end px-10">
          <Image
            src={freshBread}
            alt="Fresh flatbread"
            className="rounded w-full max-w-md md:max-w-none"
          />
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <p className="text-xl md:text-2xl mb-2 md:mb-4">
            Easy, Fresh & Convenient
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">
            Stock Up on
            <br />
            Daily Essentials
          </h2>
          <h3 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">
            Save Big on Your
            <br />
            Favorite Brands
          </h3>
          <button className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold">
            Shop Now
          </button>
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-center md:justify-end">
          <Image
            src={freshBagel}
            alt="Fresh bread and baked goods"
            className="rounded w-full max-w-md md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
