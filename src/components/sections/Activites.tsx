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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACTIVITES.map((a) => (
            <div
              key={a.nom}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              {/* Bandeau coloré */}
              <div className={`bg-gradient-to-r ${a.color} h-2`} />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl shadow-sm flex-shrink-0`}>
                    {a.emoji}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#1B3A5C]">{a.nom}</h3>
                    <span className="inline-block mt-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                      {a.freq}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-[13px] text-gray-500 leading-relaxed">
                  <span className="text-[#4DB8C8] font-bold mt-0.5">✦</span>
                  <span>Animé par <span className="font-semibold text-[#1B3A5C]">{a.animateur}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
