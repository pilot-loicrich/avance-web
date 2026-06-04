const missions = [
  {
    icon: '🤝',
    titre: 'Contact social',
    texte: 'Maintenir un contact social entre patients et aidants naturels. Ne jamais traverser cette épreuve seul.',
    borderColor: 'border-t-[#E8524A]',
    iconBg: 'bg-[#E8524A]/10',
  },
  {
    icon: '🧠',
    titre: 'Activités bénéfiques',
    texte: 'Proposer des activités bénéfiques pour le cerveau, encadrées par des professionnels bénévoles.',
    borderColor: 'border-t-[#4DB8C8]',
    iconBg: 'bg-[#4DB8C8]/10',
  },
  {
    icon: '🏥',
    titre: 'Plateforme de santé',
    texte: 'Offrir une plateforme avec des interventions de divers professionnels de la santé impliqués dans la filière AVC.',
    borderColor: 'border-t-[#1B3A5C]',
    iconBg: 'bg-[#1B3A5C]/08',
  },
  {
    icon: '💡',
    titre: 'Partage d\'idées',
    texte: 'Partager des idées utiles et facilitatrices pour mieux vivre au quotidien après un AVC.',
    borderColor: 'border-t-[#E8524A]',
    iconBg: 'bg-[#E8524A]/10',
  },
  {
    icon: '🔍',
    titre: 'Solutions ensemble',
    texte: 'Parler de vos limites après un AVC et rechercher ensemble les solutions possibles… etc.',
    borderColor: 'border-t-[#4DB8C8]',
    iconBg: 'bg-[#4DB8C8]/10',
  },
]

const sujets = [
  'La peur face au risque de récidive',
  'Le handicap visible et handicap invisible',
  'L\'observance et la compliance aux traitements',
  'L\'alimentation',
  'L\'activité physique',
  'Les activités et les loisirs',
  '… Etc.',
]

export default function Missions() {
  return (
    <section id="missions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#34A0B0]">Nos missions</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B3A5C] mt-3 mb-4">
          Pourquoi AVanCe <span className="text-[#E8524A]">existe</span> ?
        </h2>
        <p className="text-[16px] text-gray-500 leading-relaxed max-w-[640px] mb-14">
          Créée en mai 2018, AVanCe est <strong className="text-[#1B3A5C]">d&apos;abord un accompagnement de groupe</strong> pour toute personne atteinte d&apos;un AVC et ses proches (aidants naturels).
        </p>

        {/* Missions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {missions.map((m) => (
            <div
              key={m.titre}
              className={`bg-white rounded-2xl p-7 border-t-4 ${m.borderColor} shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
            >
              <div className={`w-[52px] h-[52px] rounded-[14px] ${m.iconBg} flex items-center justify-center text-2xl mb-5`}>
                {m.icon}
              </div>
              <h3 className="text-[16px] font-bold text-[#1B3A5C] mb-3">{m.titre}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">{m.texte}</p>
            </div>
          ))}

          {/* Card spéciale "Espace conseil" */}
          <div className="bg-gradient-to-br from-[#1B3A5C] to-[#2A5280] rounded-2xl p-7 text-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-[52px] h-[52px] rounded-[14px] bg-white/10 flex items-center justify-center text-2xl mb-5">💬</div>
              <h3 className="text-[16px] font-bold mb-3">Espace conseil</h3>
              <p className="text-[14px] text-white/75 leading-relaxed">
                Un espace dédié aux échanges, réflexions et conseils sur des thèmes ciblés en lien avec l&apos;AVC.
              </p>
            </div>
            <div className="mt-5 text-[12px] text-white/50 italic">
              « Une chose précieuse, l&apos;information juste… nous sommes là pour aider »
            </div>
          </div>
        </div>

        {/* Sujets récurrents */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#34A0B0]">Sujets récurrents abordés</span>
              <h3 className="text-xl font-bold text-[#1B3A5C] mt-2 mb-6">Ce dont on parle ensemble</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sujets.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[14px] text-gray-600">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E8524A]/10 text-[#E8524A] flex items-center justify-center text-[11px] font-bold flex-shrink-0">→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-72 bg-gradient-to-br from-[#4DB8C8]/10 to-[#E8524A]/5 rounded-2xl p-6 border border-[#4DB8C8]/20">
              <div className="text-2xl mb-3">👥</div>
              <h4 className="text-[15px] font-bold text-[#1B3A5C] mb-2">À qui s&apos;adresse AVanCe ?</h4>
              <p className="text-[13.5px] text-gray-500 leading-relaxed">
                Toute personne atteinte d&apos;un AVC et ses proches <strong className="text-[#1B3A5C]">(aidants naturels)</strong>.
              </p>
              <div className="mt-4 pt-4 border-t border-[#4DB8C8]/20 text-[12px] text-gray-400">
                Patients · Familles · Aidants · Soignants
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
