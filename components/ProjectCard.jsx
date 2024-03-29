import Image from 'next/image';
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi';

const ProjectCard = ({item}) => {
  return (
    <div
      key={item.id}
      className="bg-[#2d134f] rounded-xl"
      data-aos="fade-right"
      data-aos-duration="60"
    >
      <div className="flex p-10 md:flex-row flex-col">
        <div className="flex-1">
          <p className="text-lg">{item.title}</p>
          <p className="text-base text-gray-400 mb-6">{item.description}</p>
          <a
            target="_blank"
            href={item?.link}
            className="hover:opacity-80 flex gap-2 items-center"
          >
            View GitHub <BiLinkExternal />
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center md:mt-0 mt-6">
          <Image
            src={item?.icon}
            alt=""
            className="w-[40%] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard