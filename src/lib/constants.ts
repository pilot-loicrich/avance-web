export const COLORS = {
  rouge: '#E8524A',
  rougeDark: '#C93E37',
  turquoise: '#4DB8C8',
  turquoiseDark: '#34A0B0',
  marine: '#1B3A5C',
  marinLight: '#2A5280',
}

export const NAV_LINKS = [
  { label: 'Notre mission', href: '#missions' },
  { label: 'Activités', href: '#activites' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Actualités', href: '#actualites' },
  { label: 'Contact', href: '#contact' },
]

export const ACTIVITES = [
  { emoji: '🎵', nom: 'Thérapie Mélodique', freq: 'Chaque mardi', color: 'from-[#4DB8C8] to-[#34A0B0]' },
  { emoji: '👃', nom: 'Rétro Olfaction', freq: '2× / mois', color: 'from-[#E8524A] to-[#C93E37]' },
  { emoji: '🚶', nom: 'Marche', freq: 'Chaque jeudi', color: 'from-[#1B3A5C] to-[#2A5280]' },
  { emoji: '💃', nom: 'Danse', freq: 'Chaque vendredi', color: 'from-[#6B8FBF] to-[#4A6FA5]' },
  { emoji: '🍽️', nom: 'Cuisine', freq: '1× / mois', color: 'from-[#F0776F] to-[#D95E56]' },
]

export const TEMOIGNAGES = [
  {
    texte: "AVanCe m'a redonné confiance après mon AVC. Les activités de danse m'ont aidé à retrouver ma coordination et mes amis. Je ne me sens plus seul dans cette épreuve.",
    auteur: 'Michel, 67 ans',
    role: 'Membre depuis 2022',
    initiale: 'M',
    color: 'from-[#E8524A] to-[#F0776F]',
  },
  {
    texte: "En tant qu'aidante, j'avais besoin d'un soutien que je ne trouvais pas ailleurs. AVanCe nous a donné des outils concrets et un réseau de personnes qui comprennent vraiment.",
    auteur: 'Sophie, aidante',
    role: 'Membre depuis 2023',
    initiale: 'S',
    color: 'from-[#4DB8C8] to-[#6BD4E0]',
  },
  {
    texte: "La thérapie mélodique a été une révélation. Des choses que je ne pouvais plus dire, je pouvais les chanter. C'est magique et scientifiquement prouvé.",
    auteur: 'Pierre, 72 ans',
    role: 'Membre depuis 2021',
    initiale: 'P',
    color: 'from-[#6B8FBF] to-[#2A5280]',
  },
]

export const AGENDA_EVENTS = [
  {
    jour: '10', mois: 'Juin',
    titre: 'Thérapie mélodique',
    desc: 'Atelier hebdomadaire avec Mme Rousseau, orthophoniste. Salle 12, CH Auxerre.',
    tag: 'Activité',
    colorDate: 'bg-[#E8524A]/10 text-[#E8524A]',
    colorTag: 'bg-[#E8524A]/10 text-[#E8524A]',
  },
  {
    jour: '15', mois: 'Juin',
    titre: 'Conf. Nutrition & AVC',
    desc: 'Dr Martin, neurologue. Impact de l\'alimentation sur la récupération post-AVC.',
    tag: 'Conférence',
    colorDate: 'bg-[#4DB8C8]/10 text-[#34A0B0]',
    colorTag: 'bg-[#4DB8C8]/10 text-[#34A0B0]',
  },
  {
    jour: '22', mois: 'Juin',
    titre: 'Atelier Cuisine',
    desc: 'Cuisine adaptée pour stimuler la motricité fine. Inscription requise, places limitées.',
    tag: 'Atelier',
    colorDate: 'bg-[#1B3A5C]/08 text-[#1B3A5C]',
    colorTag: 'bg-[#1B3A5C]/10 text-[#1B3A5C]',
  },
]
