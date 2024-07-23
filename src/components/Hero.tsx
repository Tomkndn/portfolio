"use client"
import React from 'react'
import { Image,Button } from "@nextui-org/react";
import { BorderBeam } from "./ui/Moving-border";

function Hero() {
  return (
    <div className="flex justify-center items-center gap-20 mt-16 font-sans">
      <div>
        <div className="text-lg my-3 ">HELLO THERE, WELCOME TO MY SITE</div>
        <p className="text-5xl text-wrap my-2 font-medium">I'm Kundan Tamsoy</p>
        <p className="text-6xl text-blue-800 font-bold my-2">
          A Full Stack Developer
        </p>
        <p className="text-5xl my-2 text-red-500 font-semibold">
          & Tech Enthusiast
        </p>
        <Button
          color="warning"
          variant="shadow"
          className="text-xl mt-5 h-10 w-36 rounded-xl bg-yellow-500"
        >
          Resume
        </Button>
        <Button variant="flat" className="text-xl mt-5 h-10 w-40 ms-10 ">
          Hire Me 🎉
          <BorderBeam
            size={100}
            borderWidth={1.3}
            duration={3}
            colorFrom="blue"
            colorTo="red"
          />
        </Button>
      </div>
      <div className="relative flex h-[608px] w-[508px] flex-col items-center justify-center rounded-large">
        <Image
          width={500}
          height={600}
          alt="NextUI hero Image"
          src="/myself.jpg"
        />
        <BorderBeam size={300} borderWidth={4} duration={5} />
      </div>
    </div>
  );
}

export default Hero
