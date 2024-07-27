"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/Infinity-moving-cards";
import { testimonials } from "@/skills";

function Skills() {

  return (
    <div className="lg:py-20 py-26 mx-10 h-full font-sans">
      <div className="lg:text-5xl text-4xl my-5 text-center text-white">
        Skills
      </div>
      <div className="">
        <InfiniteMovingCards
          items={testimonials[0]}
          direction="right"
          speed="normal"
        />
        <InfiniteMovingCards
          items={testimonials[1]}
          direction="left"
          speed="normal"
        />
      </div>
    </div>
  );
}

export default Skills;
