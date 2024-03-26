"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Pilot/Hero";
import RequiredHours from "../components/Pilot/RequiredHours";
import IntroductoryFlight from "../components/Pilot/IntroductoryFlight";
import License from "../components/Pilot/License";
import Steps from "../components/Pilot/Steps";
import PrefightPlanning from "../components/Pilot/PrefightPlanning";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const Pilot = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      {/* Meta tags & Description  */}
      <Head>
        <meta
          content="Many flight schools offer a discovery flight or introductory flight.  This is intended to be a quick overview of the flying experience and what training will be like."
          name="description"
        />
        <meta
          content="Introductory Flight - Blue Skies Flight School"
          property="og:title"
        />
        <meta content="Webflow" name="generator"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        ></meta>
      </Head>
      <Header />
      <Hero />
      <IntroductoryFlight />
      <License />
      <RequiredHours />
      <Steps />
      <PrefightPlanning />
      <Footer />
    </div>
  );
};

export default Pilot;
