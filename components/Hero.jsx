"use client"

import Image from "next/image";
import React from "react";
import profile from "@/public/profile.png";
import { TypeAnimation } from 'react-type-animation';
 
const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center sm:text-left">
          
          <h1 className="text-4xl lg:text-2xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500  via-yellow-500 to-orange-500 text-4xl">Hello, I'm </span><span className="text-4xl">M.Balaji</span>
            <br />
            <TypeAnimation className="mt-3"
      sequence={[
        'Python FullStack Developer',
        1000,
        'MERN Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </h1>
          <p className="text-lg lg:text-xl text-[#ADB7BE]">
            I have almost 2 years of experience in IT industry as FullStack Developer.I have knowledge on Django RestFramework,Reactjs,Nodejs and Nextjs.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit mr-4 bg-white hover:bg-slate-200  text-white">
              Hire me
            </button>
            <button className="px-1 py-1 rounded-full w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit bg-transparent text-white hover:bg-slate-800 mt-3">
              <span className="bg-black rounded-full block px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4">
          <Image
            className="text-white rounded-lg" 
            src={profile}
            width={340}
            height={340}
            alt="profile"
          />
       
        </div>
      </div>
    </section>
  );
};

export default Hero;
