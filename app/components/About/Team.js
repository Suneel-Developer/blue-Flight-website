"use client"
import React, {useEffect} from "react";

// AOS Animation 
import Aos from "aos";
import "aos/dist/aos.css";



const Team = () => {

  useEffect(() => {
    Aos.init();
  }, []); 



  
  return (
    <section className="about-team-container">
      <div className="px-3 md:px-5">
        <div className="w-full max-w-screen-xl mx-auto py-24">
          <div className="team-container grid gap-y-12 md:gap-y-0 md:gap-x-12">
            <div className="self-center col-span-1">
              <h3 className="text-light-blue font-semibold text-base text-center md:text-start">
                MEET THE TEAM
              </h3>
              <h1 className="text-white font-semibold mt-4 text-2xl md:text-[2rem] tracking-[-.176px] text-center md:text-start">
                Our flight instructors
              </h1>
              <p className="text-white text-sm md:text-base mt-4 tracking-[-.176px] leading-[1.5] text-center md:text-start">
                Having multiple instructors available to students means we can
                generally meet the availability of our students.
              </p>
            </div>

            <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 self-center">
              <div data-aos="zoom-in" data-aos-duration="1500" className="pb-4 self-center justify-self-center">
                <img
                  src="/assets/Matt.png"
                  loading="lazy"
                  alt="Matt"
                  className="w-full max-w-[13.5rem]"
                />
                <h2 className="mt-4 text-white text-xl text-center">
                  Matt Cole
                </h2>
                <div className="w-full h-[2px] mt-4 bg-borderbg"></div>
              </div>

              <div data-aos="zoom-in" data-aos-duration="1500" className="pb-4 self-center justify-self-center">
                <img
                  src="/assets/stanly.png"
                  loading="lazy"
                  alt="Matt"
                  className="w-full max-w-[13.5rem]"
                />
                <h2 className="mt-4 text-white text-xl text-center">
                  Job Stanley
                </h2>
                <div className="w-full h-[2px] mt-4 bg-borderbg"></div>
              </div>

              <div data-aos="zoom-in" data-aos-duration="2000" className="pb-4 self-center justify-self-center">
                <img
                  src="/assets/nollert.png"
                  loading="lazy"
                  alt="Matt"
                  className="w-full max-w-[13.5rem]"
                />
                <h2 className="mt-4 text-white text-xl text-center">
                  Christian Nollert
                </h2>
                <div className="w-full h-[2px] mt-4 bg-borderbg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
