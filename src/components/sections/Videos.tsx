const themes = [
  {
    icon: '🧠',
    titre: 'Les signes de l\'AVC',
    desc: 'Reconnaître rapidement les signes d\'alerte d\'un AVC. Vidéo pour tout public.',
    public: 'Tout public',
    color: 'bg-[#E8524A]/10 text-[#E8524A]',
  },
  {
    icon: '💊',
    titre: 'Gestion de la tension artérielle',
    desc: 'Comprendre et surveiller sa tension artérielle après un AVC.',
    public: 'Patients & aidants',
    color: 'bg-[#4DB8C8]/10 text-[#34A0B0]',
  },
  {
    icon: '🔍',
    titre: 'Complications post-AVC',
    desc: 'Identifier les signes de complications après un AVC et réagir efficacement.',
    public: 'Professionnels de santé',
    color: 'bg-[#1B3A5C]/10 text-[#1B3A5C]',
  },
  {
    icon: '🏃',
    titre: 'Activité physique & rééducation',
    desc: 'Reprendre une activité physique adaptée après un AVC pour favoriser la récupération.',
    public: 'Tout public',
    color: 'bg-[#E8524A]/10 text-[#E8524A]',
  },
  {
    icon: '🍽️',
    titre: 'Alimentation après un AVC',
    desc: 'L\'alimentation adaptée pour prévenir les récidives et favoriser la guérison.',
    public: 'Patients & aidants',
    color: 'bg-[#4DB8C8]/10 text-[#34A0B0]',
  },
  {
    icon: '❤️',
    titre: 'Vivre avec l\'AVC',
    desc: 'Témoignages, conseils et ressources pour mieux vivre au quotidien après un AVC.',
    public: 'Tout public',
    color: 'bg-[#1B3A5C]/10 text-[#1B3A5C]',
  },
]

export default function Videos() {
  return (
    <section id="videos" className="py-24 bg-[#1B3A5C]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#4DB8C8]/80">Espace vidéo</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3 mb-4">
          Vidéos sur l&apos;<span className="text-[#E8524A]">AVC</span>
        </h2>
        <p className="text-[16px] text-white/60 leading-relaxed max-w-[580px] mb-14">
          Des vidéos pédagogiques animées par <strong className="text-white/80">Judith LIVET</strong>, animatrice de filière AVC, à destination du grand public et des professionnels de santé.
        </p>

        {/* Grille thèmes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {themes.map((t) => (
            <div key={t.titre} className="bg-white/7 border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition-colors">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${t.color} text-2xl mb-4`}>
                {t.icon}
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">{t.titre}</h3>
              <p className="text-[13px] text-white/60 leading-relaxed mb-3">{t.desc}</p>
              <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full bg-white/10 text-white/50">
                {t.public}
              </span>
            </div>
          ))}
        </div>

        {/* Placeholder vidéos à venir */}
        <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-5">🎬</div>
          <h3 className="text-xl font-bold text-white mb-3">Vidéos en cours de production</h3>
          <p className="text-white/50 text-[15px] max-w-lg mx-auto leading-relaxed mb-6">
            Les vidéos animées par Judith LIVET seront publiées très prochainement.
            Abonnez-vous à notre chaîne YouTube pour être notifié dès la mise en ligne.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#E8524A] hover:bg-[#C93E37] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ▶️ S&apos;abonner à la chaîne YouTube
          </a>
        </div>

      </div>
    </section>
  )
}
