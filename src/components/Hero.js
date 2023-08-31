import React from "react";
import Button from "./Button";
import Link from "next/link";
import {BsFacebook, BsTwitter, BsYoutube, BsLinkedin, BsInstagram} from 'react-icons/bs'

function Hero() {
  return (
    <div className='bg-[url("/img01.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white flex flex-col gap-[20px] md:gap-[40px]">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider">Bienvenido</h1>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider"><span className="text-white">Conjunto Habitacional &quot;El Pedregal&quot;</span></h1>
          </div>
          <div className="mx-auto bg-green-700 h-[2px] w-[150px]"></div>
          {/* <div>
            <p className=" text-sm md:text-xl text-gray-300 tracking-wider">Simple Furniture and Hight-end Quality.</p>
          </div> */}
            <div>
              <Button link="#product" text="Conócenos"/>
            </div>                      
        </div>
      </div>
      <div className=" hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center">
        <div className="bg-green-600 w-[1.5px] h-[250px]"></div>
        <Link legacyBehavior href="https://www.facebook.com"><a target="_blank"><BsFacebook size={25} className="text-green-700 hover:-translate-x-1.5 duration-300"/></a></Link>
        <Link legacyBehavior href="https://www.twitter.com"><a target="_blank"><BsTwitter size={25} className="text-green-700 hover:-translate-x-1.5 duration-300"/></a></Link>
        <Link legacyBehavior href="https://www.youtube.com"><a target="_blank"><BsYoutube size={25} className="text-green-700 hover:-translate-x-1.5 duration-300"/></a></Link>
        {/* <Link legacyBehavior href="https://www.linkedin.com"><a target="_blank"><BsLinkedin size={25} className="text-green-700 hover:-translate-x-1.5 duration-300"/></a></Link> */}
        <Link legacyBehavior href="https://www.instagram.com"><a target="_blank"><BsInstagram size={25} className="text-green-700 hover:-translate-x-1.5 duration-300"/></a></Link>
      </div>
    </div>
  );
}

export default Hero;
