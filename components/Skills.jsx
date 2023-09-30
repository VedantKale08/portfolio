import React from 'react'
import SkillsJson from '@/json/skills.json'
import SkillGrad from "@/assets/skillGrad.svg";
import Image from 'next/image';
import Title from './Title';
import SkillsBar from './SkillsBar';

const Skills = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] md:mx-40 mx-6 py-8" id="skills">
      <Title>My Skills</Title>
      <div className="grid md:grid-cols-2 gap-5 py-6">
        {SkillsJson.map((item) => (
          <SkillsBar item={item} key={item?.id} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Image
          src={SkillGrad}
          alt=""
          className="md:w-[40%] w-full"
          data-aos="fade-bottom"
          data-aos-duration="60"
        ></Image>
      </div>
    </div>
  );
}

export default Skills