"use client"
import Image from 'next/image'
import React, {useEffect} from 'react';

// AOS Animation 
import Aos from "aos";
import "aos/dist/aos.css";
const RequiredHours = () => {

  useEffect(() => {
    Aos.init();
  }, []); 

  return (
    <section className="preflight-planning px-3 md:px-5">
      <div className="w-full max-w-screen-xl mx-auto py-20">
        <div className="grid grid-cols-1 gap-10 sm:gap-y-20">
          <div className="relative flex justify-center md:justify-start flex-col md:flex-row items-center gap-4">
            <h2 className="text-white font-semibold text-2xl md:text-[2rem] leading-[-.176px] text-center">
              Required flight hours
            </h2>
            <div className="max-w-[16rem] h-[2px] bg-light-blue absolute -top-2 left-0 bottom-auto right-0 mx-auto md:mx-0"></div>
            <p className="text-white text-base leading-[-.176px]">
              40 hours total flight time minimum*
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col justify-between gap-4">
              <div className="w-full sm:max-w-[22rem] h-32 border border-light-blue p-4">
                <Image
                  src="/assets/clock-icon-1.svg"
                  className="clock icon"
                  alt='clock'
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-4">
                  20 hours from authorized flight instructor consisting of
                </p>
              </div>

              <div className="w-full sm:max-w-[22rem] border border-light-blueborder p-4" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/assets/clock-icon-2.svg"
                  className="clock icon"
                  alt='clock'
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-4">
                  3 hours dual cross country flight training.
                </p>
              </div>

              <div className="w-full sm:max-w-[22rem] border border-light-blueborder p-4" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/assets/clock-icon-2.svg"
                  className="clock icon"
                  alt='clock'
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-4">
                  3 hours dual night flight training.
                </p>
              </div>

              <div className="w-full sm:max-w-[22rem] border border-light-blueborder p-4" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/assets/clock-icon-2.svg"
                  className="clock icon"
                  alt='clock'
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-4">
                  3 hours dual instrument flight training.
                </p>
              </div>

              <div className="w-full sm:max-w-[22rem] border border-light-blueborder p-4" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/assets/clock-icon-2.svg"
                  className="clock icon"
                  alt='clock'
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-4">
                  3 hours dual flight instruction in preparation for the
                  practical test.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div className="w-full sm:max-w-[22rem] h-32 border border-light-blue p-4">
                <Image
                  src="/assets/clock-icon-1.svg"
                  className="clock icon"
                  alt='clock'
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-4">
                  10 hours solo flight time, consisting of
                </p>
              </div>

              <div className="w-full sm:max-w-[22rem] border border-light-blueborder p-4" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/assets/clock-icon-2.svg"
                  className="clock icon"
                  alt='clock'
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-4">
                  5 hours solo cross country flight time.
                </p>
              </div>

              <div className="w-full sm:max-w-[22rem] border border-light-blueborder p-4" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/assets/clock-icon-2.svg"
                  className="clock icon"
                  alt='clock'
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-4">
                  1 solo cross country flight over 150 nm total distance, full
                  stop landings at 3 different airports, one segment consisting
                  of a straight line distance of more than 50 nm between takeoff
                  and landing locations
                </p>
              </div>

              <div className="w-full sm:max-w-[22rem] border border-light-blueborder p-4" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/assets/clock-icon-2.svg"
                  className="clock icon"
                  alt='clock'
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-4">
                  3 takeoffs and 3 landings to a full stop at an airport with an
                  operating control tower.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RequiredHours