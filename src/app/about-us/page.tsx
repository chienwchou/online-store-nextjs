import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import aboutUsBanner from "@/assets/about-us-banner.png";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <Header />
      <section>
        <div className="px-10 py-20">
          <h1 className="text-7xl font-bold text-center">About Us</h1>
        </div>
        <div className="p-10 flex flex-row items-center">
          <div className="w-1/2">
            <Image src={aboutUsBanner} alt="about-us-banner" />
          </div>
          <div className="w-1/2 px-20 py-10 flex flex-col gap-y-6">
            <h2 className="text-5xl font-semibold">Our Story</h2>
            <p className="text-xl">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="text-xl">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="p-10 flex flex-row items-center">
          <div className="w-1/3 px-20 py-10 flex flex-col gap-y-6">
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="22.1 47 160.002 106"
              viewBox="22.1 47 160.002 106"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <g>
                <path
                  d="M74.2 137.2c0 8.7-7.1 15.8-15.9 15.8s-15.9-7.1-15.9-15.8 7.2-15.8 15.9-15.8c8.8 0 15.9 7.1 15.9 15.8zm40-90.2H31.4c-5.1 0-9.3 4.2-9.3 9.3v73.8c0 5.1 3.5 9.3 7.8 9.3h5.5c1.3 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3h-5.5c-1.6 0-3.1-2.2-3.1-4.7V56.3c0-2.6 2.1-4.7 4.7-4.7h82.7c2.6 0 4.7 2.1 4.7 4.7v73.8c0 2.6-2.1 4.7-4.7 4.7H81.1c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3h33.1c5.1 0 9.3-4.2 9.3-9.3V56.3c0-5.1-4.2-9.3-9.3-9.3zm58.9 50.7h-2L160.2 78c-1.7-2.5-4.5-4-7.5-4h-22.2c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3h22.2c1.5 0 2.8.7 3.5 1.7l9.6 17.2H163c-.4 0-.7.1-1 .2l-6.3 3.1h-23.1c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3h23.6c.4 0 .7-.1 1-.2l6.3-3.1h9.6c2.9 0 4.4 1.8 4.4 5.1v22.9c0 2.4-2 4.4-4.4 4.4h-4.6c-1.1-7.6-7.7-13.4-15.7-13.4-7.9 0-14.5 5.8-15.7 13.4h-6.7c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3h6.6c1.1 7.6 7.7 13.5 15.7 13.5s14.6-5.9 15.7-13.5h4.6c5 0 9.1-4.1 9.1-9.1v-22.9c.1-5.5-3.6-9.4-9-9.4z"
                  fill="#d81313"
                  data-color="1"
                ></path>
              </g>
            </svg>
            <h3 className="text-3xl font-semibold">
              Delivering Freshness Every Day at a Time
            </h3>
            <p className="text-xl">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="w-1/3 px-20 py-10 flex flex-col gap-y-6">
            <svg
              preserveAspectRatio="none"
              data-bbox="52.3 43.498 89.5 113.102"
              viewBox="52.3 43.498 89.5 113.102"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <g>
                <path
                  d="M99.7 109.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4h4.2l-2.7-4.9c-.8-1.5-2.4-2.5-4.1-2.5s-3.3.9-4.1 2.5l-4.6 8.3c-.6 1.1-2.1 1.6-3.2.9-1.1-.6-1.6-2.1-.9-3.2l4.6-8.4c1.7-3 4.8-4.9 8.3-4.9s6.6 1.9 8.3 4.9l2.6 4.7 2-3.4c.7-1.1 2.1-1.5 3.2-.9 1.1.7 1.5 2.1.9 3.2l-4.1 7-.1.1c-.1.1-.1.2-.2.3l-.5.5h-.1c-.4.2-.7.3-1.1.3h-8.4zM92.4 133H83c-2.6 0-4.7-2.1-4.7-4.7 0-.8.2-1.5.6-2.2l3.1-5.6 2 3.4c.4.8 1.2 1.2 2 1.2.4 0 .8-.1 1.2-.3 1.1-.7 1.5-2.1.9-3.2l-4.1-7.1c0-.1-.1-.1-.1-.2s-.1-.1-.1-.2c-.2-.2-.4-.4-.6-.5h-.1c-.2-.1-.5-.2-.7-.2h-8.5c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4h4.2l-3.2 5.8c-.8 1.4-1.2 3-1.2 4.5 0 5.2 4.2 9.4 9.4 9.4h9.4c1.3 0 2.4-1.1 2.4-2.4-.2-1.4-1.2-2.5-2.5-2.5zm22-18.5c-.6-1.1-2.1-1.6-3.2-.9-1.1.6-1.6 2.1-.9 3.2l5.1 9.3c.4.7.6 1.5.6 2.2 0 2.6-2.1 4.7-4.7 4.7H106l2.1-3.6c.7-1.1.3-2.6-.9-3.2-1.1-.7-2.6-.3-3.2.9l-4.1 7.1c0 .1 0 .1-.1.2 0 .1-.1.1-.1.2-.2.5-.2 1.1 0 1.6 0 .1.1.1.1.2s0 .1.1.2l4.1 7c.4.8 1.2 1.2 2 1.2.4 0 .8-.1 1.2-.3 1.1-.7 1.5-2.1.9-3.2l-2-3.5h5.3c5.2 0 9.4-4.2 9.4-9.4 0-1.5-.4-3.1-1.2-4.5l-5.2-9.4zm27.4-61.6v94.3c0 5.2-4.2 9.4-9.4 9.4H61.7c-5.2 0-9.4-4.2-9.4-9.4V52.9c0-5.2 4.2-9.4 9.4-9.4h4.7c5.2 0 9.4 4.2 9.4 9.4v21.2c0 2.6 2.1 4.7 4.7 4.7h33c2.6 0 4.7-2.1 4.7-4.7V52.9c0-5.2 4.2-9.4 9.4-9.4h4.7c5.3-.1 9.5 4.2 9.5 9.4zm-4.7 0c0-2.6-2.1-4.7-4.7-4.7h-4.7c-2.6 0-4.7 2.1-4.7 4.7v21.2c0 5.2-4.2 9.4-9.4 9.4h-33c-5.2 0-9.4-4.2-9.4-9.4V52.9c0-2.6-2.1-4.7-4.7-4.7h-4.7c-2.6 0-4.7 2.1-4.7 4.7v94.3c0 2.6 2.1 4.7 4.7 4.7h70.7c2.6 0 4.7-2.1 4.7-4.7V52.9z"
                  fill="#d81313"
                  data-color="1"
                ></path>
              </g>
            </svg>
            <h3 className="text-3xl font-semibold">
              We Take Sustainability Seriously
            </h3>
            <p className="text-xl">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="w-1/3 px-20 py-10 flex flex-col gap-y-6">
            <svg
              preserveAspectRatio="none"
              data-bbox="36.211 41.073 127.578 118.027"
              viewBox="36.211 41.073 127.578 118.027"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <g>
                <path
                  d="M161.9 124.2c-.5-.6-1.1-1.4-1.1-1.9 0-.7-.3-1.4-.9-1.9-.6-.5-1.3-.6-2-.5-70.1 15-100.3-41.6-102.4-45.7-.6-1.8-4.7-14.8-6.2-18.8-.6-1.6-1.8-2.1-2.4-2.2-2.1-.5-3.9 1.1-5.4 2.5-.3.3-.6.5-.8.7-3.8 3.2-3.9 12.2-3.6 22.7.1 2.2.1 4.5 0 5.2-1.7 10.3-3.3 36.4 18.9 56.5 13.6 11.8 33.3 18.3 52.9 18.3 6.8 0 13.5-.8 20-2.4 17.3-4.3 29.6-13.8 34.6-26.9 0-.1.1-.2.1-.3.7-2.3-.7-4-1.7-5.3zm-34.1 27.9c-23.9 5.9-51.5-.1-68.7-14.9-20.5-18.5-19-42.7-17.4-52.2.2-1.1.1-2.8.1-6.1v-1.7c1.1.6 2.4 1 3.7 1h.8c1.9-.2 3.6-1.1 4.8-2.5v.1c0 .1.1.2.1.3.3.6 29.5 57.7 96.1 50.3.3 4.3 2.8 7.9 3.8 9.1.5.7 1.3 1.5 2.2 2.3-5.9 6.7-14.6 11.6-25.5 14.3zM60.5 76.9c-.8-1-.6-2.5.4-3.3 1-.8 2.5-.6 3.3.4 11.8 15.1 33 34.1 81.2 25.7 3.3-.6 6.7-1.3 10.1-2.3.7-.2 1.4 0 2 .4.6.4.9 1.1 1 1.8 0 .4.7 1.2 1.2 1.8 1.1 1.2 2.5 2.9 2.1 5.2 0 .1 0 .2-.1.3-1.4 4.1-3.4 8-6.2 11.5-.5.6-1.2.9-1.9.9-.5 0-1-.2-1.5-.5l-.1-.1c-2.2-.5-3.9-3.3-4.7-4.9-.7-1.3-2.4-5.2-1.9-9.4C95.3 113 73 92.8 60.5 76.9zm25.6 10c-3.9-13.8-1-24.6 8.6-31.9 11.9-8 21.2-3.3 27.4-.1l2.8 1.4c.7-2.4 1.1-6.9-3.5-11.2-.9-.9-1-2.4-.1-3.3.9-.9 2.4-1 3.3-.1 5.5 5.2 5.9 11.2 5 15.3.6 0 1.3-.1 2.1-.2 6.8-.7 17.2-1.7 25.4 9.9 5.4 8.8 5.9 16.1 1.8 25.3-.4.9-1.3 1.4-2.2 1.4-.3 0-.6-.1-1-.2-1.2-.5-1.7-1.9-1.2-3.1 3.5-7.8 3.1-13.4-1.5-20.8-6.5-9.3-14.5-8.5-20.9-7.8-2.4.2-4.5.4-6.3.1-1.8-.3-3.7-1.3-5.8-2.4-5.8-2.9-13-6.6-22.5-.2-8 6-10.2 14.8-6.8 26.8.4 1.3-.4 2.6-1.6 2.9-.2.1-.4.1-.6.1-1.1-.2-2.1-.9-2.4-1.9z"
                  fill="#d81313"
                  data-color="1"
                ></path>
              </g>
            </svg>
            <h3 className="text-3xl font-semibold">
              Supporting Local Products
            </h3>
            <p className="text-xl">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
