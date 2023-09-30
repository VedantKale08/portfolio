import React from 'react'
import Title from './Title'
import AboutPng from "@/assets/about.png";
import Image from "next/image";
import Gradient from "@/assets/Gradient.svg";

const About = () => {
  return (
    <div
      className="min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] md:mx-40 mx-6 py-8"
      id="about"
    >
      <Title>A little Bit About Me</Title>
      <div className="flex md:flex-row flex-col h-full gap-6">
        <div
          className="flex-1 flex items-center"
          data-aos="fade-right"
          data-aos-duration="60"
        >
          <p className="md:text-lg text-base md:pt-0 pt-4">
            I&apos;m <b>Vedant Kale</b> from Mumbai, India, currently pursuing a
            B.Tech degree at Veermata Jijabai Technological Institute. <br />
            <br />
            Passionate about continuous learning, exploring new coding
            languages, and diving into the world of programming. I want to
            become strong, skillful web developer to create best, user-friendly
            and creative web pages. Proficient in developing databases, creating
            user interfaces, writing codes, troubleshooting simple/complex
            issues.
            <br />
            <br />
            Apart from coding, I enjoy watching anime, drawing, sketching, and
            playing BGMI.
          </p>
        </div>
        <div className="flex-1 flex items-end justify-center">
          <div className="md:block absolute -z-50 ">
            <Image src={Gradient} alt="" className="w-[90%]"></Image>
          </div>
          <Image
            src={AboutPng}
            alt="certificate"
            className="w-[250px] md:w-[450px]"
            data-aos="fade-left"
            data-aos-duration="60"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default About