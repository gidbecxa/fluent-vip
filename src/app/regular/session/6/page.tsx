"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProgressStepper } from "@/components/learning/progress-stepper"
import { PronunciationCard } from "@/components/learning/pronunciation-card"
import { RolePlayActivity } from "@/components/learning/role-play-activity"
import { DialoguePractice } from "@/components/learning/dialogue-practice"
import { GrammarComparison } from "@/components/learning/grammar-comparison"
import { AudioPlayer } from "@/components/learning/audio-player"
import { Week2LessonNotes } from "@/components/learning/week2-lesson-notes"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Clock, Target, Play, CheckCircle, Eye, Users, Zap, BookOpen, Volume2, Monitor, Camera } from "lucide-react"
import Link from "next/link"
import { useProgressStore } from "@/store/progress-store"
import { regularWeek2SessionContent } from "@/data/regular-week2-content"

const getSessionSteps = (currentStep: number, completedSteps: number[]) => [
  {
    id: 1,
    title: "Objectif de la Session",
    completed: completedSteps.includes(1),
    current: currentStep === 1
  },
  {
    id: 2,
    title: "Règles de Grammaire",
    completed: completedSteps.includes(2),
    current: currentStep === 2
  },
  {
    id: 3,
    title: "Phrases Clés",
    completed: completedSteps.includes(3),
    current: currentStep === 3
  },
  {
    id: 4,
    title: "Dialogue Pratique",
    completed: completedSteps.includes(4),
    current: currentStep === 4
  },
  {
    id: 5,
    title: "Jeu du Miroir",
    completed: completedSteps.includes(5),
    current: currentStep === 5
  },
  {
    id: 6,
    title: "Notes de Leçon",
    completed: completedSteps.includes(6),
    current: currentStep === 6
  }
]

const grammarRules = [
  {
    title: "TO BE - Pour l'État et l'Identité",
    description: "Utilise 'To Be' pour décrire ce que tu ES (ton état, ton identité)",
    color: "blue" as const,
    examples: [
      {
        english: "I am tall.",
        french: "Je suis grand(e).",
        explanation: "Tu décris ton état physique permanent. 'Tall' est une caractéristique de ton identité.",
        audioFile: "/audio/regular/week2/session6/i-am-tall.mp3"
      },
      {
        english: "You are French.",
        french: "Tu es français(e).",
        explanation: "Tu décris la nationalité de quelqu'un - c'est son identité, pas quelque chose qu'il possède.",
        audioFile: "/audio/regular/week2/session6/you-are-french.mp3"
      },
      {
        english: "She is happy.",
        french: "Elle est heureuse.",
        explanation: "Tu décris son état émotionnel du moment. C'est ce qu'elle EST maintenant.",
        audioFile: "/audio/regular/week2/session6/she-is-happy.mp3"
      }
    ]
  },
  {
    title: "TO HAVE - Pour la Possession",
    description: "Utilise 'To Have' pour décrire ce que tu POSSÈDES (caractéristiques physiques, objets)",
    color: "purple" as const,
    examples: [
      {
        english: "I have brown eyes.",
        french: "J'ai les yeux marron.",
        explanation: "Tu 'possèdes' cette caractéristique physique. En anglais, on considère que tu 'as' des yeux marron.",
        audioFile: "/audio/regular/week2/session6/i-have-brown-eyes.mp3"
      },
      {
        english: "You have long hair.",
        french: "Tu as les cheveux longs.",
        explanation: "Les cheveux sont quelque chose que tu 'possèdes'. Attention: pas 'You are long hair'!",
        audioFile: "/audio/regular/week2/session6/you-have-long-hair.mp3"
      },
      {
        english: "He has glasses.",
        french: "Il a des lunettes.",
        explanation: "Les lunettes sont un objet qu'il possède. Note le 'S' à 'has' pour la 3ème personne!",
        audioFile: "/audio/regular/week2/session6/he-has-glasses.mp3"
      }
    ]
  },
  {
    title: "La Différence Cruciale",
    description: "Comprendre quand utiliser chaque verbe pour éviter les erreurs",
    color: "green" as const,
    examples: [
      {
        english: "I am tall. I have brown hair.",
        french: "Je suis grand(e). J'ai les cheveux marron.",
        explanation: "Combinaison parfaite! 'Am' pour l'état physique, 'have' pour la caractéristique que tu possèdes.",
        audioFile: "/audio/regular/week2/session6/combination-example.mp3"
      },
      {
        english: "She is beautiful. She has blue eyes.",
        french: "Elle est belle. Elle a les yeux bleus.",
        explanation: "Beauté = état/opinion (TO BE), couleur des yeux = possession (TO HAVE).",
        audioFile: "/audio/regular/week2/session6/she-is-beautiful.mp3"
      },
      {
        english: "❌ I am brown eyes. ✅ I have brown eyes.",
        french: "❌ Je suis des yeux marron. ✅ J'ai les yeux marron.",
        explanation: "Erreur classique! On ne peut pas ÊTRE des yeux, on les POSSÈDE. Toujours 'I have' pour les parties du corps.",
        audioFile: "/audio/regular/week2/session6/common-mistake.mp3"
      }
    ]
  }
]

const dialogueScenario = {
  id: "photo-profile",
  title: "La Photo de Profil",
  description: "Deux amis regardent la nouvelle photo de profil de l'un d'eux",
  context: "Conversation décontractée entre amis sur les réseaux sociaux",
  lines: [
    {
      speaker: "A" as const,
      text: "Look, this is my new profile picture.",
      translation: "Regarde, c'est ma nouvelle photo de profil.",
      audioFile: "/audio/regular/week2/session6/dialogue-line1.mp3"
    },
    {
      speaker: "B" as const,
      text: "Oh, it's a great picture! You have a nice smile.",
      translation: "Oh, c'est une super photo ! Tu as un beau sourire.",
      audioFile: "/audio/regular/week2/session6/dialogue-line2.mp3"
    },
    {
      speaker: "A" as const,
      text: "Thank you! I think I have tired eyes in this photo.",
      translation: "Merci ! Je pense que j'ai l'air fatigué(e) sur cette photo.",
      audioFile: "/audio/regular/week2/session6/dialogue-line3.mp3"
    },
    {
      speaker: "B" as const,
      text: "No, not at all. You have very kind eyes. And you have new glasses!",
      translation: "Non, pas du tout. Tu as des yeux très gentils. Et tu as de nouvelles lunettes !",
      audioFile: "/audio/regular/week2/session6/dialogue-line4.mp3"
    },
    {
      speaker: "A" as const,
      text: "Yes, I do. Do you like them?",
      translation: "Oui, c'est vrai. Tu les aimes ?",
      audioFile: "/audio/regular/week2/session6/dialogue-line5.mp3"
    },
    {
      speaker: "B" as const,
      text: "Yes, I do!",
      translation: "Oui, je les aime !",
      audioFile: "/audio/regular/week2/session6/dialogue-line6.mp3"
    }
  ]
}

export default function Session6Page() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const { markSessionCompleted } = useProgressStore()

  const sessionContent = regularWeek2SessionContent[6]
  const sessionSteps = getSessionSteps(currentStep, completedSteps)
  const isSessionCompleted = completedSteps.length === 6

  useEffect(() => {
    if (isSessionCompleted) {
      markSessionCompleted(6)
    }
  }, [isSessionCompleted, markSessionCompleted])

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }
    if (stepId < 6) {
      setCurrentStep(stepId + 1)
    }
  }

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {sessionContent.title}
                </CardTitle>
                <Badge className="bg-purple-100 text-purple-900 border-purple-200 mt-2">
                  Session 6 - Semaine 2
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Objectif de la Session</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    {sessionContent.objective}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-blue-900 mb-2">Ce que tu vas apprendre</h4>
                      <ul className="text-blue-800 text-sm space-y-1 text-left">
                        <li>• La différence entre "To Have" et "To Be"</li>
                        <li>• Décrire ton apparence physique</li>
                        <li>• Poser des questions sur l'apparence</li>
                        <li>• Utiliser les formes négatives</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-purple-900 mb-2">Pourquoi c'est important</h4>
                      <p className="text-purple-800 text-sm text-left">
                        Cette distinction est fondamentale en anglais et différente du français. 
                        Une fois maîtrisée, tu éviteras 90% des erreurs de débutant!
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center pt-6">
                  <Button
                    onClick={() => handleStepComplete(1)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
                  >
                    Commencer la leçon
                    <Play className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <GrammarComparison
              title="TO HAVE vs TO BE - La Règle d'Or"
              subtitle="Maîtrise la différence fondamentale pour décrire en anglais"
              rules={grammarRules}
              onComplete={() => handleStepComplete(2)}
            />
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Phrases Clés à Maîtriser
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Apprends ces expressions essentielles avec la bonne prononciation
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {sessionContent.keyPhrases.map((phrase, index) => (
                  <PronunciationCard
                    key={index}
                    index={index}
                    english={phrase.english}
                    pronunciation={phrase.pronunciation}
                    context={phrase.context}
                    audioFile={phrase.audioFile}
                  />
                ))}
                
                <div className="text-center pt-6">
                  <Button
                    onClick={() => handleStepComplete(3)}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-3"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    J'ai maîtrisé les phrases clés
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <DialoguePractice
              scenario={dialogueScenario}
              onComplete={() => handleStepComplete(4)}
            />
          </motion.div>
        )

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <RolePlayActivity
              scenarios={sessionContent.rolePlayScenarios}
              title="Le Jeu du Miroir"
              description="Utilise ta caméra comme miroir et décris-toi en anglais!"
            />
            <div className="text-center pt-6">
              <Button
                onClick={() => handleStepComplete(5)}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-3"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                J'ai terminé l'activité
              </Button>
            </div>
          </motion.div>
        )

      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Week2LessonNotes
              title={sessionContent.title}
              culturalNote={sessionContent.culturalNote}
              vipTip={sessionContent.vipTip}
              practice={sessionContent.practice}
              practiceResources={sessionContent.practiceResources}
              onComplete={() => handleStepComplete(6)}
            />
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-4 sm:py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <Link href="/regular">
              <Button variant="ghost" size="sm" className="h-10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Retour au parcours</span>
                <span className="sm:hidden">Retour</span>
              </Button>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-900">
                <Clock className="h-3 w-3 mr-1" />
                60 min
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-900">
                Session 6/10
              </Badge>
            </div>
          </div>


        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar - Progress Stepper */}
          <div className="lg:col-span-1 order-1">
            <div className="sticky top-8">
              <ProgressStepper
                steps={sessionSteps}
                onStepClick={handleStepClick}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-2">
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>
          </div>
        </div>

        {/* Session Completion */}
        {isSessionCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-200 max-w-md w-full">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  Session 6 Terminée! 🎉
                </h3>
                <p className="text-green-800 mb-6">
                  Félicitations! Tu maîtrises maintenant la différence entre "To Have" et "To Be". 
                  Tu peux décrire ton apparence physique avec confiance!
                </p>
                <div className="space-y-3">
                  <Link href="/regular">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      Retour au parcours
                    </Button>
                  </Link>
                  <Link href="/regular/session/7">
                    <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                      Session suivante →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}