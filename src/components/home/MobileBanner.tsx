import Image from "next/image";
import MobileAppImage from "@/assets/mobile-app.jpg";
import MobileAppImageBg from "@/assets/mobile-app-background.jpg";
import appstore from "@/assets/icons/appstore.png";
import googleplay from "@/assets/icons/googleplay.jpg";
import { useEffect, useState, useRef } from "react";

const MobileBanner = () => {
  const [offsetY, setOffsetY] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          setOffsetY(100);
        } else {
          setOffsetY(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div
        className={
          "flex flex-col md:flex-row px-20 py-10 gap-5 mb-10 bg-no-repeat bg-cover justify-center md:bg-center w-[110%] " +
          `ease-in duration-1000`
        }
        style={{
          backgroundImage: `url(` + MobileAppImageBg.src + `)`,
          backgroundSize: "110%",
          backgroundPosition: `-${offsetY}px center`,
        }}
      >
        <div className="md:px-20 transform translate-y-20 order-2 md:order-1">
          <Image
            src={MobileAppImage}
            alt="mobile-app-image"
            className="h-128 w-64 rounded-2xl shadow-2xl"
          />
        </div>
        <div className="text-white font-bold space-y-8 flex flex-col justify-center md:order-2">
          <h3 className="text-2xl">Save Time & Money</h3>
          <p className="text-7xl">
            Shop With Us <br /> on the Go
          </p>
          <p className="text-xl">
            Your weekly shopping routine, at your <br /> door in just a click
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Image src={appstore} alt="appstore icon" className="h-15 w-40" />
            <Image
              src={googleplay}
              alt="googleplay icon"
              className="h-15 w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileBanner;
