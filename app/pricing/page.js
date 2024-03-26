"use client";

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Pricing/Hero.js";
import Table from "../components/Pricing/Table.js";

const Pricing = () => {
  return (
    <div>
      {/* Meta tag & content  */}
      <Head>
        <meta
          content="There are many factors that go into the cost of completing your Private Pilot License. You will need to purchase learning materials, a headset, and a logbook at the minimum."
          name="description"
        />
        <meta content="Flight School Cost" property="og:title" />
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header />
      <Hero />
      <Table />
      <Footer />
    </div>
  );
};

export default Pricing;
