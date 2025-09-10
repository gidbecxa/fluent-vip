"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star, Users, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FluentVIP
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              La plateforme d'apprentissage de l'anglais conçue pour les VIP. 
              Apprentissage personnalisé et accéléré pour les professionnels de haut niveau. 
              Parlez avec confiance dès le premier jour.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Link href="/executive">
                <Button size="xl" className="w-full h-12 sm:h-14">
                  Parcours Executive
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/regular">
                <Button size="xl" variant="outline" className="w-full h-12 sm:h-14">
                  Parcours Régulier
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Pourquoi choisir notre plateforme?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Une approche révolutionnaire qui s'adapte à votre emploi du temps 
              et vous garantit des résultats mesurables.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Clock,
                title: "Sessions Courtes",
                description: "20-60 minutes par session, optimisées pour votre emploi du temps"
              },
              {
                icon: Users,
                title: "Coaching Personnel",
                description: "Accompagnement individuel avec un tuteur dédié"
              },
              {
                icon: Star,
                title: "Résultats Rapides",
                description: "Parlez avec confiance dès la première semaine"
              },
              {
                icon: Award,
                title: "Méthode VIP",
                description: "Conçu spécialement pour les professionnels de haut niveau"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Prêt à transformer votre anglais?
            </h2>
            <p className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg px-4">
              Rejoignez nos clients VIP et découvrez une nouvelle façon d'apprendre l'anglais.
            </p>
            <Link href="/executive">
              <Button size="xl" variant="secondary" className="h-12 sm:h-14">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}