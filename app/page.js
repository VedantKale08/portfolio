import Header from '@/components/Header'
import HomeV1 from '@/components/Home'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header/>
      <HomeV1/>
      <Projects/>
    </main>
  )
}
