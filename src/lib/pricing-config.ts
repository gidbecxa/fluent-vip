// Pricing configuration based on expert analysis from docs/pricing.md files

export interface PricingPlan {
  id: string
  name: string
  description: string
  target: string
  pricing: {
    monthly: number
    annual?: number
    currency: string
    billingCycle: string
  }
  features: {
    text: string
    included: boolean
    highlight?: boolean
  }[]
  popular?: boolean
  premium?: boolean
  badge?: string
  savings?: string
  cta: {
    text: string
    variant: "default" | "outline" | "secondary"
  }
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "regular",
    name: "Parcours Étudiant",
    description: "Pour étudiants ambitieux et professionnels autodidactes",
    target: "students-professionals",
    pricing: {
      monthly: 29,
      annual: 229, // ~19€/month with 35% discount
      currency: "€",
      billingCycle: "mensuel"
    },
    features: [
      { text: "Accès complet au curriculum A2 (16 semaines)", included: true, highlight: true },
      { text: "Sessions interactives illimitées", included: true },
      { text: "Exercices et quiz adaptatifs", included: true },
      { text: "Suivi de progression en temps réel", included: true },
      { text: "Communauté d'apprenants privée", included: true },
      { text: "Support par email (48h)", included: true },
      { text: "Accès mobile et desktop", included: true },
      { text: "Certificat de completion", included: true },
      { text: "Sessions live avec tuteur", included: false },
      { text: "Coach personnel dédié", included: false },
      { text: "Support prioritaire 24/7", included: false }
    ],
    badge: "Apprentissage autonome",
    savings: "Économisez 35% sur l'année",
    cta: {
      text: "Commencer l'essai gratuit",
      variant: "outline"
    }
  },
  {
    id: "executive",
    name: "Parcours Executive", 
    description: "Pour dirigeants, cadres et hauts fonctionnaires",
    target: "executives-leaders",
    pricing: {
      monthly: 599,
      annual: 5990, // ~499€/month with 2 months free
      currency: "€",
      billingCycle: "mensuel"
    },
    features: [
      { text: "Tout du Parcours Étudiant", included: true, highlight: true },
      { text: "Coach personnel certifié dédié", included: true, highlight: true },
      { text: "4 sessions live par mois (1h chacune)", included: true, highlight: true },
      { text: "Horaires ultra-flexibles", included: true, highlight: true },
      { text: "Reprogrammation sans frais", included: true, highlight: true },
      { text: "Support prioritaire 24/7", included: true },
      { text: "Feedback personnalisé après chaque session", included: true },
      { text: "Matériel adapté à votre secteur", included: true },
      { text: "Garantie résultats 30 jours", included: true, highlight: true },
      { text: "Sessions d'urgence disponibles", included: true },
      { text: "Accès VIP à tous les contenus futurs", included: true }
    ],
    popular: true,
    premium: true,
    badge: "Coaching personnalisé",
    savings: "2 mois offerts sur l'année",
    cta: {
      text: "Session découverte offerte",
      variant: "default"
    }
  }
]

// Value propositions for comparison with alternatives
export const competitorComparison = [
  {
    type: "traditional-tutor",
    name: "Tuteur privé traditionnel",
    price: "100-300€/heure",
    description: "Coût moyen d'un tuteur qualifié pour executives",
    limitations: [
      "Horaires rigides",
      "Pas de suivi structuré",
      "Coût élevé à long terme",
      "Dépendance à une seule personne"
    ]
  },
  {
    type: "language-school",
    name: "École de langues premium",
    price: "3000-8000€",
    description: "Programme intensif de 3 mois en présentiel",
    limitations: [
      "Horaires fixes",
      "Déplacements nécessaires",
      "Groupes nombreux",
      "Pas de personnalisation"
    ]
  },
  {
    type: "mass-market-apps",
    name: "Applications grand public",
    price: "10-15€/mois",
    description: "Duolingo, Babbel, Rosetta Stone",
    limitations: [
      "Pas d'accompagnement humain",
      "Contenu générique",
      "Progression lente",
      "Pas adapté aux professionnels"
    ]
  }
]

// ROI calculations for executives
export const executiveROI = {
  timeValue: {
    description: "Valeur du temps d'un executive",
    hourlyRate: "200-500€/heure",
    monthlyGain: "Économie de 10-20h de déplacements/mois"
  },
  opportunityCost: {
    description: "Coût d'opportunité d'une mauvaise communication",
    examples: [
      "Négociation ratée: 50k-500k€",
      "Malentendu client: 10k-100k€",
      "Présentation échouée: 25k-250k€"
    ]
  },
  careerImpact: {
    description: "Impact sur la carrière",
    benefits: [
      "Accès à des postes internationaux",
      "Négociations plus efficaces",
      "Réseau professionnel élargi",
      "Confiance en réunions internationales"
    ]
  }
}

// Psychological pricing principles applied
export const pricingPsychology = {
  anchoring: {
    description: "Prix d'ancrage contre tuteurs privés (100-300€/h)",
    effect: "Rend notre prix Executive (150€/h effectif) attractif"
  },
  scarcity: {
    description: "Offre fondateurs limitée",
    implementation: "Premiers 50 clients bénéficient du tarif à vie"
  },
  socialProof: {
    description: "Témoignages de dirigeants",
    badges: ["500+ Executives", "95% Satisfaction", "Résultats en 7j"]
  },
  lossAversion: {
    description: "Garantie remboursement",
    implementation: "30 jours satisfait ou remboursé"
  }
}