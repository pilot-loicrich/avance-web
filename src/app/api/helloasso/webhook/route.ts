import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Client Supabase avec la clé secrète (côté serveur uniquement)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('HelloAsso webhook reçu:', JSON.stringify(body, null, 2))

    // HelloAsso envoie un objet avec "eventType" et "data"
    const { eventType, data } = body

    // On traite uniquement les paiements complétés
    if (eventType !== 'Payment' && eventType !== 'Order') {
      return NextResponse.json({ received: true, action: 'ignored' })
    }

    // Extraire l'email du payeur
    const email =
      data?.payer?.email ||
      data?.order?.payer?.email ||
      null

    if (!email) {
      console.warn('Webhook HelloAsso : email introuvable dans le payload')
      return NextResponse.json({ received: true, action: 'no_email' })
    }

    const montant = data?.amount?.total || data?.amount || 0
    const date = data?.date || new Date().toISOString()

    // Enregistrer le paiement dans la table "adhesions"
    const { error: insertError } = await supabaseAdmin
      .from('adhesions')
      .insert({
        email,
        montant_centimes: montant,
        date_paiement: date,
        statut: 'valide',
        source: 'helloasso',
        payload_brut: body,
      })

    if (insertError) {
      console.error('Erreur insertion Supabase:', insertError)
    }

    // Chercher l'utilisateur Supabase par email et mettre à jour ses métadonnées
    const { data: users } = await supabaseAdmin.auth.admin.listUsers()
    const user = users?.users?.find((u) => u.email === email)

    if (user) {
      await supabaseAdmin.auth.admin.updateUserById(user.id, {
        user_metadata: {
          ...user.user_metadata,
          adhesion_valide: true,
          adhesion_date: date,
          adhesion_montant: montant,
        },
      })
      console.log(`✅ Adhésion activée pour ${email}`)
    } else {
      console.log(`ℹ️ Pas de compte trouvé pour ${email} — paiement enregistré quand même`)
    }

    return NextResponse.json({ received: true, action: 'processed', email })
  } catch (err) {
    console.error('Erreur webhook HelloAsso:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

// HelloAsso fait parfois un GET pour vérifier l'endpoint
export async function GET() {
  return NextResponse.json({ status: 'AVanCe HelloAsso webhook actif ✅' })
}
