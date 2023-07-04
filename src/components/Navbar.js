import Link from "next/link";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    //console.log("HACIENDO CLICK");
    setToggle(!toggle);
  };

  return (
    <div className="fixed bg-white top-0 w-[100%] z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex gap-1 items-center text-xl md:text-2xl font-bold">
          <span className="italic">Art</span>
          <FaHome />
          <span className="italic text-green-700">Design</span>
        </div>
        <div className="hidden md:flex gap-10 tracking-wider font-bold text-gray-600">
          <Link legacyBehavior href="/">
            <a className="hover:text-green-700">Home</a>
          </Link>
          <Link legacyBehavior href="#product">
            <a className="hover:text-green-700">Products</a>
          </Link>
          <Link legacyBehavior href="#categorie">
            <a className="hover:text-green-700">Categories</a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="hover:text-green-700">Services</a>
          </Link>
        </div>
        <div>
          <button className="hidden md:block border border-green-700 px-4 py-1 rounded-md text-green-700 hover:bg-green-700 hover:text-white">
            Contact
          </button>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block"
          />
        ) : (
          <FiMenu
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block"
          />
        )}
      </div>
      {/* ResponsiveMenu */}
      <div
        className={`duration-300 md:hidden flex flex-col w-[60%] h-[50vh] fixed bg-black/70 text-white top-[60px] ${
          toggle ? `right-[0]` : `right-[-100%]`
        }`}
      >
        <Link legacyBehavior href="/">
          <a className="hover:text-green-700 p-1"onClick={handleClick} >Home</a>
        </Link>
        <Link legacyBehavior href="#product">
          <a className="hover:text-green-700 p-1" onClick={handleClick} >Products</a>
        </Link>
        <Link legacyBehavior href="#categorie">
          <a className="hover:text-green-700 p-1"onClick={handleClick} >Categories</a>
        </Link>
        <Link legacyBehavior href="/">
          <a className="hover:text-green-700 p-1"onClick={handleClick} >Services</a>
        </Link>

        {/* responsive social media */}
        <div className="flex flex-col gap-5 items-center mt-10">
          <div className="bg-green-600 w-[200px] h-[1px]"></div>
          <div className="flex gap-5">
            <Link
              legacyBehavior
              href="https://www.facebook.com/profile.php?id=100092156511987"
            >
              <a target="_blank">
                <BsFacebook
                  size={25}
                  className="text-green-700 hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.twitter.com">
              <a target="_blank">
                <BsTwitter
                  size={25}
                  className="text-green-700 hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.youtube.com">
              <a target="_blank">
                <BsYoutube
                  size={25}
                  className="text-green-700 hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.linkedin.com">
              <a target="_blank">
                <BsLinkedin
                  size={25}
                  className="text-green-700 hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.instagram.com">
              <a target="_blank">
                <BsInstagram
                  size={25}
                  className="text-green-700 hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
