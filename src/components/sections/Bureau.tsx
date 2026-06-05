
const bureau = [
  { role: 'Présidente', nom: 'Mme GARRAUT Josiane', color: 'bg-[#E8524A]' },
  { role: 'Vice-présidente', nom: 'Mme YOUBI Fouzia', color: 'bg-[#4DB8C8]' },
  { role: 'Secrétaire par intérim', nom: 'Mme LIVET Judith', color: 'bg-[#1B3A5C]' },
  { role: 'Secrétaire adjointe', nom: 'Mme Louis DEKOCKER Isabelle', color: 'bg-[#6B8FBF]' },
  { role: 'Trésorier', nom: 'M. REBER Lionel', color: 'bg-[#E8524A]' },
]

const parrainage = {
  role: 'Parrainage',
  nom: 'Dr HARDENBERG Katja',
  detail: 'Médecin coordonnateur des Réseaux AVC',
}

const conseillers = [
  'Dr DEBA Hakim (neurologue)',
  'Dr MEKONTCHOU Thierry (médecin)',
  'M. CORNU Gilles (chef de cœur)',
  'Mme DUPRE Suzy (orthophoniste)',
  'Mme LIVET Judith (Animatrice de filière)',
  'Mme CANAUT Josiane',
  'M. CANAUT Philippe',
]

export default function Bureau() {
  return (
    <section id="bureau" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#34A0B0]">Organisation</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B3A5C] mt-3 mb-4">
          Membres du <span className="text-[#E8524A]">Bureau</span>
        </h2>
        <p className="text-[16px] text-gray-500 leading-relaxed max-w-[580px] mb-14">
          AVanCe est portée par une équipe de bénévoles passionnés, patients, soignants et proches.
        </p>

        {/* Carte Judith — membre fondatrice */}
        <div className="bg-gradient-to-r from-[#1B3A5C] to-[#2A5280] rounded-3xl p-8 mb-10 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-36 h-36 flex-shrink-0">
            <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl">
              <img
                src="/judith.jpg"
                alt="Judith LIVET — Animatrice de filière AVC, membre fondatrice d'AVanCe"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-[#4DB8C8] text-xs font-bold uppercase tracking-widest mb-1">Membre fondatrice</div>
            <h3 className="text-2xl font-extrabold text-white mb-1">Judith LIVET</h3>
            <div className="text-white/70 text-[14px] mb-1">Animatrice de filière AVC</div>
            <div className="text-white/50 text-[13px]">Centre Hospitalier d&apos;Auxerre</div>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 text-white/80 text-[12px] font-medium px-4 py-2 rounded-full">
              🏥 Infirmière · Animatrice de filière AVC · Membre fondatrice d&apos;AVanCe
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Membres du bureau */}
          <div className="lg:col-span-2">
            <h3 className="text-[15px] font-bold text-[#1B3A5C] mb-5 uppercase tracking-wider">Bureau</h3>
            <div className="flex flex-col gap-3">
              {bureau.map((m) => (
                <div key={m.nom} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-sm">
                  <div className={`w-2 h-10 rounded-full ${m.color} flex-shrink-0`} />
                  <div>
                    <div className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">{m.role}</div>
                    <div className="text-[15px] font-bold text-[#1B3A5C]">{m.nom}</div>
                  </div>
                </div>
              ))}

              {/* Parrainage */}
              <div className="bg-gradient-to-r from-[#4DB8C8]/10 to-[#4DB8C8]/5 rounded-2xl px-5 py-4 flex items-center gap-4 border border-[#4DB8C8]/20">
                <div className="w-2 h-10 rounded-full bg-[#4DB8C8] flex-shrink-0" />
                <div>
                  <div className="text-[12px] font-semibold text-[#34A0B0] uppercase tracking-wider">{parrainage.role}</div>
                  <div className="text-[15px] font-bold text-[#1B3A5C]">{parrainage.nom}</div>
                  <div className="text-[12px] text-gray-400">{parrainage.detail}</div>
                </div>
              </div>

              {/* Communication */}
              <div className="bg-gradient-to-r from-[#E8524A]/10 to-[#E8524A]/5 rounded-2xl px-5 py-4 flex items-center gap-4 border border-[#E8524A]/20">
                <div className="w-2 h-10 rounded-full bg-[#E8524A] flex-shrink-0" />
                <div>
                  <div className="text-[12px] font-semibold text-[#E8524A] uppercase tracking-wider">Communication & Webinaire</div>
                  <div className="text-[15px] font-bold text-[#1B3A5C]">M. NANZO Loïc</div>
                </div>
              </div>
            </div>
          </div>

          {/* Conseillers */}
          <div>
            <h3 className="text-[15px] font-bold text-[#1B3A5C] mb-5 uppercase tracking-wider">Conseillers</h3>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ul className="flex flex-col gap-3">
                {conseillers.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[13.5px] text-gray-600">
                    <span className="text-[#4DB8C8] font-bold mt-0.5 flex-shrink-0">✦</span>
                    {c}
                  </li>
                ))}
              </ul>

              {/* Appuis */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-3">Appuis & liens (recherchés)</div>
                <div className="flex flex-col gap-2">
                  {['Centre Hospitalier d\'Auxerre', 'Mairies icaunaises'].map((a) => (
                    <div key={a} className="flex items-center gap-2 text-[13px] text-gray-500">
                      <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[10px]">🏛️</span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mécènes */}
              <div className="mt-4 bg-[#1B3A5C]/5 rounded-xl px-4 py-3 text-[13px] text-[#1B3A5C] font-medium">
                💼 Mécènes — démarche en cours
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
