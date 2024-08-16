"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, Experience } from "../achievements"; 

type TimelineCardProps = {
  experience: Experience;
};

const TimelineCard: React.FC<TimelineCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      date={experience.date}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="h-4/5 w-4/5 object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-white-200 text-base">{experience.company_name}</p>
      </div>
      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-sm text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Work: React.FC = () => {
  return (
    <section id="experience" className="my-20">
      <div className="text-center mb-12">
        <p className="text-lg text-white-200">What I have done so far</p>
        <h2 className="text-4xl font-bold text-white">Achievement</h2>
      </div>
      <div className="flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <TimelineCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Work;
