'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LogoutButton() {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="text-[13px] text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-4 py-1.5 rounded-lg transition-all"
    >
      Déconnexion
    </button>
  )
}
