export const COLORS = {
  rouge: '#E8524A',
  rougeDark: '#C93E37',
  turquoise: '#4DB8C8',
  turquoiseDark: '#34A0B0',
  marine: '#1B3A5C',
  marinLight: '#2A5280',
}

export const NAV_LINKS = [
  { label: 'Missions', href: '#missions' },
  { label: 'Activités', href: '#activites' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Actualités', href: '#actualites' },
  { label: 'Vidéos AVC', href: '#videos' },
  { label: 'Contact', href: '#contact' },
]

export const ACTIVITES = [
  {
    emoji: '🎵',
    nom: 'Thérapie Mélodique',
    freq: 'Mensuelle',
    animateur: 'M. CORNU Gilles, chef de cœur professionnel',
    color: 'from-[#4DB8C8] to-[#34A0B0]',
  },
  {
    emoji: '👃',
    nom: 'Rétro Olfaction',
    freq: 'Mensuelle',
    animateur: 'Mme GARRAUT Josiane, présidente de AVanCe',
    color: 'from-[#E8524A] to-[#C93E37]',
  },
  {
    emoji: '🚶',
    nom: 'Activité Marche',
    freq: 'Ponctuelle selon météo',
    animateur: 'Organisation collective',
    color: 'from-[#1B3A5C] to-[#2A5280]',
  },
  {
    emoji: '💃',
    nom: 'Danse Adaptée',
    freq: 'Sur invitation',
    animateur: 'Professionnelle extérieure',
    color: 'from-[#6B8FBF] to-[#4A6FA5]',
  },
  {
    emoji: '🍽️',
    nom: 'Cuisine Adaptée',
    freq: 'Ponctuelle',
    animateur: 'Mme YOUBI Fouzia, vice-présidente de AVanCe',
    color: 'from-[#F0776F] to-[#D95E56]',
  },
  {
    emoji: '🧠',
    nom: 'Séances de Brainstorming',
    freq: 'Sur invitation',
    animateur: 'Divers professionnels de la santé, filière AVC',
    color: 'from-[#34A0B0] to-[#1B3A5C]',
  },
]

export const TEMOIGNAGES = [
  {
    texte: "Je voudrais vous remercier pour l'entretien post AVC que nous avons eu hier et que j'ai bien apprécié. Vous m'avez permis de mieux comprendre ce que j'avais vécu et comment vivre la suite. J'y ai trouvé beaucoup d'intérêt et ce fut pour moi un entretien très positif.",
    auteur: 'L.R.',
    role: 'Patient',
    initiale: 'L',
    color: 'from-[#E8524A] to-[#F0776F]',
  },
  {
    texte: "Je renouvelle ce que je vous ai déjà indiqué, savoir que ces rendez-vous sont très importants et permettent d'être rassurés et encouragés. Encore merci pour votre accueil. Je trouve très enrichissants ces échanges post AVC et en même temps rassurants. Et vous le faites avec beaucoup d'empathie.",
    auteur: 'L.R.',
    role: 'Patient',
    initiale: 'L',
    color: 'from-[#4DB8C8] to-[#6BD4E0]',
  },
  {
    texte: "J'espère vous rejoindre pour la chorale après notre retour de cure si vous voulez bien m'en donner la date. Encore merci pour votre accueil.",
    auteur: 'L.R.',
    role: 'Patient',
    initiale: 'L',
    color: 'from-[#6B8FBF] to-[#2A5280]',
  },
]

export const AGENDA_EVENTS = [
  {
    jour: '1er', mois: 'Juil.',
    titre: 'Thérapie Mélodique',
    desc: 'Animée par M. Gilles CORNU, chef de cœur professionnel et bénévole.',
    tag: 'Mensuel',
    colorDate: 'bg-[#E8524A]/10 text-[#E8524A]',
    colorTag: 'bg-[#E8524A]/10 text-[#E8524A]',
  },
  {
    jour: '9', mois: 'Sept.',
    titre: 'Activité Marche',
    desc: 'Organisation ponctuelle selon la météo. Ouvert à tous les membres et adhérents.',
    tag: 'À confirmer',
    colorDate: 'bg-[#4DB8C8]/10 text-[#34A0B0]',
    colorTag: 'bg-[#4DB8C8]/10 text-[#34A0B0]',
  },
  {
    jour: '—', mois: 'TBD',
    titre: 'Atelier Rétro Olfaction',
    desc: 'Animé par Mme GARRAUT Josiane, présidente de AVanCe et professionnelle de la santé.',
    tag: 'Mensuel',
    colorDate: 'bg-[#1B3A5C]/08 text-[#1B3A5C]',
    colorTag: 'bg-[#1B3A5C]/10 text-[#1B3A5C]',
  },
]
