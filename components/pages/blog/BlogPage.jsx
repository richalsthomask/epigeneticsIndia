import {
  FacebookIcon,
  MailIcon2,
  TwitterIcon,
} from "@/components/common/appIcon";
import Link from "next/link";

export default function BlogPage({ blog, author }) {
  return (
    <div className="mt-40 max-w-screen-lg mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {blog.title}
            </h2>
            <div className="flex flex-row items-center gap-3 flex-wrap">
              {blog.tags.map((val, index) => (
                <Link
                  key={index}
                  href={"/blog?search=" + val}
                  className="py-2 text-green-700 hover:text-green-800 transform hover:scale-110 duration-300 inline-flex items-center justify-center mb-2"
                >
                  {val}
                </Link>
              ))}
            </div>
          </div>

          {blog.image && (
            <img src={blog.image} className="w-full object-cover lg:rounded" />
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <div
              className="flex flex-col gap-4"
              dangerouslySetInnerHTML={{
                __html: blog.contentHtml,
              }}
            />
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                {author.avatar && (
                  <img
                    src={author.avatar}
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {author.name}
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    {author.occupation}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
                <div
                  className="flex flex-col gap-4"
                  dangerouslySetInnerHTML={{
                    __html: author.contentHtml,
                  }}
                />
              </p>
              <div className="flex flex-row items-center flex-wrap gap-5">
                {author.twitter && (
                  <Link href={author.twitter} className="hover:opacity-60">
                    <TwitterIcon className="h-6" />
                  </Link>
                )}
                {author.facebook && (
                  <Link href={author.facebook} className="hover:opacity-60">
                    <FacebookIcon className="h-6" />
                  </Link>
                )}
                {author.email && (
                  <Link href={author.email} className="hover:opacity-60">
                    <MailIcon2 className="h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
