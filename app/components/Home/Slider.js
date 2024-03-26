"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleNextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide - 1);
  };

  return (
    <section className="bg-background-color pt-16 sm:pt-24 pb-32 sm:pb-48 relative overflow-hidden">
      <div className="px-3 md:px-5">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid gap-y-16 grid-cols-1">
            <div className="justify-self-center">
              <h2 className="text-white tracking-[-.176px] font-semibold text-2xl sm:text-5xl">
                Meet our aircraft
              </h2>
            </div>
            <div className="">
              <div
                className="w-full rounded h-auto md:h-[300px] text-center relative"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              >
                <div
                  className="w-[17rem] xs:w-[21.5rem] md:w-[42rem] base:w-[50rem] h-auto mx-auto whitespace-nowrap block relative top-0 left-0 overflow-visible"
                  style={{ zIndex: "1" }}
                >
                  {/* Slide 1 */}
                  <div
                    className="w-full h-full whitespace-normal text-left inline-block relative"
                    style={{
                      transition: "transform 500ms ease 0s",
                      opacity: activeSlide === 1 ? "1" : "0.2",
                      transform: `translateX(-${(activeSlide - 1) * 100}%)`,
                    }}
                  >
                    <div className="h-full grid rounded grid-cols-1 md:grid-cols-2">
                      <div className="">
                        <img
                          src="/assets/slider1.png"
                          alt="slider"
                          className="w-full h-full object-fill"
                        />
                      </div>
                      <div className="bg-white py-4 xs:py-8 px-3 xs:px-6">
                        <h2 className="text-dark-blue font-semibold text-lg xs:text-xl mb-2">
                          1973 Cessna 172M IFR certified
                        </h2>
                        <h2 className="text-dark-blue font-medium text-base mb-2">
                          Equipment and features:
                        </h2>
                        <p className="text-dark-blue text-sm xs:text-base tracking-[-.176px]">
                          Brand New Paint. PS Engineering PMA 6000 Audio Panel,
                          Dual Garmin GNC 255A Nav/ Com’s, Lynx 9000 ADSB
                          Transponder, JPI EDM 730 Engine Monitor
                        </p>
                        <Link href="#" className="flex items-center gap-2 mt-4">
                          <Image
                            src="/assets/slider-learnmoreIcon.svg"
                            alt="slider"
                            width={20}
                            height={20}
                          />
                          <span className="underline text-light-blue text-sm xs:text-base">
                            Learn more
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div
                    className="w-full h-full whitespace-normal text-left inline-block relative"
                    style={{
                      transition: "transform 500ms ease 0s",
                      opacity: activeSlide === 2 ? "1" : "0.2",
                      transform: `translateX(-${(activeSlide - 1) * 100}%)`,
                    }}
                  >
                    <div className="h-full grid rounded  grid-cols-1 md:grid-cols-2">
                      <div className="">
                        <img
                          src="/assets/slider2.png"
                          alt=""
                          className="w-full h-full object-fill"
                        />
                      </div>
                      <div className="bg-white py-4 xs:py-8 px-3 xs:px-6">
                        <h2 className="text-dark-blue font-semibold text-lg xs:text-xl mb-2">
                          1973 Cessna 172M IFR certified
                        </h2>
                        <h2 className="text-dark-blue font-medium text-base mb-2">
                          Equipment and features:
                        </h2>
                        <p className="text-dark-blue text-sm xs:text-base tracking-[-.176px]">
                          Garmin GMA 345 Audio Panel, Garmin GTN 650 WAAS, Lynx
                          9000 ADSB Transponder, Dual Garmin G5’s Eliminating
                          the Gyro Vacuum System, JPI EDM 730 Engine Monitor
                        </p>
                        <Link href="#" className="flex items-center gap-2 mt-4">
                          <Image
                            src="/assets/slider-learnmoreIcon.svg"
                            alt="learn more"
                            width={20}
                            height={20}
                          />
                          <span className="underline text-light-blue text-sm xs:text-base">
                            Learn more
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Slide Btn  */}
                <div
                  className="w-20 flex items-center justify-center absolute top-0 bottom-0 left-0 md:left-[105px] mx-auto overflow-hidden"
                  style={{
                    zIndex: "4",
                    display: activeSlide === 1 ? "none" : "flex",
                  }}
                >
                  <div className="flex justify-center items-center rounded-full w-10 sm:w-16 h-10 sm:h-16 text-white bg-slidebtn cursor-pointer">
                    <FaChevronLeft
                      className="text-xl md:text-3xl"
                      onClick={handlePrevSlide}
                    />
                  </div>
                </div>

                {/* Right Slide Btn  */}
                <div
                  className="w-20 flex items-center justify-center absolute top-0 bottom-0 right-0 mx-auto overflow-hidden"
                  style={{
                    zIndex: "3",
                    display: activeSlide === 2 ? "none" : "flex",
                  }}
                >
                  <div className="flex justify-center items-center rounded-full w-10 sm:w-16 h-10 sm:h-16 text-white bg-slidebtn cursor-pointer">
                    <FaChevronRight
                      className="text-xl md:text-3xl"
                      onClick={handleNextSlide}
                    />
                  </div>
                </div>

                {/* Dots  */}
                <div
                  className="absolute -bottom-16 md:bottom-[-7.6rem] top-auto left-0 right-0 m-auto mt-3 text-center h-10 pt-3 flex justify-center items-center"
                  style={{ zIndex: "2" }}
                >
                  <div
                    className={`bg-blue-300 rounded-full h-3 w-3 mr-3 ${
                      activeSlide === 1 ? "opacity-100" : "opacity-20"
                    }`}
                  ></div>
                  <div
                    className={`bg-blue-300 rounded-full h-3 w-3 ${
                      activeSlide === 2 ? "opacity-100" : "opacity-20"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* Left Side Corner Image  */}
      <div
        className="hidden base:block absolute top-0 bottom-0 left-0 right-auto"
        style={{ zIndex: "1" }}
      >
        <div className="w-full max-w-[8.75rem] rounded block absolute bg-sliderbg top-[3.1rem] bottom-0 left-3 -right-[1.6rem]"></div>
        <img
          src="/assets/slider-left-image.png"
          alt="slider"
          className="w-full h-[100vh] max-h-[100%] max-w-[8vw] object-cover"
        />
      </div>
    </section>
  );
};

export default Slider;
