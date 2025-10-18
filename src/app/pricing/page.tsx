"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EnhancedPricingCard } from "@/components/pricing/enhanced-pricing-card"
import { PricingTestimonials } from "@/components/pricing/pricing-testimonials"
import { ContactSection } from "@/components/pricing/contact-section"
import { 
  Star, 
  Users, 
  Crown, 
  Zap, 
  Shield,
  Award,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react"
import { motion } from "framer-motion"
import { regularTrackPlans, executiveTrackPlans } from "@/lib/pricing-data"

export default function PricingPage() {
  const [activeTrack, setActiveTrack] = useState<'regular' | 'executive'>('regular')

  const handleSelectPlan = (planId: string) => {
    console.log(`Selected plan: ${planId}`)
    // Integrate with payment system
  }

  const handleContactUs = () => {
    // Open contact modal or redirect to contact page
    console.log('Contact us clicked')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 px-6 py-2">
              <Star className="h-4 w-4 mr-2" />
              Tarification Transparente
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Investissez dans votre
              <span className="block bg-gradient-to-r from-emerald-600 to-slate-800 bg-clip-text text-transparent">
                réussite professionnelle
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Choisissez la formule qui correspond à vos ambitions. 
              Chaque plan est conçu pour maximiser vos résultats selon votre profil et vos contraintes.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-600 mb-8">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-emerald-600" />
                Garantie 30 jours
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2 text-emerald-600" />
                Résultats dès J+7
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-emerald-600" />
                Méthode certifiée
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Track Selector */}
      <section className="pt-16 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTrack('regular')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTrack === 'regular'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Users className="h-5 w-5" />
                  <span>Parcours Étudiant</span>
                </button>
                <button
                  onClick={() => setActiveTrack('executive')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTrack === 'executive'
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Crown className="h-5 w-5" />
                  <span>Parcours Executive</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pt-8 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            key={activeTrack}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Track Description */}
            <div className="text-center mb-12">
              {activeTrack === 'regular' ? (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Parcours Étudiant & Professionnel
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Pour étudiants ambitieux et professionnels qui visent la maîtrise complète de l&apos;anglais. 
                    Objectif A2 en 16 semaines avec méthode structurée.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Parcours Executive & Dirigeants
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Pour dirigeants, cadres et hauts fonctionnaires qui exigent l&apos;excellence. 
                    Coaching personnalisé avec flexibilité maximale.
                  </p>
                </div>
              )}
            </div>

            {/* Pricing Grid */}
            <div className={`grid gap-8 max-w-6xl mx-auto ${
              activeTrack === 'regular' ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
            }`}>
              {activeTrack === 'regular' 
                ? regularTrackPlans.map((plan) => (
                    <EnhancedPricingCard
                      key={plan.id}
                      {...plan}
                      onSelect={handleSelectPlan}
                    />
                  ))
                : executiveTrackPlans.filter(plan => plan.id !== 'executive-access').map((plan) => (
                    <EnhancedPricingCard
                      key={plan.id}
                      {...plan}
                      onSelect={handleSelectPlan}
                    />
                  ))
              }
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Pourquoi FluentVIP ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comparé aux alternatives traditionnelles, FluentVIP offre un ROI exceptionnel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tuteur privé traditionnel",
                price: "100-300€/heure",
                description: "Coût moyen d'un tuteur qualifié",
                limitations: ["Horaires rigides", "Pas de suivi structuré", "Coût élevé"]
              },
              {
                title: "École de langues premium",
                price: "3000-8000€",
                description: "Programme intensif de 3 mois",
                limitations: ["Déplacements nécessaires", "Groupes nombreux", "Horaires fixes"]
              },
              {
                title: "FluentVIP",
                price: "À partir de 29€/mois",
                description: "Plateforme + coaching personnalisé",
                advantages: ["Flexibilité totale", "Suivi personnalisé", "Résultats garantis"],
                highlight: true
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className={`h-full transition-all duration-300 hover:shadow-xl ${option.highlight ? 'border-emerald-200 bg-emerald-50/50 shadow-lg' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                  <CardContent className="pt-10 px-8 pb-8 text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{option.title}</h3>
                    <div className={`text-2xl font-bold mb-4 ${
                      option.highlight ? 'text-emerald-600' : 'text-slate-900'
                    }`}>
                      {option.price}
                    </div>
                    <p className="text-slate-600 mb-6">{option.description}</p>
                    
                    {option.limitations && (
                      <div className="space-y-3">
                        {option.limitations.map((limitation, i) => (
                          <div key={i} className="text-sm text-red-600 flex items-center justify-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span>
                            <span>{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {option.advantages && (
                      <div className="space-y-3">
                        {option.advantages.map((advantage, i) => (
                          <div key={i} className="text-sm text-emerald-600 flex items-center justify-center font-medium">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></span>
                            <span>{advantage}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <PricingTestimonials />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-emerald-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Prêt à transformer votre carrière ?
            </h2>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez les professionnels qui ont choisi l&apos;excellence. 
              Commencez dès aujourd&apos;hui, résultats garantis.
            </p>
            
            <Button 
              size="lg" 
              className="h-16 px-12 bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg"
              onClick={() => setActiveTrack('executive')}
            >
              Découvrir nos formules
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <p className="text-sm text-slate-300 mt-6">
              ✓ Essai gratuit ✓ Sans engagement ✓ Support 24/7 ✓ Garantie 30 jours
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}