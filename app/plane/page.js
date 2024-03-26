"use client";
import React, { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Plan/Hero.js";
import OurCraft from "../components/Plan/Ourcraft.js";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const Plane = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      {/* meta tag & content  */}
      <Head>
        <meta
          content="Blue Skies Flight School is proud to offer two aircraft for rental. We have two 1973 Cessna 172M models available.  The prices for rental on these aircraft are subject to change."
          name="description"
        />
        <meta
          content="Our Aircraft - Blue Skies Flight School"
          property="og:title"
        />
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header />
      <Hero />
      <OurCraft />
      <Footer />
    </div>
  );
};

export default Plane;
