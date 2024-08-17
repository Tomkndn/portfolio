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
