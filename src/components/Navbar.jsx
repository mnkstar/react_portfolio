import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineProject,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-blue-50 shadow-grey-400 m-2 
            p-4 cursor:pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} className="" />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#project"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-blue-50 shadow-grey-400 m-2 
            p-4 cursor:pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} className="" />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#resume"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-blue-50 shadow-grey-400 m-2 
            p-4 cursor:pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} className="" />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-blue-50 shadow-grey-400 m-2 
            p-4 cursor:pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlinePhone size={20} className="" />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="p-4 flex flex-col">
          <a
            href="#main"
            className="relative rounded-full shadow-lg shadow-gray-600 bg-blue-50 m-2 p-4 items-center justify-center hover:scale-110 cursor-pointer ease-in duration-300 group"
          >
            <AiOutlineHome size={25} />
            <span className="absolute text-sm items-center justify-center rounded-lg top-4 left-10 bg-blue-200 font-bold text-black-500 px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Home
            </span>
          </a>

          <a
            href="#project"
            className="relative rounded-full shadow-lg shadow-gray-600 bg-blue-50 m-2 p-4 items-center justify-center hover:scale-110 cursor-pointer ease-in duration-300 group"
          >
            <AiOutlineProject size={25} />
            <span className="absolute text-sm items-center justify-center rounded-lg top-4 left-10 bg-blue-200 font-bold text-black-500 px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Project
            </span>
          </a>

          <a
            href="#resume"
            className="relative rounded-full shadow-lg shadow-gray-600 bg-blue-50 m-2 p-4 items-center justify-center hover:scale-110 cursor-pointer ease-in duration-300 group"
          >
            <BsPerson size={25} />
            <span className="absolute text-sm items-center justify-center rounded-lg top-4 left-10 bg-blue-200 font-bold text-black-500 px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Resume
            </span>
          </a>

          <a
            href="#contact"
            className="relative rounded-full shadow-lg shadow-gray-600 bg-blue-50 m-2 p-4 items-center justify-center hover:scale-110 cursor-pointer ease-in duration-300 group"
          >
            <AiOutlinePhone size={25} />
            <span className="absolute text-sm items-center justify-center rounded-lg top-4 left-10 bg-blue-200 font-bold text-black-500 px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Contact
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
