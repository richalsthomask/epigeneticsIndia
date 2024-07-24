import React from "react";
import Head from "next/head";
import Header from "@/components/baseWrapper/Header";
import Footer from "@/components/baseWrapper/Footer";
import BlogPage from "@/components/pages/blog/BlogPage";
import { getMarkdownFiles } from "@/utility/getMarkdownFiles";
import { getMarkdownFile } from "@/utility/getMarkdownFile";

export default function Location(data) {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Blog | {data.title}</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content={"asc"} />
      </Head>
      <div
        style={{ backgroundColor: "#FFF6EA" }}
        className="w-full flex justify-center"
      >
        <Header />
      </div>
      <BlogPage blog={data.blog} author={data.author} />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const blogs = await getMarkdownFiles();

  const paths = blogs.map((blog) => {
    return { params: { blog: blog.slug, ...blog } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = await getMarkdownFile(params.blog);
  const author = await getMarkdownFile(blog.author, "authors");
  return {
    props: { blog, author },
  };
}
