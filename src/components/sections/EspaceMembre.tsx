import Link from 'next/link'

const features = [
  {
    icon: '💬',
    titre: 'Vos questions',
    desc: 'Posez vos questions à nos professionnels de santé bénévoles. Réponse garantie sous 48h.',
    iconBg: 'bg-[#E8524A]/10',
  },
  {
    icon: '⭐',
    titre: 'Vos avis & témoignages',
    desc: 'Partagez votre vécu, inspirez d\'autres patients et aidants en chemin vers le rétablissement.',
    iconBg: 'bg-[#4DB8C8]/10',
  },
  {
    icon: '📅',
    titre: 'Agenda exclusif',
    desc: 'Inscrivez-vous en avant-première aux activités et conférences avant ouverture au public.',
    iconBg: 'bg-[#1B3A5C]/08',
  },
]

export default function EspaceMembre() {
  return (
    <section id="espace-membre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Gauche */}
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#34A0B0]">Espace Membre</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B3A5C] mt-3 mb-4">
              Votre espace <span className="text-[#E8524A]">privé</span>
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed max-w-[480px] mb-10">
              Un espace sécurisé réservé aux membres pour partager, poser vos questions et accéder aux ressources exclusives.
            </p>

            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div key={f.titre} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-[#4DB8C8]/5 transition-colors">
                  <div className={`w-11 h-11 flex-shrink-0 rounded-xl ${f.iconBg} flex items-center justify-center text-xl`}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#1B3A5C] mb-1">{f.titre}</div>
                    <div className="text-[13px] text-gray-500 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Droite — formulaire login */}
          <div className="bg-gray-50 rounded-3xl p-10 shadow-sm">
            <h3 className="text-[20px] font-bold text-[#1B3A5C] mb-1">Connexion Espace Membre</h3>
            <p className="text-[14px] text-gray-400 mb-7">Accédez à votre espace personnel AVanCe</p>

            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Adresse email</label>
                <input
                  type="email"
                  placeholder="prenom.nom@email.fr"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Mot de passe</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#4DB8C8] to-[#34A0B0] text-white font-bold text-[15px] shadow-[0_4px_16px_rgba(77,184,200,0.4)] hover:shadow-[0_6px_24px_rgba(77,184,200,0.5)] hover:-translate-y-0.5 transition-all mt-1"
              >
                Se connecter →
              </button>
            </form>

            <div className="text-center text-[13px] text-gray-400 my-4">— Pas encore membre ? —</div>

            <Link
              href="#adhesion"
              className="block w-full py-3 rounded-xl border-2 border-[#E8524A] text-[#E8524A] font-semibold text-[14px] text-center hover:bg-[#E8524A] hover:text-white transition-all"
            >
              Adhérer pour 15€/an
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
