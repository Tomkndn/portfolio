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
      "Contributed to 10+ projects and Successfully merged 10 PRs.",
      "Achieved 195th rank all over the India in this program.",
    ],
  },
  {
    title: "Bachelor of Engineering",
    company_name: "Chitkara University",
    icon: "./achievements/chitkara.png",
    iconBg: "#1D1836",
    date: "Sep 2022 - Present",
    points: [
      "Scored 9.67 CGPA till present.",
      "Present in a Dean's list of the college.",
    ],
  },
];
