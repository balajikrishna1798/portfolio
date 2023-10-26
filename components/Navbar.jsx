"use client"
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from "./MenuOverlay";
const navLinks = [{title:"About",href:"#about"},{title:"Projects",href:"#projects"},{title:"Contact",href:"#contact"}];

const Navbar = () => {
  const [navbarOpen,setNavbarOpen] = useState(false)
  return (
    <nav className="fixed left-0 top-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex justify-between items-center mx-auto p-4">
        <Link href="/" className="text-lg md:text-5xl font-semibold text-white">
          Logo
        </Link>
        <div className="block md:hidden text-white">
        {!navbarOpen?<Bars3Icon className="h-5 w-5" onClick={()=>setNavbarOpen(true)}/>:<XMarkIcon className="h-5 w-5" onClick={()=>setNavbarOpen(false)}/>}
        </div>
        <div id="navbar" className="hidden md:block md:w-auto">
          <ul className="flex sm:flex-row md:space-x-12">
            {navLinks.map((navLink,index)=>(
                <li key={index}>
                <NavLink href={navLink.href} title={navLink.title}/>
                </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen&&<MenuOverlay links={navLinks}/>}
    </nav>
  );
};

export default Navbar;
