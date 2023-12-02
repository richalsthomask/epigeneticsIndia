import React from "react";
import Head from "next/head";
import Hero from "@/components/pages/hero/Hero";
import Header from "@/components/baseWrapper/Header";
import Footer from "@/components/baseWrapper/Footer";
import Shop from "@/components/pages/Shop";

export default function Home() {
  return (
    <div className="min-w-full overflow-x-hidden">
      <Head>
        <title>
          Help Squad - Handyman in Los Angeles, San Francisco and OC
        </title>
        <meta
          name="description"
          content="Help Squad handyman service has been servicing Los Angeles, San Francisco and Orange County for over 12 years. Whether you need a remodel or home repair, Help Squad has you covered."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-screen min-w-full mx-auto">
        <Shop />
      </div>
      <Footer />
    </div>
  );
}
