"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import about from "@/public/about.jpeg";
import TapButton from "./TapButton";

const Tap_Data = [{title:"Skills",id:"skills",content:(<ul><li>Reactjs</li><li>Nodejs</li></ul>)}, {title:"Education",id:"education",content:(<ul><li>Bachelor of Commerce(Computer Applications)</li><li>Master of Computer Applications</li></ul>)}, {title:"Skills",id:"skills",content:(<ul><li>Reactjs</li><li>Nodejs</li></ul>)}];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  console.log(tab);
  const [isPending, startTransition] = useTransition();
  const handleTapChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 items-center xl:gap-16 sm:px-16 sm:py-16">
        <Image src={about} width={500} height={500} alt="About" />
        <div>
          <h2 className="mb-4 font-bold text-4xl">About me</h2>
          <p className="text-base lg:text-lg">
            <span className="inline-block first-letter:pl-4">
              I have almost 2 years of experience in IT industry as FullStack
              Developer.I have knowledge on HTML, SCSS, Tailwindcss, Bootstrap,
              Django RestFramework,Reactjs,Nodejs and Nextjs.I have Worked in 2
              client Projects (
              <span className="text-red-700 font-bold">JFC</span> using django,{" "}
              <span className="text-emerald-500 font-bold">NightLifeMedia</span>{" "}
              using Reactjs and django restframework) and 1 internal Project (
              <span className="text-blue-700 font-bold">Chitfund</span> using
              Nextjs)
            </span>
          </p>
          <div className="mt-8">
            <TapButton
              active={tab === "skills"}
              selectTap={() => handleTapChange("skills")}
            >
              Skills
            </TapButton>
            <TapButton
              selectTap={() => handleTapChange("education")}
              active={tab === "education"}
            >
              Education
            </TapButton>
            <TapButton
              selectTap={() => handleTapChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TapButton>
            {Tap_Data.find(a=>a.id===tab).content}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
