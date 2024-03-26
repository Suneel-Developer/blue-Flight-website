"use client"
import Image from "next/image";

const IntroductoryFlight = () => {
  return (
    <section className="introductoryflight-pilot-section px-3 md:px-5 bg-dark-blue relative">
      <div className="w-full max-w-screen-xl mx-auto py-20">
        <div className="grid grid-cols-1 gap-10 sm:gap-y-20">
          <div>
            <div className="relative mb-8">
              <h2 className="text-white font-semibold text-2xl md:text-[2rem] leading-[-.176px] text-center md:text-start">
                Introductory flight
              </h2>
              <div className="max-w-[16rem] h-[2px] bg-light-blue absolute -top-2 left-0 bottom-auto right-0 mx-auto md:mx-0"></div>
            </div>

            <div className="prefight-circle-container grid gap-y-8 md:gap-y-4 base:gap-x-0 gap-x-4 w-full ">
              <div className="md:flex items-center hidden">
                <div className="flex">
                  <Image
                    src="/assets/circle-blue.svg"
                    alt="circle-1"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="w-full h-px bg-circle-border"></div>
              </div>

              <div className="md:flex items-center hidden">
                <div className="flex">
                  <Image
                    src="/assets/circle-blue.svg"
                    alt="circle-1"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="w-full h-px bg-circle-border"></div>
              </div>

              <div className="md:flex items-center hidden">
                <div className="flex">
                  <Image
                    src="/assets/circle-blue.svg"
                    alt="circle-1"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="w-full h-px bg-circle-border"></div>
              </div>

              <div className="flex items-start gap-6">
                <Image
                  src="/assets/circle-blue.svg"
                  alt="circle-1"
                  width={46}
                  height={46}
                  className="block md:hidden"
                />
                <p className="text-white md:mr-12 text-sm :text-base leading-[1.5] tracking-[-.176px] flex-wrap">
                  We offer an introductory flight. This is intended to be a
                  quick overview of the flying experience and what training will
                  be like.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  src="/assets/circle-blue.svg"
                  alt="circle-1"
                  width={46}
                  height={46}
                  className="block md:hidden"
                />
                <p className="text-white md:mr-12 text-sm :text-base leading-[1.5] tracking-[-.176px]">
                  If you are thinking about visiting a flight school but aren’t
                  yet ready to commit, come on out and try an introductory
                  flight with one of our instructors.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  src="/assets/circle-blue.svg"
                  alt="circle-1"
                  width={46}
                  height={46}
                  className="block md:hidden"
                />
                <p className="text-white md:mr-12 text-sm :text-base leading-[1.5] tracking-[-.176px]">
                  When you decide to proceed, the flight time will be officially
                  logged as training time to get your license (40 hours).
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-x-8">
            <div className="flex flex-col rounded-sm border border-light-border200 p-4">
              <Image
                src="/assets/clock-icon-1.svg"
                alt="clock icon"
                className="document icon"
                width={32}
                height={32}
              />
              <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                <span className="font-semibold">Duration:</span> Blue Skies
                Safety Procedures Document
              </p>
            </div>

            <div className="flex flex-col rounded-sm border border-light-border200 p-4">
              <Image
                src="/assets/flight-ticket-icon.svg"
                className="document icon"
                alt="document icon"
                width={32}
                height={32}
                loading="lazy"
              />
              <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                <span className="font-semibold">Flying:</span> You can choose to
                fly or simply enjoy the ride.
              </p>
            </div>

            <div className="flex flex-col rounded-sm border border-light-border200 p-4">
              <Image
                src="/assets/money-icon.svg"
                className="document icon"
                alt="document icon"
                width={32}
                height={32}
                loading="lazy"
              />
              <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                <span className="font-semibold">Cost:</span> $125 and is
                performed in the flight school’s Cessna 172.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductoryFlight;
