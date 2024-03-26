"use client";
import React, { useEffect } from "react";
import Head from "next/head";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/About/Hero";
import Team from "../components/About/Team";
import Founders from "../components/About/Founders";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      {/* Meta tag & content */}
      <Head>
        <meta
          content="Blue Skies Flight School offers the best experience in the Oklahoma City metropolitan area when it comes to flight training.  We offer training to take you from an introductory level to a fully licensed private pilot."
          name="description"
        />
        <meta content="About Blue Skies" property="og:title" />
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Header />
      <Hero />
      <Team />
      <Founders />
      <Footer />
    </div>
  );
};

export default About;
