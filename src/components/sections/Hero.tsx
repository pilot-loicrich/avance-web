import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#edf4f7] to-[#e8f3f5] flex items-center pt-[72px] overflow-hidden relative">
      {/* Blobs décoratifs */}
      <div className="absolute top-[-120px] right-[-120px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(77,184,200,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(232,82,74,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* Texte gauche */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#4DB8C8]/10 text-[#34A0B0] border border-[#4DB8C8]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4DB8C8] animate-pulse" />
            Réseau AVC · CH d&apos;Auxerre
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.15] tracking-tight text-[#1B3A5C] mb-5">
            Soutien, information<br />
            et <span className="text-[#E8524A]">accompagnement</span><br />
            après un <span className="text-[#4DB8C8]">AVC</span>
          </h1>

          <p className="text-[17px] leading-relaxed text-gray-500 mb-9 max-w-[480px]">
            AVanCe accompagne les personnes touchées par un AVC et leurs aidants naturels.
            Information juste, activités bénéfiques, communauté bienveillante.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#adhesion"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8524A] to-[#C93E37] text-white font-bold text-[15px] px-7 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(232,82,74,0.4)] hover:shadow-[0_8px_28px_rgba(232,82,74,0.5)] hover:-translate-y-0.5 transition-all"
            >
              Devenir membre →
            </Link>
            <Link
              href="#missions"
              className="inline-flex items-center gap-2 bg-white text-[#1B3A5C] font-semibold text-[15px] px-6 py-3.5 rounded-xl border-2 border-gray-200 hover:border-[#4DB8C8] hover:text-[#34A0B0] transition-all"
            >
              Découvrir AVanCe
            </Link>
          </div>
        </div>

        {/* Carte droite */}
        <div className="hidden lg:flex justify-center items-center relative">
          {/* Pill flottante haut */}
          <div className="absolute top-[-16px] right-[-24px] bg-white rounded-full px-5 py-2.5 text-[13px] font-semibold text-[#34A0B0] shadow-[0_8px_24px_rgba(27,58,92,0.12)] flex items-center gap-2 whitespace-nowrap z-10">
            🏥 Réseau neurologique certifié
          </div>

          <div className="bg-white rounded-3xl p-9 shadow-[0_20px_60px_rgba(27,58,92,0.12),0_4px_16px_rgba(27,58,92,0.06)] w-full max-w-[420px] relative z-10">
            {/* Header carte */}
            <div className="flex items-center gap-4 pb-5 mb-7 border-b border-gray-100">
              <div className="w-16 h-16 rounded-[18px] bg-gradient-to-br from-[#4DB8C8] to-[#E8524A] flex items-center justify-center text-3xl shadow-[0_6px_20px_rgba(77,184,200,0.4)]">
                🧠
              </div>
              <div>
                <div className="text-[18px] font-bold text-[#1B3A5C]">AVanCe en chiffres</div>
                <div className="text-[13px] text-gray-400 mt-0.5">Réseau actif depuis 2021</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3.5 mb-5">
              {[
                { val: '28', label: 'Membres actifs', color: 'text-[#E8524A]' },
                { val: '5', label: 'Activités / mois', color: 'text-[#34A0B0]' },
                { val: '15€', label: 'Adhésion annuelle', color: 'text-[#E8524A]' },
                { val: '100%', label: 'Bénévolat', color: 'text-[#34A0B0]' },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-4 text-center">
                  <div className={`text-3xl font-extrabold leading-none ${s.color}`}>{s.val}</div>
                  <div className="text-[11.5px] text-gray-400 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Activités */}
            <div className="flex flex-col gap-2.5">
              {[
                { emoji: '🎵', label: 'Thérapie mélodique' },
                { emoji: '🚶', label: 'Marche en groupe' },
                { emoji: '💃', label: 'Danse adaptée' },
              ].map((a) => (
                <div key={a.label} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2.5 text-[13.5px] font-medium text-[#1B3A5C]">
                  <span className="text-[18px]">{a.emoji}</span> {a.label}
                </div>
              ))}
            </div>
          </div>

          {/* Pill flottante bas */}
          <div className="absolute bottom-[-12px] left-[-16px] bg-white rounded-full px-5 py-2.5 text-[13px] font-semibold text-[#E8524A] shadow-[0_8px_24px_rgba(27,58,92,0.12)] flex items-center gap-2 whitespace-nowrap z-10">
            ❤️ +28 membres rejoints
          </div>
        </div>

      </div>
    </section>
  )
}
