"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SessionCard } from "@/components/sessions/session-card"
import { ProgressTracker } from "@/components/sessions/progress-tracker"
import { ArrowLeft, Target, Clock, Video, Gamepad2, Users, Zap, Trophy, BookOpen, Headphones } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useProgressStore } from "@/store/progress-store"
import { regularWeek1Sessions } from "@/data/regular-content"

const genZFeatures = [
  {
    icon: Gamepad2,
    title: "Gamification",
    description: "Points XP, badges, défis quotidiens et classements pour rendre l'apprentissage addictif"
  },
  {
    icon: Users,
    title: "Social Learning",
    description: "Projets collaboratifs, défis entre amis et communauté d'apprenants connectés"
  },
  {
    icon: Zap,
    title: "Micro-Learning",
    description: "Sessions courtes et intenses, parfaites pour les emplois du temps chargés"
  },
  {
    icon: Trophy,
    title: "Objectifs SMART",
    description: "Progression mesurable vers le niveau A2 avec jalons clairs et récompenses"
  }
]

export default function RegularTrackPage() {
  const { isSessionCompleted } = useProgressStore()

  const handleStartSession = (sessionId: number) => {
    window.location.href = `/regular/session/${sessionId}`
  }

  const handleLiveSession = () => {
    window.open('https://meet.google.com/new', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-4 sm:py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="h-10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Retour à l'accueil</span>
                <span className="sm:hidden">Retour</span>
              </Button>
            </Link>
            
            <Button onClick={handleLiveSession} variant="premium" size="lg" className="h-12">
              <Video className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Session Live avec Tuteur</span>
              <span className="sm:hidden">Session Live</span>
            </Button>
          </div>
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl font-bold text-white text-2xl mb-4">
              A2
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Parcours Régulier
              <span className="block text-lg sm:text-xl font-normal text-purple-600 mt-1">
                De Débutant à A2 en 16 Semaines
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Programme intensif conçu pour la Gen Z. Apprentissage interactif, gamifié et social 
              pour atteindre le niveau A2 et préparer tes études supérieures internationales.
            </p>
          </div>
          
          {/* Week 1 Focus Card */}
          <Card className="bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-900">
                <Target className="h-5 w-5 mr-2" />
                Semaine 1 : Premiers Pas & Interactions Fondamentales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">🎯 Objectif de la Semaine</h4>
                  <p className="text-purple-800 text-sm sm:text-base">
                    À la fin de la semaine, tu seras capable de te présenter, présenter une autre personne, 
                    poser des questions simples sur l'identité et nommer des objets courants avec le verbe "To Be".
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">🚀 Méthode Gen Z</h4>
                  <ul className="text-purple-800 text-sm sm:text-base space-y-1">
                    <li>• Classe inversée avec vidéos courtes</li>
                    <li>• Gamification avec Quizlet & Kahoot</li>
                    <li>• Projets créatifs style TikTok/Instagram</li>
                    <li>• Jeux de rôle immersifs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Sessions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sessions de la Semaine</h2>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                Total: 5h (1h par session)
              </div>
            </div>
            
            <div className="space-y-4">
              {regularWeek1Sessions.map((session) => (
                <SessionCard
                  key={session.id}
                  sessionNumber={session.id}
                  title={session.title}
                  description={session.description}
                  duration={session.duration}
                  objective={session.objective}
                  isCompleted={isSessionCompleted(session.id)}
                  onStart={() => handleStartSession(session.id)}
                  onLiveSession={handleLiveSession}
                  track="regular"
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 order-first lg:order-last">
            <ProgressTracker
              totalSessions={5}
              currentWeek={1}
            />
            
            {/* Gen Z Features */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900">Méthodes Gen Z</CardTitle>
                <CardDescription className="text-purple-700">
                  Apprentissage moderne et interactif
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {genZFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-purple-900 text-sm">{feature.title}</div>
                      <div className="text-purple-700 text-xs">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Outils d'Apprentissage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Headphones className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Classe Inversée</div>
                    <div className="text-gray-600 text-xs">Vidéos BBC Learning English</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Apps Gamifiées</div>
                    <div className="text-gray-600 text-xs">Quizlet, Kahoot, Duolingo</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Projets Créatifs</div>
                    <div className="text-gray-600 text-xs">Style TikTok/Instagram</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Metrics */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Résultats Garantis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>✓ Maîtrise du verbe "To Be" complet</li>
                  <li>✓ Présentation personnelle fluide</li>
                  <li>✓ Questions/réponses sur l'identité</li>
                  <li>✓ Vocabulaire des objets courants</li>
                  <li>✓ Confiance pour communiquer</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}