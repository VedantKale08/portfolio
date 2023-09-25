import Image from 'next/image'
import React from 'react'
import Man from '@/assets/man.svg'
import Wave from '@/assets/wave.svg'
import Gradient from "@/assets/Gradient.svg";

const HomeV1 = () => {
  return (
    <div className="flex mt-[80px] h-[calc(100vh-80px)]  md:flex-row flex-col">
      <div className="flex-1 flex justify-center items-center">
        <div className="md:ml-40 flex flex-col gap-10 ">
          <p className="bg-[#2d134f] w-fit p-2 px-4 rounded-md flex items-center gap-2 md:m-0 m-auto md:text-base text-xs md:mt-0 mt-4">
            <Image src={Wave} alt="wave" className="w-5 h-5"></Image>
            Hello All
          </p>
          <p className="capitalize md:text-5xl text-3xl font-bold md:text-start text-center">
            I&apos;m Vedant Kale,
            <br /> a passionate web developer and anime lover
          </p>
          <div className="flex gap-4 md:justify-start justify-center">
            <button className="bg-gradient hover:opacity-80 md:px-8 md:py-4 px-5 py-3 rounded-lg transition md:text-base text-sm">
              View My Work
            </button>
            <button className="border border-white md:px-8 md:py-4 px-5 py-3 rounded-lg hover:opacity-80 transition md:text-base text-sm">
              Contact me
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-end justify-center ">
        <div className="absolute -z-50">
          <Image src={Gradient} alt="" className="md:w-[750px]"></Image>
        </div>
        <Image
          src={Man}
          alt=""
          className="w-[250px] md:w-[500px]"
        ></Image>
      </div>
    </div>
  );
}

export default HomeV1