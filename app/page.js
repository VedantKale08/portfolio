"use client"
import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeV1 from '@/components/Home'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Aos from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css";

export default function Home() {
  useEffect(()=>{Aos.init();},[])
  return (
    <main className='overflow-x-hidden'>
      <Header/>
      <HomeV1/>
      <Projects/>
      <Skills/>
      <Work/>
      <About/>
      <Footer/>
    </main>
  )
}
