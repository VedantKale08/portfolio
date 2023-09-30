import React from 'react'
import Cert from "@/assets/cert.jpg";
import Image from 'next/image';
import Gradient from "@/assets/Gradient.svg";
import Title from './Title';

const Work = () => {
  return (
    <div
      className="min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] md:mx-40 mx-6 py-8"
      id="work"
    >
      <Title className="text-center">Work Experience</Title>
      <div className="flex md:flex-row-reverse flex-col h-full gap-6">
        <div
          className="flex-1 flex items-center"
          data-aos="fade-left"
          data-aos-duration="60"
        >
          <p className="md:text-lg text-base md:pt-0 pt-2">
            I&apos;ve successfully completed 7 months my internship at{" "}
            <b className="text-xl">Medisage E-Learning Pvt. Ltd.!</b> 🚀 <br />
            <br />
            It&apos;s been an incredible journey filled with growth, learning,
            and meaningful connections📈. Learnt a lot of new languages and got
            new friends. I want to express my gratitude to the amazing team for
            their guidance and support. The skills I&apos;ve gained here will
            surely impact my future journey.👜 #medisage.
            <br />
            <br />
            During my internship, I mastered
            <b> NextJs VueJs, tailwind, Php, Laravel, MySQL</b> and even
            ventured into <b>Clevertap integration</b>, etc.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="md:block absolute -z-50 ">
            <Image src={Gradient} alt="" className="w-[90%]"></Image>
          </div>
          <Image
            src={Cert}
            alt="certificate"
            className="md:w-[80%] w-full"
            data-aos="fade-right"
            data-aos-duration="60"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Work