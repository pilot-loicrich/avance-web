import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const footerSocials = [
  { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/share/1EnMSdgvGz/?mibextid=wwXIfr' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/avance_by_jl?utm_source=qr' },
  { icon: FaTiktok, label: 'TikTok', href: 'https://tiktok.com/@AVanCe' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
]

const cols = [
  {
    titre: 'Navigation',
    liens: [
      { label: 'Notre mission', href: '#missions' },
      { label: 'Activités', href: '#activites' },
      { label: 'Agenda', href: '#agenda' },
      { label: 'Témoignages', href: '#temoignages' },
    ],
  },
  {
    titre: 'Membres',
    liens: [
      { label: 'Adhérer', href: '#adhesion' },
      { label: 'Espace membre', href: '#espace-membre' },
      { label: 'Faire un don', href: '#adhesion' },
      { label: 'Nos mécènes', href: '#' },
    ],
  },
  {
    titre: 'Infos',
    liens: [
      { label: 'Contact', href: '#contact' },
      { label: 'Mentions légales', href: '#' },
      { label: 'RGPD', href: '#' },
      { label: 'Actualités', href: '#actualites' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#1B3A5C] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#E8524A] to-[#4DB8C8] flex items-center justify-center text-xl">
                🧠
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-xl font-extrabold tracking-tight">
                  <span className="text-[#E8524A]">A</span>
                  <span className="text-[#E8524A]">V</span>
                  <span className="text-[#4DB8C8]">a</span>
                  <span className="text-[#4DB8C8]">n</span>
                  <span className="text-[#E8524A]">C</span>
                  <span className="text-[#4DB8C8]">e</span>
                </div>
                <div className="text-[10px] text-white/40 tracking-wide">Sis à Auxerre</div>
              </div>
            </div>
            <p className="text-[13.5px] text-white/50 leading-relaxed max-w-[280px]">
              &laquo; Une chose précieuse, l&apos;information juste… nous sommes là pour aider &raquo;
            </p>
            <div className="flex gap-2 mt-5">
              {footerSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Colonnes */}
          {cols.map((col) => (
            <div key={col.titre}>
              <div className="text-[12px] font-bold tracking-[0.8px] uppercase text-white/40 mb-4">{col.titre}</div>
              <ul className="flex flex-col gap-2.5">
                {col.liens.map((lien) => (
                  <li key={lien.label}>
                    <Link href={lien.href} className="text-[14px] text-white/60 hover:text-[#4DB8C8] transition-colors">
                      {lien.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-[13px] text-white/35">© 2026 AVanCe — Association loi 1901 · Créée en mai 2018</div>
          <div className="text-[12px] text-white/30 flex items-center gap-4">
            <span>📞 06 31 01 02 20</span>
            <span>✉️ association.avance.2025@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
