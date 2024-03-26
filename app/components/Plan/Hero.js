"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


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
    "  Blue Skies Flight School is proud to offer one aircraft for rental.";
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
    <section className="mt-20 md:mt-8 py-6 base:py-40 relative overflow-hidden base:h-[90vh] max-h[700px]">
      <div className="px-3 md:px-5">
        <div className="w-full max-w-screen-xl mx-auto">
          <div
            className="w-full sm:max-w-[29rem] relative flex flex-col justify-center sm:justify-start items-center sm:items-start text-center sm:text-start"
            style={{ zIndex: "10" }}
          >
            <h3 className="text-base font-semibold text-light-blue uppercase mb-2">
              RENT A PLANE
            </h3>

            <h1 className="text-dark-blue font-semibold text-2xl sm:text-xxl leading-[150%] h-[85px] sm:h-[180px]">
              {animatedText}
            </h1>
            <p
              className="text-base text-dark-blue mt-6 sm:mt-4"
              style={{ letterSpacing: "-.176px", lineHeight: "1.5" }}
            >
              We have one 1973 Cessna 172M model available. The price for rental
              on the airplane is subject to change. We will continue to update
              the website with current rental prices as they change.
            </p>
            <Link
              href="/contact"
              className="bg-dodger-blue hover:bg-btn-bghover mt-8 rounded-lg w-full sm:w-fit flex items-center justify-center gap-3 py-3 px-5 text-white font-medium text-lg"
            >
              <Image
                src="/assets/call-us.svg"
                alt="call us"
                width={20}
                height={20}
              />
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="base:absolute base:top-0 base:left-auto base:bottom-0 base:right-0 mt-8 block static">
        <img
          src="/assets/Airplane-header.png"
          alt="airplane header"
          className="h-full hidden base:block object-cover"
          style={{ maxWidth: "790.016px" }}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        />
        <img
          src="/assets/responsive-airplane.png"
          alt="responsive airplane"
          className="sm:h-[529.312px] h-60 w-full block base:hidden object-cover"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        />
      </div>
    </section>
  );
};

export default Hero;
