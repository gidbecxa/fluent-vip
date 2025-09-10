"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Users, Zap, Trophy, Instagram, Video, Smartphone, Headphones } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface GenZFeature {
  id: string
  icon: React.ElementType
  title: string
  description: string
  examples: string[]
  color: string
  bgColor: string
}

const genZFeatures: GenZFeature[] = [
  {
    id: "gamification",
    icon: Gamepad2,
    title: "Gamification Totale",
    description: "Transforme l'apprentissage en jeu addictif avec des mécaniques de gaming modernes",
    examples: ["Points XP pour chaque réussite", "Badges de progression", "Classements entre amis", "Défis quotidiens"],
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: "social",
    icon: Users,
    title: "Social Learning",
    description: "Apprends avec tes amis et une communauté d'étudiants motivés",
    examples: ["Projets collaboratifs", "Défis entre équipes", "Partage de progrès", "Mentorat peer-to-peer"],
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "micro",
    icon: Zap,
    title: "Micro-Learning",
    description: "Sessions courtes et intenses parfaites pour ton emploi du temps chargé",
    examples: ["Sessions de 15-60 min", "Capsules vidéo courtes", "Révisions express", "Notifications smart"],
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    id: "content",
    icon: Instagram,
    title: "Contenu Viral",
    description: "Crée du contenu style TikTok/Instagram pour pratiquer l'anglais",
    examples: ["Vidéos de présentation", "Stories en anglais", "Memes éducatifs", "Challenges créatifs"],
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  }
]

const digitalTools = [
  { name: "Quizlet", description: "Flashcards interactives", icon: "🎯" },
  { name: "Kahoot!", description: "Quiz compétitifs", icon: "🎮" },
  { name: "Padlet", description: "Tableaux collaboratifs", icon: "📌" },
  { name: "Canva", description: "Créations visuelles", icon: "🎨" },
  { name: "Miro", description: "Mind mapping", icon: "🧠" },
  { name: "Google Meet", description: "Sessions live", icon: "📹" }
]

export function GenZFeatures() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Main Features Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {genZFeatures.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                activeFeature === feature.id ? 'ring-2 ring-purple-500 shadow-lg' : ''
              }`}
              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-3">
                  {feature.description}
                </CardDescription>
                
                {activeFeature === feature.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    {feature.examples.map((example, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2 mb-2">
                        {example}
                      </Badge>
                    ))}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Digital Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Smartphone className="h-5 w-5 mr-2" />
            Outils Numériques
          </CardTitle>
          <CardDescription>
            Apps et plateformes que tu utiliseras pour apprendre
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {digitalTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg">{tool.icon}</span>
                <div>
                  <div className="font-medium text-sm">{tool.name}</div>
                  <div className="text-xs text-gray-600">{tool.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Philosophy */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-900 flex items-center">
            <Trophy className="h-5 w-5 mr-2" />
            Philosophie Gen Z
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">🚀 Apprentissage Actif</h4>
              <p className="text-purple-800">
                Pas de cours magistraux ennuyeux. Tu es acteur de ton apprentissage 
                avec des projets concrets et des défis stimulants.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">🌐 Digital Native</h4>
              <p className="text-purple-800">
                Méthodes adaptées à ta génération : vidéos courtes, interactions 
                sociales et outils numériques que tu maîtrises déjà.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">⚡ Résultats Rapides</h4>
              <p className="text-purple-800">
                Progression visible dès la première semaine avec des objectifs 
                clairs et des récompenses immédiates.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">🎯 Objectif Concret</h4>
              <p className="text-purple-800">
                Niveau A2 certifié pour tes candidatures universitaires 
                internationales et préparation IELTS/SAT.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}