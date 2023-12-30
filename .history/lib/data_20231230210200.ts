import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import roomistImg from "@/public/roomist.png";
import goshu from "@/public/goshu.png";
import vipNumber from "@/public/vipNumber.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Kinana, Haryana",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "New Delhi, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Rohtak, Haryana",
    description:
      "I'm now a full-stack developer working at Mohesu. My stack includes Flutter, Angular, React, Next.js, TypeScript, Tailwind.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Roomist",
    description:
      "I worked as a full-stack developer on this project for 6 months. Users can book hotels and hotels can manage their customers using this app.",
    tags: ["Flutter", "Dart"],
    imageUrl: roomistImg,
  },
  {
    title: "Goshu",
    description:
      "A destination for top-quality office products, presentation supplies, and whiteboards. It has features like filtering, sorting and pagination.",
    tags: ["Flutter", "Dart", "Angular", "TypeScript", "Tailwind", "Appwrite"],
    imageUrl: goshu,
  },
  {
    title: "Vip Number",
    description:
      "A web app for purchasing vip numbers. It contains all kinds of vip numbers. It has features like filtering, sorting and pagination.",
    tags: ["Flutter", "Dart", "Appwrite"],
    imageUrl: vipNumber,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Dart",
  "Flutter",
  "Angular",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Appwrite",
  "Firebase",
  "Postman",
] as const;
