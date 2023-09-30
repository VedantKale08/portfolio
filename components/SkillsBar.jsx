import React from 'react'

const SkillsBar = ({item}) => {
  return (
    <li key={item?.id} data-aos="fade-bottom" data-aos-duration="60">
      <div className="flex justify-between px-2">
        <h3>{item?.label}</h3>
        <h3>{item?.level}%</h3>
      </div>
      <span className="bar shadow-lg hover:shadow-2xl">
        <span
          className={`rounded-[10px]`}
          data-aos="fade-right"
          data-aos-duration="1000"
          style={{ width: `${item?.level}%` }}
        ></span>
      </span>
    </li>
  );
}

export default SkillsBar