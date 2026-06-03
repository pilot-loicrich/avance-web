import { TEMOIGNAGES } from '@/lib/constants'

export default function Temoignages() {
  return (
    <section id="temoignages" className="py-24 bg-[#1B3A5C]">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#4DB8C8]/80">Témoignages</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3 mb-4">
          Ce qu&apos;ils disent d&apos;<span className="text-[#4DB8C8]">AVanCe</span>
        </h2>
        <p className="text-[16px] text-white/60 leading-relaxed max-w-[580px] mb-14">
          La parole de ceux qui vivent avec l&apos;AVC au quotidien.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEMOIGNAGES.map((t) => (
            <div
              key={t.auteur}
              className="bg-white/7 border border-white/10 rounded-2xl p-7 hover:bg-white/12 transition-colors duration-200"
            >
              <div className="text-4xl mb-4 opacity-60">❝</div>
              <p className="text-white/85 text-[14.5px] leading-relaxed mb-5 italic">
                &laquo;&nbsp;{t.texte}&nbsp;&raquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}>
                  {t.initiale}
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-white">{t.auteur}</div>
                  <div className="text-[12px] text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
