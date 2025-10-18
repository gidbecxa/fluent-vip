"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Star, Users, Crown, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function PricingOverview() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200">
            <Star className="h-3 w-3 mr-1" />
            Tarifs Transparents
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Choisissez votre parcours d'excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deux formules premium adaptées à votre statut et vos objectifs. 
            Résultats garantis ou remboursement intégral.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Regular Track */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="h-full border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 bg-white shadow-lg hover:shadow-xl">
              <CardContent className="pt-10 px-8 pb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Parcours Étudiant</h3>
                      <p className="text-slate-600">Pour étudiants ambitieux</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-slate-900">29€</span>
                    <span className="text-slate-500">/mois</span>
                  </div>
                  <p className="text-sm text-emerald-600 font-medium mt-1">Plan Indépendant</p>
                  <p className="text-xs text-slate-500">ou 449€/mois avec coaching</p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "Curriculum A2 complet (16 semaines)",
                    "Sessions interactives illimitées",
                    "Suivi de progression avancé",
                    "Communauté d'apprenants",
                    "Support par email"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Link href="/pricing" className="block">
                    <Button variant="outline" size="lg" className="w-full">
                      Voir les détails
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="text-xs text-center text-slate-500">
                    ✓ Essai gratuit 7 jours ✓ Sans engagement
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Executive Track */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 text-sm font-semibold">
                <Crown className="h-3 w-3 mr-1" />
                Recommandé
              </Badge>
            </div>

            <Card className="h-full border-2 border-amber-200 shadow-xl bg-gradient-to-br from-white to-amber-50/30">
              <CardContent className="pt-10 px-8 pb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                      <Crown className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Parcours Executive</h3>
                      <p className="text-slate-600">Pour dirigeants & cadres</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-slate-900">499€</span>
                    <span className="text-slate-500">/mois</span>
                  </div>
                  <p className="text-sm text-amber-700 font-medium mt-1">
                    Coaching Lite (8 sessions/mois)
                  </p>
                  <p className="text-xs text-slate-500">ou 1099€/mois intensif</p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    { text: "Tout du Parcours Étudiant", highlight: false },
                    { text: "Coach dédié certifié", highlight: true },
                    { text: "4 sessions live/mois (1h chacune)", highlight: true },
                    { text: "Horaires ultra-flexibles", highlight: true },
                    { text: "Support prioritaire 24/7", highlight: false },
                    { text: "Garantie résultats 30 jours", highlight: true }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className={`h-4 w-4 flex-shrink-0 ${feature.highlight ? 'text-amber-600' : 'text-emerald-500'}`} />
                      <span className={`text-sm ${feature.highlight ? 'font-medium text-slate-900' : 'text-slate-700'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Link href="/pricing" className="block">
                    <Button size="lg" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                      <Zap className="mr-2 h-4 w-4" />
                      Commencer maintenant
                    </Button>
                  </Link>
                  <p className="text-xs text-center text-slate-500">
                    ✓ Session découverte offerte ✓ Engagement flexible
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-4">
            Besoin d&apos;aide pour choisir ? Nos conseillers sont là pour vous guider.
          </p>
          <Link href="/pricing">
            <Button variant="outline" size="lg">
              Comparer tous les plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}