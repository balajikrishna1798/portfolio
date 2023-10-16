import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpeg";
const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500  via-green-500 to-orange-500">Hello, I am </span>
            Balaji.M
          </h1>
          <p className="text-lg lg:text-xl text-[#ADB7BE]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            possimus laborum repellendus nesciunt vero rerum et architecto,
            debitis fuga voluptatum, ullam fugiat cum pariatur ducimus quaerat,
            minima saepe enim minus.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit mr-4 bg-white hover:bg-slate-200  text-white">
              Hire me
            </button>
            <button className="px-6 py-3 rounded-full w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit bg-transparent text-white hover:bg-slate-800 border border-white mt-3">
              <span className="bg-black rounded-full block px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <Image
            className="text-white mt-4 rounded-lg absolute "
            src={profile}
            width={150}
            height={150}
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
