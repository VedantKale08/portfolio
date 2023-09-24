import Image from 'next/image'
import React from 'react'
import Man from '@/assets/man.svg'
import Wave from '@/assets/wave.svg'

const HomeV1 = () => {
  return (
    <div className="flex mt-[80px] h-[calc(100vh-80px)]">
      <div className="flex-1 flex justify-center items-center">
        <div className="md:ml-40 flex flex-col gap-10 ">
          <p className="bg-[#2d134f] w-fit p-2 px-4 rounded-md flex items-center gap-2">
            <Image src={Wave} alt="wave" className="w-5 h-5"></Image>
            Hello All
          </p>
          <p className="capitalize md:text-6xl">
            I&apos;m Vedant Kale,
            <br /> a passionate web developer and anime lover
          </p>
          <div className="flex gap-4">
            <button className="bg-[#7127BA] hover:opacity-80 px-8 py-4 rounded-lg">
              View My Work
            </button>
            <button className="border border-white px-8 py-4 rounded-lg hover:opacity-80">
              Contact me
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image src={Man} alt=""></Image>
      </div>
    </div>
  );
}

export default HomeV1