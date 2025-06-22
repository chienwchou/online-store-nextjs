import subscriptionBg from "@/assets/subscription-bg.png";

const SubscriptionBanner = () => {
  return (
    <section className="mt-20">
      <div
        className="flex flex-col md:flex-row px-40 py-10 gap-5 bg-no-repeat bg-cover justify-center md:bg-center
"
        style={{
          backgroundImage: `url(` + subscriptionBg.src + `)`,
        }}
      >
        <div className="text-white font-bold space-y-4 flex flex-col justify-center md:order-2">
          <h3 className="text-2xl">Subscribe & Save</h3>
          <div className="flex flex-row gap-5">
            <p className="text-7xl">20%</p>
            <p className="text-xl">off</p>
          </div>
          <p className="text-2xl">Your Next Order</p>
          <div className="subscription-form-container flex flex-col gap-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="subscription-email">Email*</label>
              <input
                type="text"
                name="subscriptionEmail"
                id="subscription-email"
                className="bg-black w-full h-12 border-1 rounded-full"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                id="subscription-email"
                className="w-5 h-5 bg-black"
              />
              <label htmlFor="subscription-email">
                Yes, subscribe me to your newsletter*
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
