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
import { Week2LessonNotes } from "@/components/learning/week2-lesson-notes"
import { LessonNotes } from "@/components/learning/lesson-notes"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Clock, Target, Play, CheckCircle, Eye, Users, Zap, BookOpen, Volume2 } from "lucide-react"
import Link from "next/link"
import { useProgressStore } from "@/store/progress-store"

interface SessionStep {
  id: number
  title: string
  description?: string
  icon?: any
  estimatedTime?: number
}

interface SessionRendererProps {
  sessionId: number
  sessionContent: any
  track: "regular" | "executive"
  customSteps?: SessionStep[]
  customGrammarRules?: any[]
  customDialogue?: any
  customComponents?: {
    [stepId: number]: React.ReactNode
  }
}

export function SessionRenderer({ 
  sessionId, 
  sessionContent, 
  track,
  customSteps,
  customGrammarRules,
  customDialogue,
  customComponents = {}
}: SessionRendererProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const { markSessionCompleted } = useProgressStore()

  // Default steps for standard sessions
  const defaultSteps = [
    { id: 1, title: "Objectif de la Session" },
    { id: 2, title: "Phrases Clés" },
    { id: 3, title: "Activité Pratique" },
    { id: 4, title: "Notes de Leçon" }
  ]

  const steps = customSteps || defaultSteps
  const getSessionSteps = (currentStep: number, completedSteps: number[]) => 
    steps.map(step => ({
      id: step.id,
      title: step.title,
      completed: completedSteps.includes(step.id),
      current: currentStep === step.id
    }))

  const sessionSteps = getSessionSteps(currentStep, completedSteps)
  const isSessionCompleted = completedSteps.length === steps.length

  useEffect(() => {
    if (isSessionCompleted) {
      markSessionCompleted(sessionId)
    }
  }, [isSessionCompleted, markSessionCompleted, sessionId])

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }
    if (stepId < steps.length) {
      setCurrentStep(stepId + 1)
    }
  }

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId)
  }

  const renderDefaultStepContent = () => {
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
                  Session {sessionId}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Objectif de la Session</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    {sessionContent.objective}
                  </p>
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
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Phrases Clés à Maîtriser
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sessionContent.keyPhrases?.map((phrase: any, index: number) => (
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
                    onClick={() => handleStepComplete(2)}
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

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <RolePlayActivity
              scenarios={sessionContent.rolePlayScenarios}
              title="Activité Pratique"
              description="Pratique interactive pour maîtriser les concepts"
            />
            <div className="text-center pt-6">
              <Button
                onClick={() => handleStepComplete(3)}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-3"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                J'ai terminé l'activité
              </Button>
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {sessionId >= 6 ? (
              <Week2LessonNotes
                title={sessionContent.title}
                culturalNote={sessionContent.culturalNote}
                vipTip={sessionContent.vipTip}
                practice={sessionContent.practice}
                practiceResources={sessionContent.practiceResources}
                onComplete={() => handleStepComplete(4)}
              />
            ) : (
              <>
                <LessonNotes
                  sessionId={sessionId}
                  track={track}
                />
                <div className="text-center pt-6">
                  <Button
                    onClick={() => handleStepComplete(4)}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-3"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    J'ai lu les notes
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        )

      default:
        return null
    }
  }

  const renderStepContent = () => {
    // Special handling for Session 6
    if (sessionId === 6) {
      return renderSession6Content()
    }
    
    // Check if there's a custom component for this step
    if (customComponents[currentStep]) {
      return customComponents[currentStep]
    }
    
    // Otherwise render default content
    return renderDefaultStepContent()
  }

  const renderSession6Content = () => {
    switch (currentStep) {
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
              rules={[
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
                    }
                  ]
                }
              ]}
              onComplete={() => handleStepComplete(2)}
            />
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
              scenario={{
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
                  }
                ]
              }}
              onComplete={() => handleStepComplete(4)}
            />
          </motion.div>
        )
      default:
        return renderDefaultStepContent()
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
            <Link href={`/${track}`}>
              <Button variant="ghost" size="sm" className="h-10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Retour au parcours</span>
                <span className="sm:hidden">Retour</span>
              </Button>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-900">
                <Clock className="h-3 w-3 mr-1" />
                {sessionContent.duration} min
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-900">
                Session {sessionId}
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
                  Session {sessionId} Terminée! 🎉
                </h3>
                <p className="text-green-800 mb-6">
                  Félicitations! Tu as terminé cette session avec succès.
                </p>
                <div className="space-y-3">
                  <Link href={`/${track}`}>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      Retour au parcours
                    </Button>
                  </Link>
                  <Link href={`/${track}/session/${sessionId + 1}`}>
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