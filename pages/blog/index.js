import React from "react";
import Head from "next/head";
import Header from "@/components/baseWrapper/Header";
import Footer from "@/components/baseWrapper/Footer";
import BlogList from "@/components/pages/blog/BlogList";
import { getMarkdownFiles } from "@/utility/getMarkdownFiles";

export async function getStaticProps() {
  const markdownFiles = await getMarkdownFiles();
  return { props: { markdownFiles } };
}

export default function Blog(props) {
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
        <link rel="icon" href="logo.png" />
      </Head>
      <Header />

      <div className="min-h-screen min-w-full mx-auto">
        <BlogList blogs={props.markdownFiles} />
      </div>
      <Footer />
    </div>
  );
}
