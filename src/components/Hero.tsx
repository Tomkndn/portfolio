"use client"
import React from 'react'
import { Button } from "@nextui-org/react";
import { BorderBeam } from "./ui/Moving-border";
import Terminal from './Terminal';
import { Link } from 'react-scroll';

function Hero() {

  const navigateTodrive = () => {
    window.open(process.env.NEXT_PUBLIC_DRIVE_LINK, "_blank");
  }

  return (
    <div
      id="home-container"
      className="flex justify-center items-center gap-20 lg:mt-20 py-10 mx-10  h-full font-sans"
    >
      <div className="">
        <div className="lg:text-lg text-sm my-3 text-gray-400">
          HELLO THERE, WELCOME TO MY SITE
        </div>
        <p className="lg:text-5xl text-3xl text-wrap my-2 font-medium text-white">
          I'm Kundan Tamsoy
        </p>
        <p className="lg:text-6xl text-4xl text-blue-600 font-bold my-2">
          A Full Stack Developer
        </p>
        <p className="lg:text-5xl text-3xl my-2 text-red-500 font-semibold">
          & Tech Enthusiast
        </p>
        <Button
          color="warning"
          variant="shadow"
          className="lg:text-xl text-base mt-5 h-10 lg:w-36 w-28 rounded-xl bg-yellow-500"
          onClick={() => navigateTodrive() }
        >
          
          Resume
        </Button>
          <Button
            variant="flat"
            className="lg:text-xl text-base lg:mt-5 h-10 lg:w-40 w-32 lg:ms-10 ms-2 "
          >
        <Link to="connect-container" activeClass="active" spy={true}>
            Hire Me 🎉
            <BorderBeam
              size={100}
              borderWidth={1.3}
              duration={3}
              colorFrom="blue"
              colorTo="red"
            />
        </Link>
          </Button>
      </div>
      <div className="lg:h-96 h-72 w-[34rem] hidden md:block shadow-custom-lg">
        <Terminal />
      </div>
    </div>
  );
}

export default Hero
