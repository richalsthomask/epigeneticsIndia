import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { useSearchParams } from "next/navigation";

export default function BlogList({ blogs }) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const filteredBlogPosts = blogs.filter((frontMatter) => {
    const searchContent =
      frontMatter.title +
      frontMatter.description +
      frontMatter.author +
      frontMatter.date +
      frontMatter.tags.join(" ");
    return searchContent.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const urlPropsSearch = searchParams.get("search");
    setSearch(urlPropsSearch ?? "");
  }, [searchParams]);

  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Recent News
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
              <div className="mt-4 relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <div className="w-full flex flex-row">
                  <input
                    name="search"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="block w-full p-2.5 pl-10 pr-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Blogs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {filteredBlogPosts?.map((blog, index) => (
            <BlogCard key={index} {...blog} search={search.trim()} />
          ))}
        </div>
      </div>
    </section>
  );
}
