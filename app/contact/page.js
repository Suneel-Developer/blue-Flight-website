"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from"../components/Footer";
import SocialConacts from "../components/Contact/SocialConacts.js";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      {/* meta tag & content  */}
      <Head>
        <meta
          content="Feel free to give us a call or contact us via email. Blue Skies Flight School 520 Airport Rd. Hangar 4. Guthrie, OK 73044."
          name="description"
        />
        <meta
          content="Contact - Blue Skies Flight School"
          property="og:title"
        />
        <meta
          content="Feel free to give us a call or contact us via email. Blue Skies Flight School 520 Airport Rd. Hangar 4. Guthrie, OK 73044."
          property="og:description"
        />
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Header />
      <section className="pt-20 pb-40 relative mt-[72px]">
        <div className="px-3 md:px-5">
          <div className="w-full max-w-7xl mx-auto">
            <div className="w-full max-w-[37rem]">
              <div className="mb-12 flex md:block md:justify-start justify-center md:text-start text-center flex-col">
                <h3 className="text-base font-semibold text-light-blue uppercase mb-3">
                  contact
                </h3>
                <h1 className="md:text-xxl text-3xl font-semibold text-dark-blue mb-6">
                  Get in touch!
                </h1>
                <p className="text-dark-blue text-sm md:text-base leading-normal tracking-tight">
                  Feel free to give us a call or contact us via email.
                </p>
              </div>
              <div>
                <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  {/* First & Last Name  */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-medium text-dark-blue text-base"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="name"
                        placeholder="First name"
                        className="min-h-12 h-[38px] bg-transparent rounded mb-3 mt-1 py-2 px-4 border border-light-gray text-sm text-dark-gray w-full outline-none focus:border-dodger-lightblue"
                        required
                      />
                    </div>

                    {/* Last Name  */}
                    <div>
                      <label
                        htmlFor="name"
                        className="font-medium text-dark-blue text-base"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="last name"
                        placeholder="Last name"
                        className="min-h-12 h-[38px] bg-transparent rounded mb-3 mt-1 py-2 px-4 border border-light-gray text-sm text-dark-gray w-full outline-none focus:border-dodger-lightblue"
                        required
                      />
                    </div>
                  </div>

                  {/* Email  */}
                  <div>
                    <label
                      htmlFor="email"
                      className="font-medium text-dark-blue text-base"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@gmail.com"
                      className="min-h-12 h-[38px] bg-transparent rounded mb-3 mt-1 py-2 px-4 border border-light-gray text-sm text-dark-gray w-full outline-none focus:border-dodger-lightblue"
                      required
                    />
                  </div>

                  {/* Phone Number  */}
                  <div>
                    <label
                      htmlFor="number"
                      className="font-medium text-dark-blue text-base"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      className="min-h-12 h-[38px] bg-transparent rounded mb-3 mt-1 py-2 px-4 border border-light-gray text-sm text-dark-gray w-full outline-none focus:border-dodger-lightblue"
                      required
                    />
                  </div>

                  {/* Message  */}
                  <div>
                    <label
                      htmlFor="message"
                      className="font-medium text-dark-blue text-base"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Your message..."
                      name="message"
                      className="min-h-32 h-auto bg-transparent rounded mb-3 mt-1 py-2 px-4 resize-none border border-light-gray text-sm text-dark-gray w-full outline-none focus:border-dodger-lightblue"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button  */}
                  <input
                    type="submit"
                    value="Send message"
                    className="bg-high-blue font-medium text-white text-center rounded-lg py-4 px-7 text-xl w-full hover:bg-light-blue cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          className="w-full max-w-[30vw] absolute top-0 left-auto right-0 bottom-0 hidden base:block"
        >
          <img
            src="/assets/contact-hero.png"
            alt="contact hero"
            className="w-full h-[739px] object-cover rounded-tl-[40%]"
          />
        </div>
      </section>
      <SocialConacts />
      <Footer />
    </div>
  );
};

export default Contact;
