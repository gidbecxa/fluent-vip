"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star, Users, Clock, CheckCircle, Globe, Zap, Target, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-emerald-900/5"></div>
        <div className="container mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-800 text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Plateforme #1 pour les professionnels
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Maîtrisez l'anglais
              <span className="block bg-gradient-to-r from-emerald-600 to-slate-800 bg-clip-text text-transparent">
                dès le premier jour
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              La seule plateforme qui permet aux <strong>executives</strong> et aux <strong>étudiants ambitieux</strong> 
              de parler anglais avec confiance en 30 minutes par jour. Résultats garantis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/executive" className="flex-1">
                <Button size="lg" className="w-full h-14 gradient-executive text-white font-semibold">
                  Parcours Executive
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/regular" className="flex-1">
                <Button size="lg" variant="outline" className="w-full h-14 border-2 border-slate-300 hover:bg-slate-50">
                  Parcours Étudiant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center mt-8 text-sm text-slate-500">
              <CheckCircle className="h-4 w-4 mr-2 text-emerald-600" />
              Essai gratuit • Sans engagement • Résultats en 7 jours
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-slate-600 mb-8">Déjà adopté par des leaders de</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-700">500+</div>
                <div className="text-sm text-slate-500">Executives</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-700">2000+</div>
                <div className="text-sm text-slate-500">Étudiants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-700">95%</div>
                <div className="text-sm text-slate-500">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-700">7j</div>
                <div className="text-sm text-slate-500">Premiers résultats</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pourquoi nous sommes différents
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une méthode révolutionnaire qui s&apos;adapte à votre statut et vos contraintes de temps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Sessions Ultra-Courtes",
                description: "25-60 minutes maximum. Conçu pour les emplois du temps les plus chargés.",
                color: "emerald"
              },
              {
                icon: Target,
                title: "Résultats Immédiats",
                description: "Parlez dès la première session. Méthode validée par 2500+ apprenants.",
                color: "blue"
              },
              {
                icon: Users,
                title: "Coaching VIP",
                description: "Accompagnement personnalisé adapté à votre niveau et vos objectifs.",
                color: "amber"
              },
              {
                icon: Globe,
                title: "Contexte Réel",
                description: "Situations professionnelles et sociales authentiques. Pas de théorie inutile.",
                color: "purple"
              },
              {
                icon: Zap,
                title: "Technologie Avancée",
                description: "IA adaptative, reconnaissance vocale, progression en temps réel.",
                color: "rose"
              },
              {
                icon: TrendingUp,
                title: "Progression Garantie",
                description: "Niveau A2 fonctionnel en 12 semaines ou remboursement intégral.",
                color: "indigo"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-14 h-14 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-7 w-7 text-${feature.color}-600`} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ce que disent nos apprenants
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marie L.",
                role: "Directrice Marketing",
                content: "En 3 semaines, je mène mes réunions internationales en anglais. Incroyable !",
                rating: 5
              },
              {
                name: "Thomas R.",
                role: "Étudiant en Commerce",
                content: "Interface géniale, méthode efficace. J'ai décroché mon stage à Londres grâce à FluentVIP.",
                rating: 5
              },
              {
                name: "Sophie M.",
                role: "CEO Startup",
                content: "Enfin une méthode qui respecte mon temps. 30 min/jour et des résultats concrets.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full bg-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-emerald-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Prêt à transformer votre anglais ?
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Rejoignez les professionnels qui ont choisi l&apos;excellence. 
              Première session gratuite, résultats garantis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/executive" className="flex-1">
                <Button size="lg" className="w-full h-14 bg-white text-slate-900 hover:bg-slate-100 font-semibold">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-slate-300 mt-4">
              ✓ Essai gratuit ✓ Sans engagement ✓ Support 24/7
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}