"use client"
import React from "react";
import ProjectJson from "@/json/projects.json";
import Lottie from 'react-lottie'
import Chat from "@/assets/chat.json";

const Projects = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Chat,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  return (
    <div className="h-[calc(100vh-80px)] md:mx-40 pt-8 flex flex-col gap-8">
      <p className="md:text-2xl">My Recent Works</p>
      <div className="flex flex-col gap-4">
        {ProjectJson.map((item) => (
          <div key={item.id} className="bg-[#2d134f] rounded-xl">
            <div className="flex">
              <div className="flex-1 p-10 ">
                <p className="text-lg">{item.title}</p>
                <p className="text-base text-gray-400">{item.description}</p>
              </div>
              <div className="flex-1">
                <Lottie options={defaultOptions} width={200} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
