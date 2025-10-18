"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, TrendingUp, Clock, Target } from "lucide-react"
import { motion } from "framer-motion"

export function PricingTestimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Marketing International",
      company: "Fortune 500",
      track: "executive",
      content: "599€/mois ? C'est le prix d'un seul dîner client. Mais FluentVIP m'a permis de décrocher 3 contrats internationaux en 2 mois. ROI exceptionnel.",
      rating: 5,
      result: "3 contrats décrochés",
      timeframe: "2 mois"
    },
    {
      name: "Thomas Laurent",
      role: "Étudiant en Commerce International",
      company: "HEC Paris",
      track: "regular",
      content: "29€/mois, c'est moins cher que mes sorties du weekend. J'ai décroché mon stage à Londres grâce à mon niveau d'anglais. Investissement le plus rentable de ma vie.",
      rating: 5,
      result: "Stage à Londres obtenu",
      timeframe: "3 mois"
    },
    {
      name: "Sophie Chen",
      role: "CEO & Fondatrice",
      company: "Tech Startup",
      track: "executive",
      content: "J'hésitais à cause du prix, mais mon coach s'adapte parfaitement à mes horaires de folle. J'ai levé 2M€ en anglais grâce à ma nouvelle confiance.",
      rating: 5,
      result: "Levée de fonds réussie",
      timeframe: "4 mois"
    },
    {
      name: "Pierre Moreau",
      role: "Ingénieur Commercial",
      company: "Multinationale",
      track: "regular",
      content: "Le parcours étudiant m'a suffi pour passer de A1 à A2. Maintenant je gère mes clients anglais en autonomie. Promotion obtenue 6 mois après !",
      rating: 5,
      result: "Promotion obtenue",
      timeframe: "6 mois"
    }
  ]

  const stats = [
    {
      icon: TrendingUp,
      value: "847%",
      label: "ROI moyen Executive",
      description: "Retour sur investissement calculé sur 12 mois"
    },
    {
      icon: Clock,
      value: "30min",
      label: "Temps quotidien",
      description: "Suffisant pour des résultats mesurables"
    },
    {
      icon: Target,
      value: "7 jours",
      label: "Premiers résultats",
      description: "Amélioration constatée dès la première semaine"
    }
  ]

  return (
    <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200">
            <Star className="h-3 w-3 mr-1" />
            Témoignages Clients
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ils ont investi, ils ont réussi
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez comment nos clients ont transformé leur investissement en succès concrets
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="text-center bg-white/80 backdrop-blur-sm border-emerald-100">
                <CardContent className="pt-8 px-6 pb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="font-semibold text-slate-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 px-6 pb-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${
                            testimonial.track === 'executive' 
                              ? 'bg-amber-100 text-amber-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {testimonial.track === 'executive' ? 'Executive' : 'Étudiant'}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                      <div className="text-xs text-slate-500">{testimonial.company}</div>
                    </div>
                    <Quote className="h-8 w-8 text-slate-300 flex-shrink-0" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-700 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Results */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-sm">
                      <div className="font-medium text-emerald-600">{testimonial.result}</div>
                      <div className="text-slate-500">en {testimonial.timeframe}</div>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      Vérifié ✓
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Value Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
            <CardContent className="pt-10 px-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">
                L'investissement qui change tout
              </h3>
              <p className="text-emerald-100 text-lg leading-relaxed">
                Nos clients récupèrent leur investissement en moyenne en <strong>2,3 mois</strong> grâce aux 
                opportunités professionnelles débloquées par leur nouveau niveau d&apos;anglais.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}