'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function RegisterPage() {
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { prenom, nom, full_name: `${prenom} ${nom}` },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e8f3f5] flex items-center justify-center px-4 pt-[72px]">
        <div className="w-full max-w-md text-center bg-white rounded-3xl p-10 shadow-[0_4px_32px_rgba(27,58,92,0.08)]">
          <div className="text-5xl mb-5">✅</div>
          <h2 className="text-xl font-bold text-[#1B3A5C] mb-3">Compte créé !</h2>
          <p className="text-gray-500 text-[14px] leading-relaxed mb-7">
            Un email de confirmation a été envoyé à <strong>{email}</strong>.
            Cliquez sur le lien pour activer votre compte puis connectez-vous.
          </p>
          <Link
            href="/login"
            className="inline-block bg-gradient-to-r from-[#4DB8C8] to-[#34A0B0] text-white font-bold px-8 py-3 rounded-xl"
          >
            Se connecter →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e8f3f5] flex items-center justify-center px-4 pt-[72px]">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-avance.png" alt="AVanCe" className="h-14 w-auto mx-auto mb-3" />
          <p className="text-gray-400 text-sm">Créer mon compte membre</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_4px_32px_rgba(27,58,92,0.08)]">
          <h1 className="text-xl font-bold text-[#1B3A5C] mb-1">Adhésion annuelle</h1>
          <p className="text-sm text-gray-400 mb-7">15€/an · Accès complet à l&apos;espace membre</p>

          {error && (
            <div className="bg-[#E8524A]/10 text-[#E8524A] text-sm font-medium px-4 py-3 rounded-xl mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Prénom</label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Marie"
                  required
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Nom</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Dupont"
                  required
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Adresse email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="marie.dupont@email.fr"
                required
                className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="8 caractères minimum"
                minLength={8}
                required
                className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors"
              />
            </div>

            <div className="bg-[#4DB8C8]/10 rounded-xl p-4 text-[13px] text-[#34A0B0] font-medium">
              ℹ️ Après inscription, vous recevrez un lien de confirmation par email.
              Le paiement de l&apos;adhésion (15€) se fait ensuite via HelloAsso.
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E8524A] to-[#C93E37] text-white font-bold text-[15px] shadow-[0_4px_16px_rgba(232,82,74,0.35)] hover:shadow-[0_6px_24px_rgba(232,82,74,0.5)] hover:-translate-y-0.5 transition-all mt-1 disabled:opacity-60"
            >
              {loading ? 'Création...' : 'Créer mon compte →'}
            </button>
          </form>

          <p className="text-center text-[13px] text-gray-400 mt-5">
            Déjà membre ?{' '}
            <Link href="/login" className="text-[#4DB8C8] font-semibold hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
