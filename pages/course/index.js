import React from "react";
import Head from "next/head";
import Header from "@/components/baseWrapper/Header";
import Footer from "@/components/baseWrapper/Footer";
import CourseList from "@/components/pages/courses/CourseList";

export default function Home() {
  return (
    <div className="min-w-full overflow-x-hidden">
      <Head>
        <title>
          EpigeneticsIndia - Handyman in Los Angeles, San Francisco and OC
        </title>
        <meta
          name="description"
          content="EpigeneticsIndia handyman service has been servicing Los Angeles, San Francisco and Orange County for over 12 years. Whether you need a remodel or home repair, EpigeneticsIndia has you covered."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-screen min-w-full mx-auto">
        <CourseList />
      </div>
      <Footer />
    </div>
  );
}
