export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    title: "FrontEnd Intern",
    company_name: "Yolliday LLP",
    icon: "./achievements/yoliday.png",
    iconBg: "#1D1836",
    date: "Sept 2024 - Dec 2024",
    points: [
      "Admin Portal Management: Oversee and enhance the frontend part of the admin portal at Yolliday LLP.",
      "React & TypeScript: Spearheaded the development of the admin portal using modern frontend technologies.",
      "API Integration: Collaborated with backend teams to seamlessly integrate APIs, streamlining data flow and portal operations.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "GSSOC' 24",
    icon: "./achievements/gssoc.png",
    iconBg: "#1D1836",
    date: "May 2024 - Aug 2024",
    points: [
      "Contributed to over 10+ projects and successfully merged 10 pull requests.",
      "Attained the 195th position among participants from all over India in this program.",
    ],
  },
  {
    title: "Bachelor of Engineering",
    company_name: "Chitkara University",
    icon: "./achievements/chitkara.png",
    iconBg: "#1D1836",
    date: "Sep 2022 - Present",
    points: [
      "Achieved and sustained a CGPA of 9.67 up to the present.",
      "Present on the Dean's List for outstanding academic performance.",
    ],
  },
];
