import Hero from '@/components/sections/Hero'
import Missions from '@/components/sections/Missions'
import Activites from '@/components/sections/Activites'
import Adhesion from '@/components/sections/Adhesion'
import Temoignages from '@/components/sections/Temoignages'
import EspaceMembre from '@/components/sections/EspaceMembre'
import Agenda from '@/components/sections/Agenda'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Missions />
      <Activites />
      <Adhesion />
      <Temoignages />
      <EspaceMembre />
      <Agenda />
      <Contact />
    </main>
  )
}
