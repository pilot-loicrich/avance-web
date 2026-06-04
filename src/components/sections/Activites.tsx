import { ACTIVITES } from '@/lib/constants'

export default function Activites() {
  return (
    <section id="activites" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B3A5C] mt-3 mb-4">
          Nos activités <span className="text-[#E8524A]">bénéfiques</span> pour le cerveau 🧠
        </h2>
        <p className="text-[16px] text-gray-500 leading-relaxed max-w-[580px] mb-14">
          Chaque mois, AVanCe propose des ateliers thérapeutiques encadrés, gratuits pour tous les adhérents et donateurs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ACTIVITES.map((a) => (
            <div
              key={a.nom}
              className={`bg-gradient-to-br ${a.color} rounded-2xl p-7 text-center cursor-pointer hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
              <span className="text-4xl mb-4 block relative z-10">{a.emoji}</span>
              <div className="text-white text-[14px] font-bold relative z-10">{a.nom}</div>
              <div className="text-white/75 text-[12px] mt-1 relative z-10">{a.freq}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
