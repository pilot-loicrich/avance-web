const missions = [
  {
    icon: '❤️‍🩹',
    titre: 'Accompagnement',
    texte: 'Soutien personnalisé des patients et de leurs aidants, de la phase aiguë jusqu\'à la réinsertion dans la vie quotidienne.',
    borderColor: 'border-t-[#E8524A]',
    iconBg: 'bg-[#E8524A]/10',
  },
  {
    icon: '📚',
    titre: 'Information',
    texte: 'Publications, conférences et ressources vérifiées par des professionnels de santé. L\'information juste, accessible à tous.',
    borderColor: 'border-t-[#4DB8C8]',
    iconBg: 'bg-[#4DB8C8]/10',
  },
  {
    icon: '🤝',
    titre: 'Communauté',
    texte: 'Un réseau bienveillant de patients, d\'aidants et de soignants pour ne jamais traverser cette épreuve seul.',
    borderColor: 'border-t-[#1B3A5C]',
    iconBg: 'bg-[#1B3A5C]/08',
  },
]

export default function Missions() {
  return (
    <section id="missions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#34A0B0]">Nos missions</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B3A5C] mt-3 mb-4">
          Pourquoi AVanCe <span className="text-[#E8524A]">existe</span> ?
        </h2>
        <p className="text-[16px] text-gray-500 leading-relaxed max-w-[580px] mb-14">
          Nous croyons qu&apos;une information juste, donnée au bon moment, change une vie.
          AVanCe est là pour accompagner chaque étape après un AVC.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missions.map((m) => (
            <div
              key={m.titre}
              className={`bg-white rounded-2xl p-8 border-t-4 ${m.borderColor} shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
            >
              <div className={`w-13 h-13 rounded-[14px] ${m.iconBg} flex items-center justify-center text-2xl mb-5 w-[52px] h-[52px]`}>
                {m.icon}
              </div>
              <h3 className="text-[17px] font-bold text-[#1B3A5C] mb-3">{m.titre}</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed">{m.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
