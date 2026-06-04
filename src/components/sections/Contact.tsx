import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const infos = [
  { icon: '📍', label: 'Adresse', value: 'Domiciliation au CH d\'Auxerre\nen cours', iconBg: 'bg-[#E8524A]/10' },
  { icon: '📞', label: 'Téléphone', value: '06 31 01 02 20', iconBg: 'bg-[#4DB8C8]/10' },
  { icon: '✉️', label: 'Email', value: 'association.avance.2025@gmail.com', iconBg: 'bg-[#1B3A5C]/08' },
]

const socials = [
  { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/share/1EnMSdgvGz/?mibextid=wwXIfr', color: 'hover:bg-[#1877F2]' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/avance_by_jl?utm_source=qr', color: 'hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]' },
  { icon: FaTiktok, label: 'TikTok', href: 'https://tiktok.com/@AVanCe', color: 'hover:bg-black' },
  { icon: FaYoutube, label: 'YouTube', href: '#', color: 'hover:bg-[#FF0000]' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Infos */}
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#34A0B0]">Nous contacter</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1B3A5C] mt-3 mb-4">
              Nos <span className="text-[#E8524A]">coordonnées</span>
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed max-w-[420px] mb-10">
              Une question ? Une demande d&apos;adhésion ? Notre équipe vous répond dans les plus brefs délais.
            </p>

            <div className="flex flex-col gap-5">
              {infos.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex-shrink-0 ${info.iconBg} flex items-center justify-center text-xl`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">{info.label}</div>
                    <div className="text-[15px] font-semibold text-[#1B3A5C] mt-0.5 whitespace-pre-line">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-8">
              <div className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-4">Réseaux sociaux · @AVanCe</div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-[#1B3A5C] ${s.color} hover:text-white hover:-translate-y-0.5 transition-all duration-200`}
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Judith LIVET */}
            <div className="mt-8 bg-gradient-to-r from-[#4DB8C8]/10 to-[#4DB8C8]/5 rounded-2xl p-5 border border-[#4DB8C8]/20">
              <div className="text-[12px] font-semibold text-[#34A0B0] uppercase tracking-wider mb-1">Membre fondatrice</div>
              <div className="text-[15px] font-bold text-[#1B3A5C]">Judith LIVET</div>
              <div className="text-[13px] text-gray-500 mt-1">Animatrice de filière AVC · CH d&apos;Auxerre</div>
              <div className="text-[13px] text-gray-400 mt-0.5">jlivet@ch-auxerre.fr</div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-gray-50 rounded-3xl p-10">
            <h3 className="text-[18px] font-bold text-[#1B3A5C] mb-1">Envoyez-nous un message</h3>
            <p className="text-[14px] text-gray-400 mb-7">Nous vous répondrons dans les 48h.</p>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Prénom</label>
                  <input type="text" placeholder="Marie" className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Nom</label>
                  <input type="text" placeholder="Dupont" className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Email</label>
                <input type="email" placeholder="marie.dupont@email.fr" className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Je suis…</label>
                <select className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors bg-white">
                  <option value="">Choisir...</option>
                  <option>Patient ayant eu un AVC</option>
                  <option>Aidant / proche d&apos;un patient AVC</option>
                  <option>Professionnel de santé</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Message</label>
                <textarea
                  placeholder="Votre message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E8524A] to-[#C93E37] text-white font-bold text-[15px] shadow-[0_4px_16px_rgba(232,82,74,0.35)] hover:shadow-[0_6px_24px_rgba(232,82,74,0.5)] hover:-translate-y-0.5 transition-all mt-1"
              >
                Envoyer le message →
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
