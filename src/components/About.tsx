"use client"
import React from 'react'
import { Image } from "@nextui-org/react";

function About() {
  return (
    <div className="  flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-10 lg:gap-20 mx-5 h-full font-sans my-10 lg:py-20">
      <div className="md:my-10">
        <div className="lg:text-5xl md:text-3xl text-2xl text-center text-white">
          What I do?
        </div>
        <p className="lg:text-xl text-base  lg:w-[38rem] md:w-[20rem] text-wrap my-2 font-medium text-gray-50 tracking-tight">
          As a passionate Full Stack Developer, I create dynamic web
          applications using modern technologies like React, Next.js, Node.js,
          Prisma, Zod, and MongoDB. I specialize in both front-end and back-end
          development, crafting user-friendly interfaces and robust backend
          systems. My projects integrate seamless solutions, leveraging the
          power of server-side rendering, efficient data management, and agile
          methodologies. Constantly learning and adapting, I stay updated with
          industry trends to deliver high-quality, scalable web solutions.
        </p>
      </div>
      <div className="text-center">
        <Image
          // width={500}
          alt="NextUI hero Image"
          src="/image.png"
          className="h-[300px] w-[300px] lg:h-[550px] lg:w-[550px]"
        />
      </div>
    </div>
  );
}

export default About
