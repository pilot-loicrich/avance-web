import { AGENDA_EVENTS } from '@/lib/constants'

export default function Agenda() {
  return (
    <section id="agenda" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#34A0B0]">Agenda</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B3A5C] mt-3 mb-4">
          Prochains <span className="text-[#E8524A]">événements</span>
        </h2>
        <p className="text-[16px] text-gray-500 leading-relaxed max-w-[580px] mb-14">
          Ne manquez aucune activité ou conférence. Tous les événements sont ouverts aux membres et à leurs proches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {AGENDA_EVENTS.map((e) => (
            <div
              key={e.titre}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className={`min-w-[52px] h-[60px] rounded-xl ${e.colorDate} flex flex-col items-center justify-center`}>
                <div className="text-2xl font-extrabold leading-none">{e.jour}</div>
                <div className="text-[11px] font-semibold uppercase tracking-wide mt-0.5">{e.mois}</div>
              </div>
              <div>
                <div className="text-[15px] font-bold text-[#1B3A5C] mb-1">{e.titre}</div>
                <p className="text-[13px] text-gray-500 leading-relaxed">{e.desc}</p>
                <span className={`inline-block mt-2.5 px-3 py-1 rounded-full text-[11px] font-semibold ${e.colorTag}`}>
                  {e.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
