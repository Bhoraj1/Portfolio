// Navbar.js
import React, { useState } from "react";
import logo from "../../public/logo.jpg";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const NavbarItems = [
    {
      id: 0,
      text: "Home",
    },
    {
      id: 1,
      text: "About",
    },
    {
      id: 2,
      text: "Portfolio",
    },
    {
      id: 3,
      text: "Experience",
    },
    {
      id: 4,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-12 rounded-full border-2 border-gray-400 "
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Bhoraj Mall<span className="text-green-500 text-xl">a</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          {/*For Desktop Navbar*/}
          <div>
            <ul className=" hidden md:flex space-x-8">
              {NavbarItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={300}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="sm:hidden">
              {!menu ? <FiMenu size={24} /> : <IoCloseSharp size={24} />}
            </div>
          </div>
        </div>

        {/*For Mobile Navbar*/}
        {menu && (
          <div className="bg-white flex justify-center  ">
            <ul className="sm:hidden flex flex-col justify-center items-center h-screen text-xl space-y-3">
              {NavbarItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={300}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
