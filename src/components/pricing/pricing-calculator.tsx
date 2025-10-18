"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, Clock, DollarSign, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function PricingCalculator() {
  const [selectedScenario, setSelectedScenario] = useState("negotiation")

  const scenarios = {
    negotiation: {
      title: "Négociation commerciale ratée",
      impact: "250,000€",
      description: "Contrat perdu par malentendu linguistique",
      probability: "15%",
      annualRisk: "37,500€"
    },
    presentation: {
      title: "Présentation client échouée", 
      impact: "100,000€",
      description: "Opportunité manquée faute de confiance",
      probability: "25%",
      annualRisk: "25,000€"
    },
    promotion: {
      title: "Promotion internationale manquée",
      impact: "50,000€",
      description: "Poste à l'étranger non obtenu",
      probability: "40%",
      annualRisk: "20,000€"
    },
    efficiency: {
      title: "Perte de temps en réunions",
      impact: "500€",
      description: "Par réunion mal comprise (2h perdues)",
      probability: "80%",
      annualRisk: "20,800€"
    }
  }

  const fluentVIPCost = {
    monthly: 599,
    annual: 7188,
    sessions: 48, // 4 per month * 12 months
    costPerSession: 150
  }

  const traditionalTutorCost = {
    hourlyRate: 200,
    sessionsNeeded: 48,
    total: 9600
  }

  const currentScenario = scenarios[selectedScenario as keyof typeof scenarios]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-emerald-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            <Calculator className="h-3 w-3 mr-1" />
            Calculateur ROI Executive
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Calculez votre retour sur investissement
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Découvrez combien vous coûte réellement de ne pas maîtriser l'anglais professionnel
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Risk Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <TrendingUp className="h-5 w-5 mr-2 text-red-500" />
                  Coût de l'inaction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(scenarios).map(([key, scenario]) => (
                    <Button
                      key={key}
                      variant={selectedScenario === key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedScenario(key)}
                      className="text-xs h-auto py-2 px-3"
                    >
                      {scenario.title}
                    </Button>
                  ))}
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">
                    {currentScenario.title}
                  </h3>
                  <p className="text-sm text-red-700 mb-3">
                    {currentScenario.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-600">
                        {currentScenario.impact}
                      </div>
                      <div className="text-xs text-red-500">Impact potentiel</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">
                        {currentScenario.probability}
                      </div>
                      <div className="text-xs text-red-500">Probabilité/an</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-red-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-700">
                        Risque annuel: {currentScenario.annualRisk}
                      </div>
                      <div className="text-xs text-red-500">
                        Impact × Probabilité
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Investment Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <DollarSign className="h-5 w-5 mr-2 text-emerald-500" />
                  Comparaison des investissements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* FluentVIP */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-emerald-900">FluentVIP Executive</h3>
                    <Badge className="bg-emerald-100 text-emerald-700">Recommandé</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div>
                      <div className="text-xl font-bold text-emerald-600">
                        {fluentVIPCost.annual.toLocaleString()}€
                      </div>
                      <div className="text-xs text-emerald-500">Coût annuel</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-emerald-600">
                        {fluentVIPCost.costPerSession}€
                      </div>
                      <div className="text-xs text-emerald-500">Par session</div>
                    </div>
                  </div>

                  <div className="text-xs text-emerald-700 space-y-1">
                    <div>✓ Coach dédié certifié</div>
                    <div>✓ Horaires ultra-flexibles</div>
                    <div>✓ Plateforme complète incluse</div>
                    <div>✓ Support 24/7</div>
                  </div>
                </div>

                {/* Traditional Tutor */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-700 mb-3">Tuteur privé traditionnel</h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div>
                      <div className="text-xl font-bold text-slate-600">
                        {traditionalTutorCost.total.toLocaleString()}€
                      </div>
                      <div className="text-xs text-slate-500">Coût annuel</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-600">
                        {traditionalTutorCost.hourlyRate}€
                      </div>
                      <div className="text-xs text-slate-500">Par heure</div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <div>• Horaires rigides</div>
                    <div>• Pas de plateforme</div>
                    <div>• Support limité</div>
                    <div>• Déplacements nécessaires</div>
                  </div>
                </div>

                {/* ROI Calculation */}
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg p-4">
                  <div className="text-center">
                    <Zap className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-lg font-bold mb-1">
                      ROI FluentVIP: {Math.round((parseInt(currentScenario.annualRisk.replace(/[€,]/g, '')) / fluentVIPCost.annual - 1) * 100)}%
                    </div>
                    <div className="text-emerald-100 text-sm">
                      Économie: {(parseInt(currentScenario.annualRisk.replace(/[€,]/g, '')) - fluentVIPCost.annual).toLocaleString()}€/an
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Time Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-amber-500" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Valeur de votre temps
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">30min</div>
                    <div className="text-slate-600">par jour suffisent</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">0</div>
                    <div className="text-slate-600">déplacement nécessaire</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">24/7</div>
                    <div className="text-slate-600">flexibilité totale</div>
                  </div>
                </div>
                <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
                  Pour un executive qui valorise son temps à 300€/heure, FluentVIP fait économiser 
                  <strong> 15h de déplacements par mois</strong>, soit <strong>4,500€ d&apos;économies</strong> 
                  qui couvrent largement l&apos;investissement.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}