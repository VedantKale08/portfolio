"use client";
import React from "react";
import ProjectJson from "@/json/projects.json";
import { BiLinkExternal } from "react-icons/bi";
import Youtube from "@/assets/youtube.png";
import Chat from "@/assets/chat.png";
import Plane from "@/assets/plane.png";
import Image from "next/image";
import Gradient from "@/assets/Gradient.svg";

const Projects = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] md:mx-40 mx-6 py-16 flex flex-col gap-8">
      <p className="md:text-2xl text-lg">My Recent Works</p>
      <div className="md:block absolute hidden -z-50 left-1/2 transform -translate-x-1/2">
        <Image src={Gradient} alt="" className="w-[100%]"></Image>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {ProjectJson.map((item) => (
          <div key={item.id} className="bg-[#2d134f] rounded-xl">
            <div className="flex p-10 md:flex-row flex-col">
              <div className="flex-1">
                <p className="text-lg">{item.title}</p>
                <p className="text-base text-gray-400 mb-6">
                  {item.description}
                </p>
                <a
                  _target="_blank"
                  href={item?.link}
                  className="hover:opacity-80 flex gap-2 items-center"
                >
                  View GitHub <BiLinkExternal />
                </a>
              </div>
              <div className="flex-1 flex justify-center items-center md:mt-0 mt-6">
                <Image
                  src={item.id == 1 ? Chat : item?.id == 2 ? Plane : Youtube}
                  alt=""
                  className="w-[40%]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
