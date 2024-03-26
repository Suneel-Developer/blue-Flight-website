"use client";
import { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import Works from "./components/Home/Works";
import FlightCosts from "./components/Home/FlightCosts";
import Location from "./components/Home/Location";
import FlightWithUs from "./components/Home/FlightWithUs";
import Footer from "./components/Footer";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "./components/Home/Slider";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      {/* Meta tag &  content  */}
      <Head>
        <meta
          content="Blue Skies Flight School offers the best experience in the Oklahoma City metropolitan area when it comes to flight training.  We offer training to take you from an introductory level to a fully licensed private pilot."
          name="description"
        />
        <meta content="Blue Skies Flight School: Home" property="og:title" />
        <meta
          content="Blue Skies Flight School offers the best experience in the Oklahoma City metropolitan area when it comes to flight training.  We offer training to take you from an introductory level to a fully licensed private pilot."
          property="og:description"
        />
      </Head>
      <Header />
      <Hero />
      <Works />
      <Slider />
      <FlightCosts />
      <Location />
      <FlightWithUs />
      <Footer />
    </main>
  );
}
