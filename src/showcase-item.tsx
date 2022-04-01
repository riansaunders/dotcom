import React from "react";
import { HoldMyNoteDisplay } from "./components/displays/holdmynote-display";
import { ParagonDisplay } from "./components/displays/paragon-display";
import { ScriptingLanguageDisplay } from "./components/displays/scripting-language-display";

export interface ShowcaseItem {
  name: string;
  description: string;
  imageURL?: string;
  url?: string;
  tags: string[];
  display?: React.ReactNode;
}

export const items: ShowcaseItem[] = [
  {
    name: "Startup: ParagonAIO",
    imageURL: "/images/paragon.png",
    description: `A multi-year software company that was founded by myself. It has
    serviced thousands of customers across its tenure. `,
    display: ParagonDisplay,
    tags: [
      "MongoDB",
      "Redis",
      "Docker",
      "PostgreSQL",
      "React",
      "Node",
      "Electron",
      "Firebase",
      "Material-UI",
      "TailwindCSS",
      "GraphQL",
      "REST",
      "AWS",
      "Vercel",
      "TypeScript",
      "GO",
      "Python",
    ],
  },
  {
    name: "Business Management Software",
    imageURL: "/images/manager-ipad.png",
    description:
      "Business management software with companion iOS and Android apps that include a suite of industry standard tools. This project is under active development.",
    tags: [
      "MongoDB",
      "Redis",
      "Docker",
      "PostgreSQL",
      "React",
      "ReactNative",
      "Node",
      "GraphQL",
      "REST",
      "Electron",
      "TypeScript",
      "Python",
      "AWS",
      "DataDog",
    ],
  },
  {
    name: "HoldMyNote",
    imageURL: "/images/holdmynote.png",
    description:
      "A supercharged full stack organizational tool. It supports user authentication, collaboration, note saving, deletion, and public sharing. ",
    display: HoldMyNoteDisplay,
    url: "https://github.com/riansaunders/holdmynote",
    tags: [
      "MongoDB",
      "React",
      "Node",
      "Firebase",
      "Material-UI",
      "GraphQL",
      "TypeScript",
      "REST",
    ],
  },

  {
    name: "Freelance: Wordpress",
    imageURL: "/images/wordpress.png",
    description:
      "Various wordpress website maintenance, theme modification and theme creation done by me with or without a small team. If you'd like to know more, contact me for more details",
    tags: ["PostgreSQL", "MySQL", "Wordpress", "PHP"],
  },
  {
    name: "Scripting Language",
    imageURL: "/images/java.png",
    description:
      "A scripting language with virtual machine written in Java. It has support for basic arithmatic, local functions and global functions. This project was inspired by RuneScript, a language internally used on the game RuneScape.",
    display: ScriptingLanguageDisplay,
    url: "https://github.com/riansaunders/botscript",
    tags: ["Java"],
  },
];
