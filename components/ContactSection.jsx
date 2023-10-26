import React from "react";
import linkedin_icon from "@/public/linkedin_icon.svg";
import github_icon from "@/public/github_icon.svg";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="flex gap-7 items-center">
      <Link href={"https://www.linkedin.com/in/balaji-m-b71932284/"}>
        <Image src={linkedin_icon} width={20} height={20} alt="linkedin"/>
      </Link>
      <Link href={"https://github.com/balajikrishna1798/"}>
        <Image src={github_icon} width={15} height={15} alt="github" className="bg-white"/>
      </Link>
    </div>
  );
};

export default ContactSection;
