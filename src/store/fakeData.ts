import { image } from "./fakeimage";
import { Summary } from "./userData";

export const fakeData: Summary = {
  image,
  global: {
    name: "Denis",
    surname: "Putnov",
    country: "Russia",
    position: "Junior Software Engineer",
    relocation: true,
  },
  contacts: [
    { name: "Phone", value: "79876543210" },
    { name: "Telegram", value: "@grnbows" },
    { name: "LinkedIn", value: "@grnbows" },
    { name: "GitHub", value: "@grnbows" },
  ],
  language: [
    { name: "English", level: "Upper Intermediate" },
    { name: "Russian", level: "Proficiency" },
  ],
  skills: [
    "React",
    "TypeScript",
    "Redux",
    "MobX",
    "NodeJS",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
  ],
  experience: [
    {
      time: { start: "10/2021", end: "Present" },
      companyName: "NetCracker",
      position: "Junior Software Engineer",
      description:
        "Highloaded dashboard app development with React, TypeScript and Redux. Auto-Testing with TestCafe and ReactSelector. Working in team with 15+ members.",
    },
  ],
  education: [
    {
      time: { start: "09/2019", end: "Present" },
      name: "Voronezh State University",
      speciality: "Computer Science",
      grade: "Bachelor",
    },
    {
      time: { start: "03/2022", end: "Present" },
      name: "EPAM & The Rolling Scopes Courses",
      speciality: "Front-End development with React",
      grade: "Stage 1+",
    },
  ],
};
