"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useRef, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [clicked,setClicked] = useState('Home');
    const navRef = useRef();
    const navs = useMemo(() => [
        {
          label:"Home",
          href:"#home"
        },
        {
          label:"Projects",
          href:"#projects"
        },
        {
            label:"Work",
            href:"#work"
        },
        {
            label:"About",
            href:"#about"
        },
    ],[]) 
    const showNavbar = () => {
      navRef.current.classList.toggle("translate-y-0");
    };
  return (
    <header className="flex fixed top-0 z-50 items-center w-screen h-[80px] text-white md:px-[12rem] pl-8 bg-[#1A0B2E]">
      <nav
        ref={navRef}
        className="fixed top-0 left-0 h-screen w-screen text-[20px] bg-[rgb(0,0,0,0.9)] md:bg-transparent flex items-center justify-center flex-col gap-6 transition duration-[1s] -translate-y-[100vh] md:translate-y-0 md:relative md:flex-row md:justify-end"
      >
        {navs.map((item, index) => (
          <Link
            href={item.href}
            className={`mx-[2rem] relative before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full ${
              item?.label == clicked ? "border-b-2" : "before:h-[2px]"
            }  before:bg-white before:scale-x-0 before:origin-center before:transform before:duration-[0.3s] before:ease-in-out before:hover:scale-x-[1]`}
            key={index}
            onClick={() => setClicked(item?.label)}
          >
            {item?.label}
          </Link>
        ))}
        <button
          className="absolute top-8 right-8  md:p-[5px] md:hidden"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className="md:p-[5px] md:hidden pr-4" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header