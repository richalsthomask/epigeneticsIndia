import React from "react";
import Head from "next/head";
import Header from "@/components/baseWrapper/Header";
import Footer from "@/components/baseWrapper/Footer";
import CoursePage from "@/components/pages/courses/CoursePage";

export default function Location(data) {
  return (
    <div className="w-full h-full">
      <Head>
        <title>ascas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={"asc"} />
      </Head>
      <div
        style={{ backgroundColor: "#FFF6EA" }}
        className="w-full flex justify-center"
      >
        <Header />
      </div>
      <CoursePage data={data} />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const courses = ["a", "ass"];
  const paths = courses.map((course) => {
    return { params: { course } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const locationData = {
    a: {},
  };
  return {
    props: locationData[params.course],
  };
}
