import subscriptionBg from "@/assets/subscription-bg.png";

const SubscriptionBanner = () => {
  return (
    <section className="mt-20">
      <div
        className="flex flex-col md:flex-row px-60 py-20 gap-5 bg-no-repeat bg-cover justify-start md:bg-center relative
"
        style={{
          backgroundImage: `url(` + subscriptionBg.src + `)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white font-bold space-y-4 flex flex-col justify-center flex-1 z-10">
          <h3 className="text-2xl">Subscribe & Save</h3>
          <div className="flex flex-row gap-5">
            <p className="text-9xl">20%</p>
            <p className="text-3xl">off</p>
          </div>
          <p className="text-4xl">Your Next Order</p>
          <div className="subscription-form-container flex flex-col gap-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="subscription-email">Email*</label>
              <input
                type="text"
                name="subscriptionEmail"
                id="subscription-email"
                className="bg-black w-full h-12 border-1 rounded-full px-10 focus:opacity-75"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
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
              <button className="py-3 px-14 rounded-full bg-red-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
