"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// AOS Animation 
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  useEffect(() => {
    Aos.init();
  }, []); 


  // Text Animation
  const [animatedText, setAnimatedText] = useState("");
  const text =
    "We offer the best flight training experience in the Oklahoma City metropolitan area.";
  const characters = text.split("");
  let currentCharacterIndex = 0;

  const showNextCharacter = () => {
    const currentCharacter = characters[currentCharacterIndex];

    if (currentCharacter === "|") {
      currentCharacterIndex++;
    }

    const charactersToShow = characters
      .slice(0, currentCharacterIndex + 1)
      .join("");
    setAnimatedText(charactersToShow);

    currentCharacterIndex++;

    if (currentCharacterIndex < characters.length) {
      setTimeout(showNextCharacter, 2000 / (characters.length - 1));
    }
  };

  useEffect(() => {
    showNextCharacter();
  }, []);

  return (
    <section className="hero-right-mobile h-90 relative w-full md:bg-herobg flex items-center justify-center px-5 mt-[70px]">
      <div className="max-w-screen-xl w-full mx-auto z-40">
        <div className="w-full max-w-[40rem] mx-auto md:mx-0 flex flex-col justify-center md:items-start items-center md:justify-start">
          <div className="mb-4 w-full max-w-60 bg-transparent-blue rounded-10 hidden md:flex items-center gap-2 py-1 px-4">
            <Image
              src="/assets/safetyIcon.svg"
              alt="safety Icon"
              width={19}
              height={22}
              loading="lazy"
            />
            <h3 className="text-white text-base">Safety is our first step.</h3>
          </div>

          {/* that text animation  */}
          <h1 className="text-white text-2xl md:text-[32px] base:text-xxl font-semibold leading-[120%] mb-8 text-center md:text-start h-[115px] sm:h-[100px] md:h-[115px] base:h-[144px]">
            {animatedText}
          </h1>

          <div className="flex items-center">
            <Link
              href="/pilot"
              className="bg-shade-blue mr-4 rounded-lg flex items-center py-4 px-7 max-w-fit text-white font-medium text-lg"
            >
              <Image
                src="/assets/circle-arrow.svg"
                alt="circle arrow"
                width={24}
                height={24}
                className="mr-3"
                loading="lazy"
              />
              Become a Pilot
            </Link>
            <Link
              href="/contact"
              className="bg-dodger-blue rounded-lg text-center py-4 px-7 max-w-fit text-white font-medium text-lg hidden md:block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-90 max-h-full max-w-[28vw] base:max-w-[40vw] hidden md:block top-0 bottom-0 right-0 left-auto">
        <img
          src="/assets/hero-image.png"
          alt="hero image"
          className="w-full h-full object-cover"
          loading="lazy"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>

      <div className="block md:hidden">
        <img
          src="/assets/tiny-airplane-transparent.png"
          alt="tiny-airplane-transparent"
          className="w-full absolute bottom-20 top-auto -left-24"
          loading="lazy"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>

      <div className="px-3 w-full absolute top-auto right-0 left-0 -bottom-5">
        <div className="w-full max-w-72 sm:max-w-96 md:max-w-2xl h-fit bg-white rounded-xl mx-auto p-2 flex items-center gap-2">
          <Image
            src="/assets/right-double-arrow.svg"
            alt="right double arrow"
            width={24}
            height={24}
            loading="lazy"
          />
          <p className="text-center text-base text-dark-blue">
            We will take you from an introductory level to a fully licensed
            private pilot.
          </p>
          <Image
            src="/assets/left-double-arrow.svg"
            alt="left double arrow"
            width={24}
            height={24}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
