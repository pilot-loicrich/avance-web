'use client'

import { useState } from 'react'
import Link from 'next/link'

// ⬇️ Remplace cette URL par le vrai lien HelloAsso de Judith quand tu l'as
const HELLOASSO_URL = process.env.NEXT_PUBLIC_HELLOASSO_URL || ''

const formules = [
  {
    id: 'adhesion',
    nom: 'Adhésion annuelle',
    prix: '15€',
    desc: 'Accès complet à l\'espace membre, toutes les activités gratuites, agenda en avant-première.',
    features: ['Espace membre privé', 'Activités mensuelles gratuites', 'Invitations conférences', 'Newsletter exclusive'],
    color: 'border-[#E8524A]',
    badge: '⭐ Le plus choisi',
    featured: true,
  },
  {
    id: 'don30',
    nom: 'Don de soutien',
    prix: '30€',
    desc: 'Soutenez AVanCe sans adhérer. Déductible des impôts à 66%.',
    features: ['Reçu fiscal immédiat', 'Déductible à 66%', 'Montant libre possible'],
    color: 'border-[#4DB8C8]',
    featured: false,
  },
  {
    id: 'adhesion-don',
    nom: 'Adhésion + Don',
    prix: '45€',
    desc: 'Devenez membre ET soutenez l\'association davantage.',
    features: ['Tous les avantages membre', 'Reçu fiscal pour le don', 'Soutien renforcé'],
    color: 'border-[#1B3A5C]',
    featured: false,
  },
]

export default function AdhesionPage() {
  const [selected, setSelected] = useState('adhesion')
  const [showIframe, setShowIframe] = useState(false)

  const handlePayer = () => {
    if (!HELLOASSO_URL) {
      alert('Le formulaire de paiement sera bientôt disponible. Contactez-nous à jlivet@ch-auxerre.fr')
      return
    }
    setShowIframe(true)
    setTimeout(() => {
      document.getElementById('helloasso-frame')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e8f3f5] pt-[72px]">

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#1B3A5C] to-[#2A5280] py-16 px-6 text-white text-center">
        <span className="inline-flex items-center gap-2 bg-[#4DB8C8]/20 text-[#4DB8C8] border border-[#4DB8C8]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
          💳 Adhésion & Dons
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Rejoindre <span className="text-[#E8524A]">AVanCe</span>
        </h1>
        <p className="text-white/70 text-[16px] max-w-xl mx-auto">
          Votre adhésion finance les activités et soutient les patients AVC et leurs aidants.
          Paiement sécurisé via HelloAsso — 0% de frais pour l&apos;association.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* Badges de confiance */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: '🔒', label: 'Paiement 100% sécurisé' },
            { icon: '🧾', label: 'Reçu fiscal automatique' },
            { icon: '🇫🇷', label: 'Plateforme HelloAsso française' },
            { icon: '💸', label: '0% de frais pour l\'asso' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-[13px] font-medium text-[#1B3A5C]">
              <span>{b.icon}</span> {b.label}
            </div>
          ))}
        </div>

        {/* Choix de formule */}
        <h2 className="text-xl font-bold text-[#1B3A5C] text-center mb-7">Choisissez votre formule</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {formules.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelected(f.id)}
              className={`text-left bg-white rounded-2xl p-6 border-2 transition-all duration-200 relative ${
                selected === f.id
                  ? `${f.color} shadow-lg scale-[1.02]`
                  : 'border-gray-100 hover:border-gray-200 shadow-sm'
              }`}
            >
              {f.badge && (
                <span className="absolute -top-3 left-4 bg-[#E8524A] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {f.badge}
                </span>
              )}
              <div className={`text-2xl font-extrabold mb-1 ${f.featured ? 'text-[#E8524A]' : 'text-[#1B3A5C]'}`}>
                {f.prix}
              </div>
              <div className="text-[15px] font-bold text-[#1B3A5C] mb-2">{f.nom}</div>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{f.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {f.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-[12.5px] text-gray-600">
                    <span className="text-[#4DB8C8] font-bold">✓</span> {feat}
                  </li>
                ))}
              </ul>
              {selected === f.id && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#E8524A] flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Bouton payer */}
        <div className="text-center mb-10">
          <button
            onClick={handlePayer}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E8524A] to-[#C93E37] text-white font-bold text-[16px] px-10 py-4 rounded-2xl shadow-[0_8px_32px_rgba(232,82,74,0.4)] hover:shadow-[0_12px_40px_rgba(232,82,74,0.5)] hover:-translate-y-1 transition-all"
          >
            <span>💳</span>
            Payer via HelloAsso →
          </button>
          <p className="text-[12px] text-gray-400 mt-3">
            Vous serez redirigé vers HelloAsso, plateforme sécurisée de paiement pour associations
          </p>
        </div>

        {/* Iframe HelloAsso */}
        {showIframe && HELLOASSO_URL && (
          <div id="helloasso-frame" className="bg-white rounded-3xl p-4 shadow-lg overflow-hidden">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-[#E8524A] flex items-center justify-center text-white text-sm font-bold">H</div>
              <div>
                <div className="text-[14px] font-bold text-[#1B3A5C]">HelloAsso — Paiement sécurisé</div>
                <div className="text-[12px] text-gray-400">Association AVanCe</div>
              </div>
              <div className="ml-auto flex items-center gap-1 text-[12px] text-green-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Connexion sécurisée
              </div>
            </div>
            <iframe
              src={HELLOASSO_URL}
              width="100%"
              height="700"
              className="rounded-xl"
              style={{ border: 'none' }}
              title="Formulaire d'adhésion HelloAsso AVanCe"
              allow="payment"
            />
          </div>
        )}

        {/* Message si pas encore configuré */}
        {showIframe && !HELLOASSO_URL && (
          <div className="bg-[#4DB8C8]/10 border-2 border-[#4DB8C8]/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">⏳</div>
            <h3 className="text-[18px] font-bold text-[#1B3A5C] mb-3">Paiement en ligne bientôt disponible</h3>
            <p className="text-gray-500 text-[14px] mb-6 max-w-md mx-auto">
              Le formulaire HelloAsso est en cours de configuration. En attendant, contactez-nous directement pour adhérer.
            </p>
            <Link
              href="mailto:jlivet@ch-auxerre.fr?subject=Adhésion AVanCe"
              className="inline-flex items-center gap-2 bg-[#1B3A5C] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2A5280] transition-colors"
            >
              ✉️ Contacter par email
            </Link>
          </div>
        )}

        {/* FAQ */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-[#1B3A5C] mb-6 text-center">Questions fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: 'L\'adhésion est-elle obligatoire ?', r: 'Non, vous pouvez assister à certaines activités sans adhérer. Mais l\'adhésion (15€/an) donne accès à l\'espace membre et à toutes les activités gratuitement.' },
              { q: 'Le don est-il déductible des impôts ?', r: 'Oui ! En tant qu\'association d\'intérêt général, vos dons à AVanCe sont déductibles à 66% de votre impôt sur le revenu. HelloAsso génère le reçu fiscal automatiquement.' },
              { q: 'Comment fonctionne HelloAsso ?', r: 'HelloAsso est une plateforme de paiement 100% dédiée aux associations françaises. Le paiement est sécurisé et l\'association ne paie aucun frais.' },
              { q: 'J\'ai payé, comment accéder à l\'espace membre ?', r: 'Après paiement, créez votre compte sur la page /register avec la même adresse email. Votre adhésion sera validée sous 24h.' },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="text-[14px] font-bold text-[#1B3A5C] mb-2">❓ {item.q}</div>
                <div className="text-[13.5px] text-gray-500 leading-relaxed">{item.r}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
