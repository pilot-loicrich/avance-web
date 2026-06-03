'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Email ou mot de passe incorrect.')
      setLoading(false)
    } else {
      router.push('/espace-membre')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e8f3f5] flex items-center justify-center px-4 pt-[72px]">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8524A] to-[#4DB8C8] flex items-center justify-center text-3xl mx-auto mb-4 shadow-[0_8px_24px_rgba(232,82,74,0.3)]">
            🧠
          </div>
          <div className="text-2xl font-extrabold text-[#1B3A5C]">
            <span className="text-[#E8524A]">A</span>
            <span>V</span>
            <span className="text-[#4DB8C8]">a</span>
            <span>n</span>
            <span className="text-[#E8524A]">C</span>
            <span className="text-[#4DB8C8]">e</span>
          </div>
          <p className="text-gray-400 text-sm mt-1">Espace membre</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_4px_32px_rgba(27,58,92,0.08)]">
          <h1 className="text-xl font-bold text-[#1B3A5C] mb-1">Connexion</h1>
          <p className="text-sm text-gray-400 mb-7">Accédez à votre espace personnel AVanCe</p>

          {error && (
            <div className="bg-[#E8524A]/10 text-[#E8524A] text-sm font-medium px-4 py-3 rounded-xl mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-[#1B3A5C] mb-1.5">Adresse email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prenom.nom@email.fr"
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
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#4DB8C8] to-[#34A0B0] text-white font-bold text-[15px] shadow-[0_4px_16px_rgba(77,184,200,0.4)] hover:shadow-[0_6px_24px_rgba(77,184,200,0.5)] hover:-translate-y-0.5 transition-all mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Connexion...' : 'Se connecter →'}
            </button>
          </form>

          <div className="text-center text-[13px] text-gray-400 my-5">— Pas encore membre ? —</div>

          <Link
            href="/register"
            className="block w-full py-3 rounded-xl border-2 border-[#E8524A] text-[#E8524A] font-semibold text-[14px] text-center hover:bg-[#E8524A] hover:text-white transition-all"
          >
            Adhérer pour 15€/an
          </Link>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-[13px] text-gray-400 hover:text-[#34A0B0] transition-colors">
            ← Retour au site
          </Link>
        </div>
      </div>
    </div>
  )
}
