import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const navLinks = [{title:"About",href:"#about"},{title:"Projects",href:"#projects"},{title:"Contact",href:"#contact"}];
  return (
    <nav>
      <div className="flex justify-between items-center mx-auto p-8">
        <Link href="/" className="text-5xl font-semibold">
          Logo
        </Link>
        <div id="navbar" className="menu hidden md:block md:w-auto ">
          <ul className="flex sm:flex-row md:space-x-12">
            {navLinks.map((navLink,index)=>(
                <li key={index}>
                <NavLink href={navLink.href} title={navLink.title}/>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
