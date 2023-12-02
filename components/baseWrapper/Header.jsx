import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { usePathname } from "next/navigation";

import { MenuIcon } from "@/components/common/appIcon";
import SidebarMenu from "./Menu";

const links = [
  { title: "Home", link: "/" },
  { title: "Blogs", link: "/blog" },
  { title: "Shop", link: "/shop" },
  { title: "Courses", link: "/course" },
];

export default function Header({ className }) {
  const [menu, set_menu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full absolute z-10">
      <div className="lg:hidden flex flex-row justify-between items-center gap-4 w-full py-5 px-5 border-b">
        <a href="/" className="cursor-pointer">
          <Image
            src="/helpsquad-logo-orange-navy.png"
            alt="Logo"
            width="130"
            height="36"
          />
        </a>
        {pathname !== "/blog" && <BlogSearch />}
        <div
          onClick={() => {
            set_menu(!menu);
          }}
        >
          <MenuIcon
            className={
              "h-5 w-5 cursor-pointer text-gray-800 hover:text-gray-500"
            }
          />
        </div>
      </div>
      <SidebarMenu
        className="lg:hidden"
        show={menu}
        set_show={() => {
          set_menu(false);
        }}
      />
      <header
        className={
          "mt-2 text-gray-600 body-font max-w-7xl w-full mx-auto hidden lg:block " +
          className
        }
      >
        <div className="container w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:items-end justify-between gap-5">
          <Link href="/">
            <div className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-4 lg:mb-0 ">
              <Image
                src="/helpsquad-logo-orange-navy.png"
                alt="Logo"
                width="155"
                height="43"
              />
            </div>
          </Link>
          <nav className="flex flex-wrap gap-3 md:gap-5 text-center items-center text-sm md:text-base justify-center ">
            {links.map((item, index) => {
              if (item.title === "Locations")
                return (
                  <Menu
                    as="div"
                    key={index}
                    className="relative z-30 inline-block"
                  >
                    <Menu.Button className="mr-5 transform delay-100 duration-100 cursor-pointer hover:opacity-70">
                      <a
                        style={{
                          color: "#211C52",
                          fontWeight: "500",
                        }}
                        className="flex items-center gap-1"
                      >
                        <span>Locations</span>
                      </a>
                    </Menu.Button>
                  </Menu>
                );
              else
                return (
                  <Link href={item.link} key={index}>
                    <div
                      style={{ color: "#211C52", fontWeight: "500" }}
                      className={
                        "mr-5 transform duration-100 whitespace-pre hover:opacity-70 cursor-pointer"
                      }
                    >
                      {item.title}
                    </div>
                  </Link>
                );
            })}
            {pathname !== "/blog" && <BlogSearch />}
          </nav>
        </div>
      </header>
    </div>
  );
}

const BlogSearch = () => (
  <form action="/blog">
    <div className="relative">
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
          id="default-search"
          className="block w-full p-2.5 pl-10 pr-20 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Blogs"
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </div>
  </form>
);
