"use client";
import React, {useState, useEffect} from "react";

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
      " Flight school Coast";
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
    <section className="mt-20">
      <div className="w-full max-w-screen-xl mx-auto px-3 md:px-5 py-10 md:py-20">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h3 className="text-base font-semibold text-light-blue uppercase">
            pricing
          </h3>
          <h1 className="md:text-xxl text-3xl font-semibold text-dark-blue my-5">
           {animatedText}
          </h1>
          <p className="text-dark-blue text-sm md:text-base leading-normal tracking-tight">
            Below you will find a cost breakdown based on the minimum
            requirements set forth by the FAA. While there are some students who
            are able to fly the minimums and take their check-ride, it is more
            common to fly between 50 and 70 hours before being ready to complete
            your check ride.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="w-full h-screen max-h-96 max-w-full"
      >
        <img
          src="/assets/pricing-hero.png"
          alt="hero image"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
