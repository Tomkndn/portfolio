"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Image } from "@nextui-org/react";
import { items, Item } from "@/project";
import Link from "next/link";

function Projects() {
  return (
    <div
      id="projects-container"
      className="lg:py-20 py-26 mx-10 h-full font-sans"
    >
      <div className="lg:text-5xl text-4xl my-5 text-center text-white">
        Projects
      </div>

      <BentoGrid className="max-w-[90rem] mx-auto my-20">
        {items.map((item, i) => (
          <Link href={item.link} key={i}>
            <BentoGridItem
              key={i}
              title={item.title}
              header={<Skeleton img={item.header} />}
              icon={<IconSkeleton txt={item.icon} />}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          </Link>
        ))}
      </BentoGrid>
    </div>
  );
}

export default Projects;

const Skeleton = ({ img }: { img: string }) => {
  return (
    <Image
      isZoomed
      alt="NextUI hero Image"
      src={img}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
    />
  );
};
const IconSkeleton = ({ txt }: { txt: string[] }) => {
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
  ];
  return (
    <div className="flex gap-2 flex-wrap">
      {txt.map((ele,index) => {
      const colorClass = colors[index % colors.length] || "text-neutral-500";
        return <p key={index} className={`${colorClass} text-opacity-80`}>{`#${ele}`}</p>;
    })}
    </div>
  )
};
