"use client";
import Image from "next/image";
import React, { useState, useTransition, useEffect, useRef } from "react";
import about from "../../public/about.jpeg";
import TapButton from "./TapButton";

const Tap_Data = [
  {
    title: "Skills",
    id: "skills",
    scrollable: true,
    content: (
      <ul className="flex flex-col gap-2 list-disc ml-5 text-[#ADB7BE]">
        <li>Python, JavaScript</li>
        <li>Django RestFramework, React.js, Next.js, Node.js, Express.js, Langchain (LLM Framework)</li>
        <li>AWS (EC2, S3, RDS, Lambda, ECS, CloudFormation, VPC, Route 53, CloudFront, CodeDeploy, CodePipeline, SNS)</li>
        <li>Ansible</li>
        <li>Docker, Kubernetes</li>
        <li>Jenkins, GitHub Actions, CodePipeline, CodeDeploy</li>
        <li>Prometheus, Grafana, CloudWatch</li>
        <li>Git, GitHub</li>
        <li>Terraform, CloudFormation</li>
        <li>Bash, Python</li>
        <li>HTML, CSS, JavaScript, REST APIs, GraphQL</li>
        <li>PostgreSQL, MySQL, MongoDB</li>
        <li>Python Selenium</li>
        <li>Scrum, Kanban</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    scrollable: false,
    content: (
      <ul className="flex flex-col gap-2 list-disc ml-5 text-[#ADB7BE]">
        <li>Master of Computer Applications - DG Vaishnav College, Chennai (CGPA: 8.1)</li>
        <li>Bachelor of Commerce (Computer Applications) - RamaKrishna Mission Vivekananda College (CGPA: 6.4)</li>
        <li>Higher Secondary School - St. Thomas Matriculation Higher Secondary School (CGPA: 8.1)</li>
        <li>Secondary School - St. Thomas Matriculation Higher Secondary School (CGPA: 8.9)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    scrollable: false,
    content: (
      <ul className="flex flex-col gap-2 list-disc ml-5 text-[#ADB7BE]">
        <li>Full Stack Developer - Optisol Business Solutions (07/22 - 03/23)</li>
        <li>Full Stack Developer - Inoesis Technologies (05/23 - Present)</li>
        <li>Various Projects involving Django, React, Next.js, AWS, LangChain, and more.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const skillsRef = useRef(null);

  useEffect(() => {
    if (tab === "skills" && skillsRef.current) {
      const scrollElement = skillsRef.current;
      let scrollPosition = 0;
      const scrollInterval = setInterval(() => {
        scrollPosition += 1;
        scrollElement.scrollTop = scrollPosition;
        if (scrollPosition >= scrollElement.scrollHeight - scrollElement.clientHeight) {
          clearInterval(scrollInterval);
        }
      }, 50); // Adjust the speed of scrolling by changing the interval time
      return () => clearInterval(scrollInterval); // Cleanup on component unmount or tab change
    }
  }, [tab]);

  const handleTapChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = Tap_Data.find((a) => a.id === tab);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-12 px-4 items-center xl:gap-16 sm:px-16">
        <Image src={about} width={500} height={500} alt="About" className="rounded-lg shadow-lg" />
        <div>
          <h2 className="mb-4 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            I have almost 1.5 years of experience in the IT industry as a FullStack Developer...
          </p>
          <div className="mt-8 flex space-x-4">
            {Tap_Data.map(({ id, title }) => (
              <TapButton
                key={id}
                active={tab === id}
                selectTap={() => handleTapChange(id)}
              >
                {title}
              </TapButton>
            ))}
          </div>
          <div
            ref={skillsRef}
            className={`mt-6 relative ${currentTab.scrollable ? "min-h-[150px] max-h-[150px] overflow-hidden" : "min-h-[150px]"}`}
          >
            {currentTab.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
