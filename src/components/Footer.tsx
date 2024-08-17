import React from 'react';
import { Avatar } from "@nextui-org/react";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import Link from 'next/link';

interface contact{
    link: string;
    icon: React.ReactNode;
}

const Footer: React.FC = () => {
    const connect: contact[] = [
      {
        link: "https://github.com/tomkndn",
        icon: <FaGithub />,
      },
      {
        link: "https://leetcode.com/u/Tomkndn/",
        icon: <SiLeetcode />,
      },
      {
        link: "https://www.linkedin.com/in/kundan-tamsoy-646023230/",
        icon: <FaLinkedin />,
      },
      {
        link: "https://www.instagram.com/tom_k_n_d_n/",
        icon: <FaInstagram />,
      },
      {
        link: "https://x.com/tomk_n_d_n",
        icon: <FaXTwitter />,
      },
    ];

    return (
      <footer className=" rounded-lg shadow ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="#"
              className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/logo.png"
                className="h-12"
                alt="Tomkndn Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Tomkndn
              </span>
            </Link>
            <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4">
              {connect.map((ele, ind) => {
                return (
                  <li key={ind}>
                    <Link href={ele.link}>
                      <Avatar icon={ele.icon} size="sm" className="text-2xl" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Tomkndn™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
};

export default Footer;