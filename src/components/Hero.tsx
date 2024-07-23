"use client"
import React from 'react'
import { Image,Button } from "@nextui-org/react";
// import { Button } from "./ui/moving-border";

function Hero() {
  return (
    <div className="flex justify-center items-center gap-20 mt-16 font-sans">
      <div>
        <div className="text-lg my-3 ">
          HELLO THERE, WELCOME TO MY SITE
        </div>
        <p className="text-5xl text-wrap my-2 font-medium">I'm Kundan Tamsoy</p>
        <p className="text-6xl text-blue-800 font-bold my-2">
          A Full Stack Developer
        </p>
        <p className="text-5xl my-2 text-red-500 font-semibold">
          & Tech Enthusiast
        </p>
        <Button>Resume</Button>
      </div>
      {/* <Button containerClassName="h-[600px] w-[500px]" borderClassName=""> */}
        <Image
          width={500}
          height={600}
          alt="NextUI hero Image"
          src="/myself.jpg"
        />
      {/* </Button> */}
    </div>
  );
}

export default Hero
