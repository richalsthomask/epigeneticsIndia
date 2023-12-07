import React from "react";
import Image from "next/image";
import { contact_info } from "@/data/contactInfo";
import { social_info } from "@/data/socialInfo";
import Link from "next/link";

const navigation = [
  { title: "Home", link: "/" },
  { title: "Blogs", link: "/blog" },
  { title: "Shop", link: "/shop" },
  { title: "Courses", link: "/course" },
];

export default function Footer({}) {
  return (
    <footer
      style={{ backgroundColor: "#FCFCFC" }}
      className="text-gray-600"
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto pt-9 px-4 sm:px-6 lg:pt-16 pb-3 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 gap-12 md:gap-28">
          <div className="space-y-4 xl:col-span-1 flex lg:block flex-col items-center text-center lg:text-justify">
            <Image
              className="h-10 opacity-90"
              src="/helpsquad-logo-orange-navy.png"
              alt="Logo"
              width="150"
              height="45"
            />
            <p className="text-sm opacity-80">
              Our squad of professionals are here to serve you.
              <span className="block pt-2">Contact Us </span>
            </p>
            <div className="mt-1 flex space-x-4 opacity-60">
              {social_info.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="bg-zinc-300 rounded-full p-2 text-gray-800 hover:text-yellow-500"
                >
                  <span className="sr-only">{item.title}</span>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 gap-8 lg:mt-0 lg:col-span-2 ">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className="flex flex-col items-center md:items-baseline">
                  <h3
                    className="text-xl"
                    style={{ fontFamily: "PT Serif", fontWeight: "450" }}
                  >
                    Services
                  </h3>
                </div>
                <div className="mt-4 flex flex-col gap-3 opacity-80">
                  {navigation.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center md:justify-start items-center"
                    >
                      <Link
                        href={item.link}
                        className="text-sm transform delay-100 hover:text-yellow-500"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div className="flex flex-col items-center md:items-baseline">
                  <h3
                    className="text-xl"
                    style={{ fontFamily: "PT Serif", fontWeight: "450" }}
                  >
                    Contact Us
                  </h3>
                </div>
                <div className="mt-4 space-y-4 opacity-70 flex flex-col items-center md:items-start">
                  {contact_info.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.link}
                        target={item.name === "Address" ? "_blank" : ""}
                        className={
                          "text-sm transform delay-100 flex flex-row items-start justify-center gap-2 " +
                          (item.link === "#"
                            ? "cursor-default"
                            : "hover:text-yellow-500")
                        }
                      >
                        <item.icon
                          className={
                            "text-yellow-500 w-5 mt-1 pt-px " +
                            (index === 0 ? "h-4" : "h-5")
                          }
                        />{" "}
                        <div className="ml-1"> {item.value}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full mx-auto flex flex-row justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} EpigeneticsIndia | All rights reserved
          </p>
          {/* <div className="flex flex-row gap-2 text-xs text-gray-500">
            <Link className="hover:text-yellow-500" href="/terms">
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link
              className="hover:text-yellow-500"
              target="_blank"
              href="/privacy-policy.html"
            >
              Privacy Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
