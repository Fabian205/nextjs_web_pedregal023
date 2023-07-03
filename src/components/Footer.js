import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-green-700 min-h-[450px] md:min-h-[250px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16 md:py-8">
          <div className="flex gap-1 items-center text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="italic text-white">Art</span>
            <FaHome />
            <span className="italic text-white">Design</span>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:pt-16 tracking-wider font-bold text-gray-800 text-center">
            <Link legacyBehavior href="/">
              <a className="hover:text-white">Home</a>
            </Link>
            <Link legacyBehavior href="#product">
              <a className="hover:text-white">Products</a>
            </Link>
            <Link legacyBehavior href="#categorie">
              <a className="hover:text-white">Categories</a>
            </Link>
            <Link legacyBehavior href="/">
              <a className="hover:text-white">Services</a>
            </Link>
          </div>
          <div className="flex gap-x-5 items-center md:pt-16 pr-8">
            <Link
              legacyBehavior
              href="https://www.facebook.com/profile.php?id=100092156511987"
            >
              <a target="_blank">
                <BsFacebook
                  size={25}
                  className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.twitter.com">
              <a target="_blank">
                <BsTwitter
                  size={25}
                  className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.youtube.com">
              <a target="_blank">
                <BsYoutube
                  size={25}
                  className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.linkedin.com">
              <a target="_blank">
                <BsLinkedin
                  size={25}
                  className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.instagram.com">
              <a target="_blank">
                <BsInstagram
                  size={25}
                  className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="text-white text-center text-sm pb-3 md:mt-12">Designed by Nobasys</div>
      </div>
    </footer>
  );
}

export default Footer;
