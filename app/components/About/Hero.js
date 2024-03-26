"use client"
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
    " We are located at the Edmond/Guthrie airport.";
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
    <section className="pt-[20vh] bg-dark-blue">
      <div className="px-3 md:px-5">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="w-full max-w-5xl mx-auto">
            <h3 className="text-light-blue font-semibold uppercase text-base text-center">
              About Blue Skies
            </h3>
            <h3 className="text-white font-semibold text-2xl base:text-xxl text-center mt-4">
             {animatedText}
            </h3>
            <p className="text-white text-sm md:text-base text-center leading-[1.5] mt-4">
              Call us today to come out and meet an instructor or have an
              introductory flight.
            </p>
          </div>
        </div>
      </div>

      <div
        ata-aos="fade-right"
        data-aos-duration="2000"
        className="w-full h-[300px] md:h-[422px] mt-12"
      >
        <iframe
          className="w-full h-full"
          src="https://api.mapbox.com/styles/v1/leouxui/ckxjcvqo00tx814pfq8rxdlgt.html?title=false&amp;access_token=pk.eyJ1IjoibGVvdXh1aSIsImEiOiJja2k4dm9udTIwOW15MnlvYXpid2lqNWllIn0.Nlak8iPGWvNhrRAI0ftBrg&amp;zoomwheel=false#17.82/35.852175/-97.417374"
          title="Blueskies Flight School"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
