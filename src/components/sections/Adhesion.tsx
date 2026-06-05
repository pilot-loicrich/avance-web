import Link from 'next/link'

const dons = ['5€', '10€', '20€', '30€', '50€', '100€', 'Montant libre']

const formules = [
  {
    nom: 'Don libre',
    prix: null,
    unite: '',
    sousTitre: 'À partir de 5€, montant à votre convenance',
    desc: 'Soutenez AVanCe sans adhérer. Votre don est déductible des impôts à 66%.',
    features: ['Reçu fiscal immédiat', 'Déductible à 66%', 'Montant entièrement libre'],
    featured: false,
    btnLabel: 'Faire un don',
    btnStyle: 'bg-gray-100 text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white',
  },
  {
    nom: 'Adhésion annuelle',
    prix: '15',
    unite: '/an',
    sousTitre: 'Accès complet à l\'espace membre',
    desc: 'Devenez membre actif d\'AVanCe et accédez à toutes les ressources.',
    features: [
      'Espace membre privé',
      'Toutes les activités gratuites',
      'Séances de brainstorming avec professionnels de santé',
      'Newsletter & actualités',
      'Agenda en avant-première',
    ],
    featured: true,
    badge: '⭐ Le plus choisi',
    btnLabel: 'Adhérer maintenant →',
    btnStyle: 'bg-white text-[#2E7D32] hover:bg-[#1B3A5C] hover:text-white',
  },
  {
    nom: 'Adhésion + Don',
    prix: '15',
    unite: '/an + don libre',
    sousTitre: 'Don à votre convenance',
    desc: 'Devenez membre ET soutenez financièrement l\'association avec un don libre.',
    features: ['Tous les avantages membre', 'Reçu fiscal pour le don', 'Don : montant à votre convenance'],
    featured: false,
    btnLabel: 'Choisir cette formule',
    btnStyle: 'bg-gray-100 text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white',
  },
]

export default function Adhesion() {
  return (
    <section id="adhesion" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#34A0B0]">Adhésion & Dons</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B3A5C] mt-3 mb-4">
          Rejoindre <span className="text-[#E8524A]">AVanCe</span>
        </h2>
        <p className="text-[16px] text-gray-500 leading-relaxed max-w-[580px] mb-14">
          Votre adhésion et vos dons permettent de financer les activités et de soutenir les patients AVC. Chaque contribution, même modeste, compte.
        </p>

        {/* Boutons de don rapide */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider mb-4">💝 Don rapide — choisissez un montant</div>
          <div className="flex flex-wrap gap-3">
            {dons.map((d) => (
              <button
                key={d}
                className="px-5 py-2.5 rounded-xl border-2 border-gray-200 text-[14px] font-semibold text-[#1B3A5C] hover:border-[#4DB8C8] hover:bg-[#4DB8C8]/5 hover:text-[#34A0B0] transition-all"
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Formules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {formules.map((f) => (
            <div
              key={f.nom}
              className={`relative rounded-2xl p-9 text-center transition-all duration-200 ${
                f.featured
                  ? 'bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white shadow-[0_12px_40px_rgba(46,125,50,0.35)] scale-[1.04] hover:scale-[1.06]'
                  : 'bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              {f.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1B3A5C] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
                  {f.badge}
                </div>
              )}

              <h3 className={`text-[18px] font-bold mb-3 ${f.featured ? 'text-white' : 'text-[#1B3A5C]'}`}>{f.nom}</h3>

              {f.prix ? (
                <div className={`text-5xl font-extrabold leading-none my-5 ${f.featured ? 'text-white' : 'text-[#2E7D32]'}`}>
                  <sup className="text-2xl align-super">€</sup>{f.prix}
                  <small className={`text-base font-medium ml-1 ${f.featured ? 'text-white/80' : 'text-gray-400'}`}>{f.unite}</small>
                </div>
              ) : (
                <div className={`text-3xl font-extrabold leading-none my-5 ${f.featured ? 'text-white' : 'text-[#2E7D32]'}`}>
                  Libre
                </div>
              )}

              <div className={`text-[13px] mb-4 ${f.featured ? 'text-white/75' : 'text-gray-400'}`}>{f.sousTitre}</div>
              <p className={`text-[14px] leading-relaxed mb-6 ${f.featured ? 'text-white/85' : 'text-gray-500'}`}>{f.desc}</p>

              <ul className="flex flex-col gap-2.5 mb-8 text-left">
                {f.features.map((feat) => (
                  <li key={feat} className={`flex items-start gap-2.5 text-[13px] ${f.featured ? 'text-white/90' : 'text-gray-600'}`}>
                    <span className={`font-bold flex-shrink-0 mt-0.5 ${f.featured ? 'text-white/80' : 'text-[#4DB8C8]'}`}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/adhesion"
                className={`block w-full py-3 rounded-xl font-bold text-[15px] transition-all ${f.btnStyle}`}
              >
                {f.btnLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
