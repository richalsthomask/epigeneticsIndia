import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

import { FourSquareIcon2 } from "@/components/common/appIcon";

const icon_className = "h-6 w-6";

const links = [
  { title: "Home", link: "/" },
  { title: "Blogs", link: "/blog" },
  { title: "Shop", link: "/shop" },
  { title: "Courses", link: "/course" },
];

export default function SidebarMenu({ show, set_show, className }) {
  return (
    <div
      onClick={set_show}
      className={
        "fixed inset-0 bg-gray-200 bg-opacity-50 text-gray-700 z-20 " +
        (show ? "" : "hidden ") +
        className
      }
    >
      <Transition
        show={show}
        className="absolute right-0 shadow-md"
        enter="transition-all transform duration-200"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-all transform duration-200"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="mx-auto h-screen flex flex-wrap flex-col items-center bg-white text-right"
        >
          <nav className="flex flex-col flex-wrap text-base justify-center sm:ml-2 mt-5 mx-3 pr-6">
            <div className="flex title-font font-medium items-center text-gray-900 mt-2 mb-3 w-full justify-end">
              <Link href="/">
                <Image
                  src="/helpsquad-logo-orange-navy.png"
                  alt="Logo"
                  width="170"
                  height="50"
                />
              </Link>
            </div>

            <div className="h-px w-full m-3 bg-gray-200" />

            <div className="flex flex-col">
              {links.map((item, index) => {
                return (
                  <Link href={item.link} key={index}>
                    <div
                      className={
                        "cursor-pointer hover:text-yellow-600 hover:bg-yellow-100 flex flex-row-reverse items-center gap-5 transform delay-100 duration-100 w-full rounded my-1 py-2 px-3"
                      }
                    >
                      <span className="">{item.icon}</span>
                      {item.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  );
}
