import React from "react";
import linkedin_icon from "@/public/linkedin_icon.svg";
import github_icon from "@/public/github_icon.svg";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-4 my-2 py-4" id="contact">
      <div>
        <h5 className="text-white text-xl font-bold">Contact Details</h5>
        <div className="text-white"><p><span className="font-bold text-red-500">Phone Number :</span>  8825539047</p><p><span className="font-bold text-orange-300">Email :</span>  balajikrishna44589@gmail.com</p></div>
        <div className="flex items-center gap-10">
        <Link href={"https://www.linkedin.com/in/balaji-m-b71932284/"}>
          <Image src={linkedin_icon}  alt="linkedin" />
        </Link>
        <Link href={"https://github.com/balajikrishna1798/"}>
          <Image
            src={github_icon}
           
            alt="github"
            className="bg-white"
          />
        </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <label className="text-white" htmlFor="email">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="w-9/12 p-1"
            required
            placeholder="example@gmail.com"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
