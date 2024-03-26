"use client"
import React, {useState, useEffect} from "react";
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
    "If you are Interested in learning to fly but aren't sure yet";
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
    <section className="mb-[5vh] mt-24">
      <div className="px-3 md:px-5">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="pilot-hero grid gap-y-8 base:gap-x-8">
            <div className="w-full flex flex-col justify-center sm:justify-start text-center sm:text-start sm:max-w-[26.5rem]">
              <h3 className="text-light-blue font-semibold text-base mb-2">
                BECOME A PILOT
              </h3>
              <h1 className="text-dark-blue font-semibold text-2xl sm:text-xxl leading-[150%] h-[85px] sm:h-[180px]">
                {animatedText}
              </h1>
              <p className="text-dark-blue text-sm sm:text-base mt-5 ms:mt-4 leading-[1.5] tracking-[-.176px]">
                Consider scheduling an introductory flight. This is intended to
                be an introduction to flight training and you will spend about
                an hour in the air. If you want to you will be given the
                opportunity to fly the aircraft.
              </p>

              <Link
                href="/contact"
                className="w-full max-w-48 bg-dodger-blue rounded-lg flex items-center justify-center gap-3 py-3 px-5 text-white font-medium text-lg mx-auto sm:mx-0 mt-8"
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

            <div className="grid grid-cols-3">
              <img
                src="/assets/card-1.png"
                alt="card-1"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
              <img
                src="/assets/card-2.png"
                alt="card-2"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
              <img
                src="/assets/card-3.png"
                alt="card-3"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              />
              <img
                src="/assets/card-4.png"
                alt="card-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <img
                src="/assets/card-5.png"
                alt="card-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <img
                src="/assets/card-6.png"
                alt="card-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
