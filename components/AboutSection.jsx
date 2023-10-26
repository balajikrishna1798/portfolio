"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import about from "@/public/about.jpeg";
import TapButton from "./TapButton";

const Tap_Data = [{title:"Skills",id:"skills",content:(<ul className="flex flex-col gap-1 list-disc ml-5"><li>Reactjs</li><li>Nodejs</li><li>Expressjs</li><li>Nextjs</li><li>Django Restframework</li><li>Django</li></ul>)}, {title:"Education",id:"education",content:(<ul className="flex flex-col gap-1 list-disc ml-5"><li>Bachelor of Commerce (Computer Applications)</li><li>Master of Computer Applications</li></ul>)}, {title:"Experience",id:"experience",content:(<ul className="flex flex-col gap-1 list-disc ml-5"><li>1 year of Django RestFramework</li><li>1.5 years of Reactjs</li><li>4 Months of Nextjs</li><li>5 Months of Django</li></ul>)}];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
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
            <div className="mt-2">{Tap_Data.find(a=>a.id===tab).content}</div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
