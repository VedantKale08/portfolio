import Image from "next/image";
import React from "react";
import Man from "@/assets/man.svg";
import Wave from "@/assets/wave.svg";
import Gradient from "@/assets/Gradient.svg";
import ContactMe from "./ContactMe";
import { Link } from "react-scroll";

const HomeV1 = () => {
  return (
    <div
      className="flex mt-[80px] h-[calc(100vh-80px)]  md:flex-row flex-col "
      id="home"
    >
      <div className="flex-1 flex justify-center items-center">
        <div className="md:ml-40 flex flex-col gap-10 ">
          <p className="bg-[#2d134f] w-fit p-2 px-4 rounded-md flex items-center gap-2 md:m-0 m-auto md:text-base text-xs md:mt-0 mt-4">
            <Image src={Wave} alt="wave" className="w-5 h-5"></Image>
            Hello All
          </p>
          <p className="md:text-2xl text-md font-bold md:text-start text-center">
            I&apos;m <br />
            <span className="md:text-8xl text-5xl">Vedant Kale</span>,
            <br />
            <br /> A skilled, passionated and motivated web/app developer and
            anime fan!!
          </p>
          <div className="flex gap-4 md:justify-start justify-center">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              to="work"
              className="bg-gradient cursor-pointer hover:opacity-80 md:px-8 md:py-4 px-5 py-3 rounded-lg transition md:text-base text-sm"
            >
              View My Work
            </Link>
            <ContactMe />
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-end justify-center ">
        <div className="absolute -z-50">
          <Image src={Gradient} alt="" className="md:w-[750px]"></Image>
        </div>
        <Image src={Man} alt="" className="w-[250px] md:w-[500px]"></Image>
      </div>
    </div>
  );
};

export default HomeV1;
