"use client"
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

// AOS Animation 
import Aos from "aos";
import "aos/dist/aos.css";


const FlightWithUs = () => {

  useEffect(() => {
    Aos.init();
  }, []); 
  
  return (
    <section className="relative">
      <div className="px-3 md:px-5">
        <div className="w-full max-w-7xl mx-auto">
          <div className="py-16 md:py-24">
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <h2 className="text-2xl md:text-5xl font-semibold text-dark-blue tracking-tight text-center">
                  Fly with us today!
                </h2>
              </div>

              <div className="mt-5 md:mt-8">
                <p className="text-sm md:text-base text-dark-blue leading-normal text-center">
                  Whether you are looking to continue flight training or just to
                  get a preview, Blue Skies can get you in the air today!
                </p>
              </div>
              <div className="flex items-center justify-center mt-5 md:mt-8">
                <Link
                  href="/pilot"
                  className="bg-shade-blue mr-4 rounded-lg flex items-center py-4 px-7 max-w-fit text-white font-medium text-lg hover:bg-btn-hover"
                >
                  <Image
                    src="/assets/circle-arrow.svg"
                    alt="circle arrow"
                    width={24}
                    height={24}
                    className="mr-3"
                  />
                  Become a Pilot
                </Link>

                <Link
                  href="/contact"
                  className="bg-dodger-blue hover:bg-btn-bghover rounded-lg text-center py-4 px-7 max-w-fit text-white font-medium text-lg hidden md:block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden base:block absolute top-0 left-0 bottom-0 right-auto -z-10">
        <img
          src="/assets/Airplane-rotate.png"
          alt="a cessna airplane seen from below"
          className="w-full h-full max-h-full max-w-[36vw] object-cover"
          data-aos="fade-right"
          data-aos-duration="1500"
          sizes="(max-width: 991px) 100vw, (max-width: 1919px) 36vw, 513.3125px"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default FlightWithUs;
