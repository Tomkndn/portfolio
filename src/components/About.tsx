"use client"
import React from 'react'
import { Image } from "@nextui-org/react";

function About() {
  return (
    <div className="flex flex-row-reverse justify-center items-center gap-20 lg:py-40 py-26 mx-10 h-full font-sans">
      <div className="">
        <div className="lg:text-5xl text-4xl my-5 text-center text-white">
          What I do?
        </div>
        <p className="lg:text-xl text-lg w-[40rem] text-wrap my-2 font-medium text-gray-50 tracking-tight">
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
      <div className="lg:h-96 h-72 w-[34rem] hidden md:block">
        <Image width={500} alt="NextUI hero Image" src="/image.png" />
      </div>
    </div>
  );
}

export default About
