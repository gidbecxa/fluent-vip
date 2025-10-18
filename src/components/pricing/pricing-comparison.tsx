"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, Star, Crown, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ComparisonFeature {
  category: string
  features: {
    name: string
    regular: boolean | string
    executive: boolean | string
    highlight?: boolean
  }[]
}

export function PricingComparison() {
  const comparisonData: ComparisonFeature[] = [
    {
      category: "Contenu & Curriculum",
      features: [
        { name: "Accès complet curriculum A2", regular: true, executive: true },
        { name: "Sessions interactives illimitées", regular: true, executive: true },
        { name: "Exercices et quiz adaptatifs", regular: true, executive: true },
        { name: "Matériel spécialisé par secteur", regular: false, executive: true, highlight: true },
        { name: "Contenu premium exclusif", regular: false, executive: true }
      ]
    },
    {
      category: "Accompagnement",
      features: [
        { name: "Support par email", regular: "48h", executive: "Prioritaire 24/7" },
        { name: "Coach personnel dédié", regular: false, executive: true, highlight: true },
        { name: "Sessions live individuelles", regular: false, executive: "4h/mois", highlight: true },
        { name: "Feedback personnalisé", regular: false, executive: true },
        { name: "Sessions d'urgence", regular: false, executive: true }
      ]
    },
    {
      category: "Flexibilité",
      features: [
        { name: "Accès mobile et desktop", regular: true, executive: true },
        { name: "Horaires flexibles", regular: "Standard", executive: "Ultra-flexible", highlight: true },
        { name: "Reprogrammation gratuite", regular: false, executive: "Illimitée", highlight: true },
        { name: "Pause temporaire", regular: false, executive: true }
      ]
    },
    {
      category: "Garanties & Avantages",
      features: [
        { name: "Essai gratuit", regular: "7 jours", executive: "Session découverte" },
        { name: "Garantie satisfaction", regular: "14 jours", executive: "30 jours", highlight: true },
        { name: "Certificat de completion", regular: true, executive: true },
        { name: "Accès aux futurs contenus", regular: "Standard", executive: "VIP prioritaire" }
      ]
    }
  ]

  const renderFeatureValue = (value: boolean | string, isExecutive: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={cn("h-4 w-4", isExecutive ? "text-amber-600" : "text-emerald-600")} />
      ) : (
        <X className="h-4 w-4 text-slate-400" />
      )
    }
    return (
      <span className={cn(
        "text-sm font-medium",
        isExecutive ? "text-amber-700" : "text-emerald-700"
      )}>
        {value}
      </span>
    )
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-slate-50 text-slate-700 border-slate-200">
            Comparaison Détaillée
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Chaque détail compte
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez exactement ce qui est inclus dans chaque formule pour faire le meilleur choix
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">Fonctionnalités</h3>
            </div>
            <div className="p-6 text-center border-l border-slate-200">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">Parcours Étudiant</h3>
              </div>
              <div className="text-2xl font-bold text-slate-900">29€<span className="text-sm font-normal text-slate-500">/mois</span></div>
            </div>
            <div className="p-6 text-center border-l border-slate-200 bg-gradient-to-br from-amber-50 to-amber-100/50">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Crown className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-slate-900">Parcours Executive</h3>
              </div>
              <div className="text-2xl font-bold text-slate-900">599€<span className="text-sm font-normal text-slate-500">/mois</span></div>
              <Badge className="mt-1 bg-amber-100 text-amber-700 border-amber-200 text-xs">
                <Star className="h-3 w-3 mr-1" />
                Recommandé
              </Badge>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="grid grid-cols-3 bg-slate-25 border-b border-slate-100">
                <div className="p-4 col-span-3">
                  <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">
                    {category.category}
                  </h4>
                </div>
              </div>

              {/* Features */}
              {category.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (categoryIndex * 0.1) + (featureIndex * 0.05) }}
                  className={cn(
                    "grid grid-cols-3 border-b border-slate-100 hover:bg-slate-25 transition-colors",
                    feature.highlight && "bg-emerald-50/30"
                  )}
                >
                  <div className="p-4 flex items-center">
                    <span className={cn(
                      "text-sm",
                      feature.highlight ? "font-medium text-slate-900" : "text-slate-700"
                    )}>
                      {feature.name}
                    </span>
                    {feature.highlight && (
                      <Zap className="h-3 w-3 ml-2 text-emerald-600" />
                    )}
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-slate-100">
                    {renderFeatureValue(feature.regular)}
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-slate-100 bg-gradient-to-r from-transparent to-amber-50/20">
                    {renderFeatureValue(feature.executive, true)}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}

          {/* CTA Footer */}
          <div className="grid grid-cols-3 bg-slate-50 border-t border-slate-200">
            <div className="p-6"></div>
            <div className="p-6 text-center border-l border-slate-200">
              <Button variant="outline" size="lg" className="w-full">
                Essai gratuit 7 jours
              </Button>
            </div>
            <div className="p-6 text-center border-l border-slate-200">
              <Button size="lg" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                <Crown className="mr-2 h-4 w-4" />
                Session découverte
              </Button>
            </div>
          </div>
        </div>

        {/* Value Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Garantie Résultats ou Remboursement
              </h3>
              <p className="text-slate-600">
                Si vous ne constatez pas d'amélioration significative dans les 30 premiers jours, 
                nous vous remboursons intégralement. Aucune question posée.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}