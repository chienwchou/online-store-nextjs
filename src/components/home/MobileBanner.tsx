import Image from "next/image";
import MobileAppImage from '@/assets/mobile-app.jpg';
import MobileAppImageBg from '@/assets/mobile-app-background.jpg';
import appstore from '@/assets/icons/appstore.png';
import googleplay from '@/assets/icons/googleplay.jpg';

const MobileBanner = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row px-20 py-10 gap-5 mb-10 bg-no-repeat bg-cover bg-[80%] md:bg-center
"
            style={{
                backgroundImage: `url(`+MobileAppImageBg.src+`)`,
            }}>
                <div className="md:px-20 transform translate-y-20 order-2 md:order-1">
                    <Image src={MobileAppImage} alt="mobile-app-image" className="h-128 w-64 rounded-2xl shadow-2xl" />
                </div>
                <div className="text-white font-bold space-y-8 flex flex-col justify-center md:order-2">
                    <h3 className="text-2xl">Save Time & Money</h3>
                    <p className="text-7xl">Shop With Us <br /> on the Go</p>
                    <p className="text-xl">Your weekly shopping routine, at your <br/> door in just a click</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Image src={appstore} alt="appstore icon" className="h-15 w-40"/>
                        <Image src={googleplay} alt="googleplay icon" className="h-15 w-40"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileBanner;