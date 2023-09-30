import React from 'react'
import ContactMe from './ContactMe';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#1A0B2E]">
      <div
        className="md:mx-40 mx-6  md:py-10 py-8"
        data-aos="fade-bottom"
        data-aos-duration="1000"
      >
        <p className="md:text-4xl text-xl md:w-[40%] md:py-10 py-8">
          Let&apos;s collaborate and create unique and amazing projects
          together.
        </p>
        <div className="flex">
          <div className="flex-1">
            <ContactMe />
          </div>
          <div className="flex items-end gap-3 text-xl">
            <a target="_blank" href="https://github.com/VedantKale08">
              <AiFillGithub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/vedant-kale-1b3b9523b/">
              <AiFillLinkedin />
            </a>
            <a target="_blank" href="https://www.instagram.com/mi_vedantkale/">
              <AiFillInstagram />
            </a>
            <a target="_blank" href="https://twitter.com/VedantKale08">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer