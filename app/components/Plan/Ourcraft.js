"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

// AOS Animation 
import Aos from "aos";
import "aos/dist/aos.css";

const OurCraft = () => {

  useEffect(() => {
    Aos.init();
  }, []); 

  return (
    <section className="plan-container">
      <div className="px-3 md:px-5">
        <div className="w-full max-w-screen-xl mx-auto py-20">
          <div className="grid grid-cols-1 gap-y-16">
            <div className="w-full max-w-xl mx-auto">
              <div className="relative">
                <h2
                  className="text-white text-center text-xl md:text-[2rem] font-semibold"
                  style={{ letterSpacing: "-.176px" }}
                >
                  Our aircraft
                </h2>
                <div className="max-w-[12rem] h-[2px] bg-light-blue absolute -top-3 left-0 bottom-auto right-0 mx-auto"></div>
              </div>
              <p
                className="text-white text-center text-sm md:text-base mt-4"
                style={{ letterSpacing: "-.176px", lineHeight: "1.5" }}
              >
                The Cessna 172 M Model is a four-seat aircraft with tricycle
                gear. A two-hour daily minimum is charged for overnight rentals
                during the week and a three-hour daily minimum is charged for
                overnight weekend rentals.
              </p>
            </div>

            <div className="grid gap-x-16 grid-cols-1 base:grid-cols-2">
              <div>
                <Image
                  src="/assets/aircraft-circle.svg"
                  alt="aircraft circle"
                  width={51}
                  height={50}
                />
                <h2 className="mt-8 text-white font-semibold text-xl nd:text-2xl">
                  1973 Cessna 172M IFR Certified
                </h2>
                <h4 className="mt-4 text-white font-medium text-base">
                  Equipment and Features:
                </h4>

                <div className="mt-8">
                  <div
                    style={{
                      gridTemplateColumns: "max-content 1fr",
                    }}
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    class="grid gap-x-4 gap-y-4 grid-cols-1"
                  >
                    <Image
                      src="/assets/check-circle-icon.svg"
                      loading="lazy"
                      alt="check icon"
                      width={32}
                      height={32}
                    />
                    <div class="flex self-center text-white text-base">
                      PS Engineering PMA 6000 Audio Panel
                    </div>
                    <Image
                      src="/assets/check-circle-icon.svg"
                      loading="lazy"
                      alt="check icon"
                      width={32}
                      height={32}
                    />
                    <div class="flex self-center text-white text-base">
                      Dual Garmin GNC 255A Nav/ Com’s
                    </div>
                    <Image
                      src="/assets/check-circle-icon.svg"
                      loading="lazy"
                      alt="check icon"
                      width={32}
                      height={32}
                    />
                    <div class="flex self-center text-white text-base">
                      Lynx 9000 ADSB Transponder
                    </div>
                    <Image
                      src="/assets/check-circle-icon.svg"
                      loading="lazy"
                      alt="check icon"
                      width={32}
                      height={32}
                    />
                    <div class="flex self-center text-white text-base">
                      JPI EDM 730 Engine Monitor
                    </div>
                  </div>
                </div>

                <div className="mt-8 w-full h-[3px] plan-aircraft-divider"></div>

                <div className="mt-8 flex justify-center md:justify-start flex-col md:flex-row items-center gap-4">
                  <button className="bg-dodger-blue hover:bg-btn-bghover rounded-lg w-fit flex items-center justify-center gap-3 py-4 px-7 text-white font-medium text-lg">
                    <Image
                      src="/assets/call-us.svg"
                      alt="call us"
                      width={20}
                      height={20}
                    />
                    Contact Us
                  </button>
                  <button className="bg-blue-200 rounded cursor-default w-fit flex items-center justify-center gap-3 py-4 px-7 text-white font-medium text-lg">
                    $160/ hour
                  </button>
                </div>
              </div>
              <div className="base:grid gap-x-6 grid-cols-2 flex justify-center mt-10 base:mt-0">
                <div className="flex self-center justify-center w-full h-full max-w-[21rem] max-h-[15.625rem]">
                  <img
                    src="/assets/cessna-plan.png"
                    alt="cessna-plan"
                    className="shadow-planshadow"
                    
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  />
                </div>
                <div className="flex self-center justify-center w-full h-full max-w-[21rem] max-h-[15.625rem]">
                  <img
                    src="/assets/Interior-plan.jpg"
                    alt="cessna-plan"
                    className="shadow-planshadow"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  />
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-2">
                <div className="flex md:items-center flex-col md:flex-row gap-8">
                  <div className="w-full max-w-xl">
                    <h2
                      className="text-white font-semibold text-xl md:text-[2rem]"
                      style={{ lineHeight: "150%", letterSpacing: "-.176px" }}
                    >
                      Attached are the Cessna 172M manual and rental documents.
                    </h2>
                  </div>
                  <div className="w-full max-w-xl">
                    <p
                      className="text-white text-sm md:text-base"
                      style={{ lineHeight: "1.5", letterSpacing: "-.176px" }}
                    >
                      Check the Cessna 172M manual for operational and
                      performance details. Also, review the rental agreement and
                      rental insurance to be aware of all the responsibilities,
                      safety rules and insurance coverage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 base:grid-cols-5 gap-y-4 sm:gap-y-0 sm:gap-x-8 md:mt-0 mt-8">
                <Link
                  href="https://assets.website-files.com/61c1b225889e5fbb32122680/62bc52d4adbcf282a0f87669_Cessna%20172M%20POH.pdf"
                  className="border border-border-blue rounded-sm p-4 flex flex-col gap-2"
                >
                  <Image
                    src="/assets/document-icon.svg"
                    alt="document icon"
                    width={33}
                    height={32}
                  />
                  <p className="text-white text-base">Cessna 172M POH</p>
                </Link>
                <Link
                  href="https://assets.website-files.com/61c1b225889e5fbb32122680/65c2551e75075b09a4e8265c_Rental%20Agreement%20%26%20Rental%20Insurance%20Agreement%20BSFT.pdf"
                  className="border border-border-blue rounded-sm p-4 flex flex-col gap-2"
                >
                  <Image
                    src="/assets/document-icon.svg"
                    alt="document icon"
                    width={33}
                    height={32}
                  />
                  <p className="text-white text-base">
                    Rental Agreement & Rental Insurance Document
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCraft;
