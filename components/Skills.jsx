import React from 'react'
import SkillsJson from '@/json/skills.json'

const Skills = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] md:mx-40 mx-6 py-8">
      <p className="md:text-2xl text-lg">My Skills</p>
      <div className='grid md:grid-cols-2 gap-5 py-6'>
        {SkillsJson.map((item) => (
          <li key={item?.id}>
            <div className='flex justify-between px-2'>
              <h3>{item?.label}</h3>
              <h3>{item?.level}%</h3>
            </div>
            <span className="bar shadow-lg hover:shadow-2xl">
              <span className={`rounded-[10px]`} style={{ width: `${item?.level}%`}}></span>
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Skills