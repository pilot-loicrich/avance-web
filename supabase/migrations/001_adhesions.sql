-- Table des adhésions et dons AVanCe
-- À exécuter dans Supabase > SQL Editor

CREATE TABLE IF NOT EXISTS public.adhesions (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email           TEXT NOT NULL,
  montant_centimes INTEGER NOT NULL DEFAULT 0,
  date_paiement   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  statut          TEXT NOT NULL DEFAULT 'valide' CHECK (statut IN ('valide', 'annule', 'rembourse')),
  source          TEXT NOT NULL DEFAULT 'helloasso',
  payload_brut    JSONB,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour rechercher par email
CREATE INDEX IF NOT EXISTS adhesions_email_idx ON public.adhesions (email);

-- Sécurité : seul le service role peut lire/écrire (webhook uniquement)
ALTER TABLE public.adhesions ENABLE ROW LEVEL SECURITY;

-- Les utilisateurs connectés peuvent voir leur propre adhésion
CREATE POLICY "Voir sa propre adhésion" ON public.adhesions
  FOR SELECT USING (auth.jwt() ->> 'email' = email);

-- Table des témoignages membres
CREATE TABLE IF NOT EXISTS public.temoignages (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email       TEXT,
  prenom      TEXT,
  contenu     TEXT NOT NULL,
  valide      BOOLEAN DEFAULT FALSE, -- modération avant publication
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.temoignages ENABLE ROW LEVEL SECURITY;

-- Membres connectés peuvent créer un témoignage
CREATE POLICY "Créer un témoignage" ON public.temoignages
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Tout le monde peut lire les témoignages validés
CREATE POLICY "Lire les témoignages validés" ON public.temoignages
  FOR SELECT USING (valide = TRUE);

-- Membres voient leur propre témoignage même non validé
CREATE POLICY "Voir son propre témoignage" ON public.temoignages
  FOR SELECT USING (auth.uid() = user_id);
