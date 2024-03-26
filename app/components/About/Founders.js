"use client"
import React, {useEffect} from "react";

// AOS Animation 
import Aos from "aos";
import "aos/dist/aos.css";


const Founders = () => {

  useEffect(() => {
    Aos.init();
  }, []); 


  
  return (
    <section className="w-full max-w-screen-xl mx-auto px-3 md:px-5 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-8">
      <div>
        <div>
          <h2 className="text-light-blue font-semibold text-base text-center md:text-start">
            Matthew Cole
          </h2>
          <h1 className="text-dark-blue font-semibold text-[2rem] text-center md:text-start mt-4">
            Founder's history
          </h1>
        </div>

        <div className="mt-6">
          <div className="relative md:mb-8 mb-5">
            <p className="text-sm md:text-base tracking-[-.176px] text-dark-blue leading-[1.5]">
              <span className="font-semibold mr-1">
                Matthew Cole embarked on his passion for flying in 1993
              </span>
              out of the World famous Van Nuys Airport in Van Nuys, California
              when he was just sixteen years of age. At Van Nuys Airport he
              earned his private Pilot License and soon after, decided he wanted
              to pursue his aviation career as an Airline Captain.
            </p>
            <div className="bg-shade-blue w-1 absolute top-0 right-0 bottom-0 -left-4"></div>
          </div>

          <div className="md:mb-8 mb-5">
            <p className="text-sm md:text-base tracking-[-.176px] text-dark-blue leading-[1.5]">
              <span className="font-semibold mr-1">
                In 1999 Cole left his family and home in the San Fernando Valley
              </span>
              for Flight Safety International in Vero Beach Florida. There he
              earned his instrument, multi engine commercial, single engine
              commercial and Flight Instructor Certificates.
            </p>
          </div>

          <div className="md:mb-8 mb-5">
            <p className="text-sm md:text-base tracking-[-.176px] text-dark-blue leading-[1.5]">
              <span className="font-semibold mr-1">
                In 2000 Cole moved to Daytona Beach Florida
              </span>
              to flight instruct and receive his instrument and multi engine
              flight instructor ratings.
            </p>
          </div>

          <div className="md:mb-8 mb-5">
            <p className="text-sm md:text-base tracking-[-.176px] text-dark-blue leading-[1.5]">
              <span className="font-semibold mr-1">
                On March 16, 2001 Cole was on an instructor standardization
                flight
              </span>
              with the owner of one of the flight schools where Cole instructed.
              Without Cole’s knowledge, the owner shut down one of the engines,
              at low altitude, in the Piper Seneca Cole was flying.
            </p>
          </div>

          <div className="md:mb-8 mb-5">
            <p className="text-sm md:text-base tracking-[-.176px] text-dark-blue leading-[1.5]">
              <span className="font-semibold mr-1">
                At a point in time that was way too late,
              </span>
              Cole’s instructor/ boss took over control of the aircraft and
              crash landed it less than a mile short of the Flagler Beach
              Airport. On impact the aircraft exploded, engulfing Cole in flames
              and rendering him with third degree burns over 65% of his body.
              Cole was subsequently choppered to the Shands Hospital Gainesville
              burn unit where he was treated and admitted for almost six months.
            </p>
          </div>

          <div>
            <p className="text-sm md:text-base tracking-[-.176px] text-dark-blue leading-[1.5]">
              <span className="font-semibold mr-1">
                Coles recovery after the accident took approximately nine years
              </span>
              . During that time Cole had almost 70 surgeries and while
              recovering he earned a Bachelor of Science degree in Aviation
              Professional Pilot from Utah Valley Universities Online program.
              In 2010 Cole was recovered and well enough to get his Licenses
              reinstated and begin enjoying his passion again. In 2012 he re
              instated his flight instructor certificates and has been teaching
              ever since.
            </p>
          </div>
        </div>
      </div>

      <div className="self-center justify-self-center">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="shadow-aboutshadow"
        >
          <img
            src="/assets/img.png"
            alt="img-1"
            className="w-full max-w-[28.125rem]"
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1700"
          className="shadow-aboutshadow"
        >
          <img
            src="/assets/img-2.png"
            alt="img-2"
            className="w-full max-w-[28.125rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Founders;
