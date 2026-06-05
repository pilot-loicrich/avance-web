import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import LogoutButton from '@/components/LogoutButton'

export default async function EspaceMembrePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const prenom = user.user_metadata?.prenom || user.email?.split('@')[0] || 'Membre'

  return (
    <div className="min-h-screen bg-gray-50 pt-[72px]">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#1B3A5C] to-[#2A5280] rounded-3xl p-8 mb-8 text-white flex items-center justify-between">
          <div>
            <div className="text-[#4DB8C8] text-sm font-semibold uppercase tracking-wider mb-2">Espace Membre</div>
            <h1 className="text-2xl font-extrabold mb-1">Bonjour, {prenom} 👋</h1>
            <p className="text-white/60 text-sm">{user.email}</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-icon.png" alt="AVanCe" className="w-full h-full object-contain" />
            </div>
            <LogoutButton />
          </div>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            { icon: '💬', titre: 'Mes questions', desc: 'Posez vos questions à nos professionnels', color: 'from-[#E8524A]/10 to-[#E8524A]/5', badge: 'Bientôt disponible' },
            { icon: '📅', titre: 'Agenda exclusif', desc: 'Inscriptions en avant-première', color: 'from-[#4DB8C8]/10 to-[#4DB8C8]/5', badge: 'Bientôt disponible' },
            { icon: '📰', titre: 'Actualités membres', desc: 'Ressources et publications exclusives', color: 'from-[#1B3A5C]/10 to-[#1B3A5C]/5', badge: 'Bientôt disponible' },
          ].map((item) => (
            <div key={item.titre} className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 border border-gray-100`}>
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-[16px] font-bold text-[#1B3A5C] mb-2">{item.titre}</h3>
              <p className="text-[13px] text-gray-500 mb-4">{item.desc}</p>
              <span className="inline-block bg-white text-[#1B3A5C] text-[11px] font-semibold px-3 py-1 rounded-full border border-gray-200">
                {item.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Mon témoignage */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-[18px] font-bold text-[#1B3A5C] mb-5">✍️ Partager mon témoignage</h2>
          <form className="flex flex-col gap-4">
            <textarea
              placeholder="Partagez votre expérience avec AVanCe, votre parcours après l'AVC, ce qui vous a aidé..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 text-[14px] focus:outline-none focus:border-[#4DB8C8] transition-colors resize-y"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#E8524A] to-[#C93E37] text-white font-bold text-[14px] shadow-[0_4px_16px_rgba(232,82,74,0.3)] hover:-translate-y-0.5 transition-all"
              >
                Publier mon témoignage →
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
