import Hero from '@/components/sections/Hero'
import Missions from '@/components/sections/Missions'
import Activites from '@/components/sections/Activites'
import Temoignages from '@/components/sections/Temoignages'
import EspaceMembre from '@/components/sections/EspaceMembre'
import Agenda from '@/components/sections/Agenda'
import Videos from '@/components/sections/Videos'
import Bureau from '@/components/sections/Bureau'
import Contact from '@/components/sections/Contact'
import Adhesion from '@/components/sections/Adhesion'

export default function Home() {
  return (
    <main>
      <Hero />
      <Missions />
      <Activites />
      <Temoignages />
      <EspaceMembre />
      <Agenda />
      <Videos />
      <Bureau />
      <Contact />
      <Adhesion />
    </main>
  )
}
