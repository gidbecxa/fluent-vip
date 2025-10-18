// Complete pricing structure based on expert analysis

export interface PricingTier {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    quarterly?: number
    annual?: number
    bundle?: number
    currency: string
  }
  features: string[]
  popular?: boolean
  premium?: boolean
  badge?: string
  buttonText: string
  sessions?: {
    count: number
    duration: string
    frequency: string
  }
}

export const regularTrackPlans: PricingTier[] = [
  {
    id: "independent",
    name: "Plan Indépendant",
    description: "Apprentissage autonome avec curriculum premium",
    price: {
      monthly: 29,
      quarterly: 79, // ~26€/month - 10% discount
      annual: 229, // ~19€/month - 35% discount
      currency: "€"
    },
    features: [
      "Curriculum A2 complet (16 semaines)",
      "Sessions interactives illimitées",
      "Audio et exercices premium",
      "Outils intégrés (Quizlet, Padlet)",
      "Communauté d'apprenants",
      "Support par email"
    ],
    badge: "Auto-formation",
    buttonText: "Commencer l'essai gratuit"
  },
  {
    id: "coached",
    name: "Plan Accompagné",
    description: "Coaching personnalisé avec tuteur dédié",
    price: {
      monthly: 449,
      bundle: 1199, // 12 weeks upfront - 11% discount
      currency: "€"
    },
    features: [
      "Tout du Plan Indépendant",
      "Tuteur natif certifié dédié",
      "20 sessions live par mois (5h/semaine)",
      "Feedback personnalisé",
      "Rapports de progression",
      "Tests et évaluations",
      "Support prioritaire"
    ],
    sessions: {
      count: 20,
      duration: "1h",
      frequency: "5 par semaine"
    },
    popular: true,
    badge: "Coaching intensif",
    buttonText: "Session découverte 15€"
  }
]

export const executiveTrackPlans: PricingTier[] = [
  {
    id: "executive-access",
    name: "Executive Access",
    description: "Contenu premium pour dirigeants autonomes",
    price: {
      monthly: 99,
      currency: "€"
    },
    features: [
      "Contenu Executive Track complet",
      "Parcours d'apprentissage personnalisé",
      "Outils de dialogue avancés",
      "Suivi de progression premium",
      "Accès communauté executive"
    ],
    badge: "Auto-formation premium",
    buttonText: "Accès immédiat"
  },
  {
    id: "executive-lite",
    name: "Executive Coaching Lite",
    description: "Coaching flexible pour dirigeants occupés",
    price: {
      monthly: 499,
      currency: "€"
    },
    features: [
      "Tout d'Executive Access",
      "Coach executive certifié",
      "8 sessions live par mois",
      "Horaires ultra-flexibles",
      "Reprogrammation sans frais",
      "Support prioritaire 24/7"
    ],
    sessions: {
      count: 8,
      duration: "1h",
      frequency: "2 par semaine"
    },
    badge: "Coaching flexible",
    buttonText: "Session découverte offerte"
  },
  {
    id: "executive-intensive",
    name: "Executive Coaching Intensive",
    description: "Coaching intensif pour résultats rapides",
    price: {
      monthly: 899,
      currency: "€"
    },
    features: [
      "Tout d'Executive Coaching Lite",
      "20 sessions live par mois",
      "Coach dédié disponible",
      "Sessions d'urgence incluses",
      "Matériel sectoriel personnalisé",
      "Garantie résultats 30 jours"
    ],
    sessions: {
      count: 20,
      duration: "1h",
      frequency: "5 par semaine"
    },
    popular: true,
    premium: true,
    badge: "Résultats garantis",
    buttonText: "Consultation stratégique offerte"
  }
]

export const addOnServices = {
  extraSession: {
    price: 175,
    currency: "€",
    description: "Session supplémentaire à la demande"
  },
  strategySession: {
    price: 15,
    currency: "€", 
    description: "Session découverte 30min"
  }
}