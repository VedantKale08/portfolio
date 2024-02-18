"use client";
import React from "react";
import ProjectJson from "@/json/projects_json.js";
import Image from "next/image";
import Gradient from "@/assets/Gradient.svg";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] md:mx-40 mx-6 py-16 flex flex-col gap-8" id="projects">
      <Title>My Recent Works</Title>
      <div className="md:block absolute hidden -z-50 left-1/2 transform -translate-x-1/2">
        <Image src={Gradient} alt="" className="w-[100%]"></Image>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {ProjectJson.map((item) => (
          <ProjectCard item={item} key={item?.id}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
