"use client"
import React, {useEffect} from "react";
import Image from "next/image";

// AOS Animation 
import Aos from "aos";
import "aos/dist/aos.css";

const License = () => {
  useEffect(() => {
    Aos.init();
  }, []); 

  return (
    <section className="pilot-license-container">
      <div className="px-3 md:px-5 w-full max-w-screen-xl mx-auto py-20">
        <div className="grid grid-cols-1 gap-y-16">
          <div className="w-full max-w-xl mx-auto">
            <h2 className="text-center font-semibold text-2xl md:text-[2rem] text-dark-blue">
              What is a private pilot license?
            </h2>
            <p className="text-center text-sm md:text-base text-dark-blue mt-4 leading-[1.5]">
              A PPL or Private Pilot License is an FAA license granting an
              individual the right to fly without restrictions (no instructor
              endorsement necessary).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8" data-aos="fade-right" data-aos-duration="1000">
            <div className="flex flex-col justify-center items-center md:items-start">
              <Image
                src="/assets/circle-1.svg"
                alt="pen icon"
                width={49}
                height={49}
              />
              <h3 className="font-medium text-xl text-dark-blue mt-4">
                Next steps
              </h3>
              <p className="text-center md:text-start tracking-[-.176px] text-sm md:text-base leading-[1.5] textdark-blue mt-2 text-dark-blue">
                Once you have obtained your PPL you can generally rent aircraft
                that are the same type that you have trained in and go fly.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center md:items-start">
              <Image
                src="/assets/circle-1.svg"
                alt="clock icon"
                width={49}
                height={49}
              />
              <h3 className="font-medium text-xl text-dark-blue mt-4">
                Certifications
              </h3>
              <p className="text-center md:text-start tracking-[-.176px] text-sm md:text-base leading-[1.5] textdark-blue mt-2 text-dark-blue">
                There are additional type ratings and certifications available
                that enable you to fly and make money (Commercial) or to
                instruct other pilots (CFI), as well as Complex, High
                Performance, and Multi Engine ratings.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center md:items-start">
              <Image
                src="/assets/circle-3.svg"
                alt="pen icon"
                width={49}
                height={49}
              />
              <h3 className="font-medium text-xl text-dark-blue mt-4">
                Requirements
              </h3>
              <p className="text-center md:text-start tracking-[-.176px] text-sm md:text-base leading-[1.5] textdark-blue mt-2 text-dark-blue">
                In order to obtain your PPL for single engine land, you must
                complete the following requirements set forth by the FAA in Part
                61.109.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default License;
