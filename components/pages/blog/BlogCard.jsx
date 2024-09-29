import Link from "next/link";

export default function BlogCard({
  date_added,
  title,
  slug,
  tags,
  description,
  image,
  search,
}) {
  return (
    <Link
      href={"/blog/" + slug}
      className="w-full md:w-1/2 lg:w-1/3 px-4 hover:bg-gray-100 pt-5 rounded-lg duration-300"
    >
      <div className="max-w-[370px] mx-auto mb-10">
        <div className="rounded overflow-hidden mb-8">
          <img src={image} alt="image" className="w-full" />
        </div>
        <div>
          <span className="text-xs leading-loose text-gray-500">
            {new Date(date_added).toDateString()}
          </span>
          <h3>
            <HighlightedText
              text={title}
              highlight={search}
              className="mt-3 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
            />
          </h3>
          <div className="mt-2">
            <HighlightedText
              text={description}
              highlight={search}
              className="text-base"
            />
          </div>
          <div className="flex flex-row items-center gap-3 flex-wrap">
            {tags?.map((val, index) => (
              <span
                key={index}
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2 text-sm"
              >
                <HighlightedText text={val} highlight={search} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
const HighlightedText = ({ text = "", highlight, className = "" }) => {
  if (!highlight) return text;

  const regEscape = (v) => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  const parts = text.split(new RegExp(regEscape(highlight), "ig"));

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: parts.join("<mark>" + highlight + "</mark>"),
      }}
    />
  );
};
