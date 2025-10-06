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
import { ArrowLeft, Clock, Target, Play, CheckCircle, Eye, Volume2, Users, Mic } from "lucide-react"
import Link from "next/link"
import { useProgressStore } from "@/store/progress-store"
import { session7GrammarRules, session7DialogueScenario } from "@/data/session7-content"
import { session8GrammarRules, session8DialogueScenario } from "@/data/session8-content"
import { session9GrammarRules, session9DialogueScenario } from "@/data/session9-content"

interface SessionStep {
  id: number
  title: string
  description?: string
  icon?: string
  estimatedTime?: number
}

interface SessionRendererProps {
  sessionId: number
  sessionContent: unknown
  track: "regular" | "executive"
  customSteps?: SessionStep[]
  customGrammarRules?: unknown[]
  customDialogue?: unknown
  customComponents?: {
    [stepId: number]: React.ReactNode
  }
}

export function SessionRenderer({ 
  sessionId, 
  sessionContent, 
  track,
  customSteps,
  // customGrammarRules,
  // customDialogue,
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
                  {(sessionContent as any)?.title}
                </CardTitle>
                <Badge className="bg-purple-100 text-purple-900 border-purple-200 mt-2">
                  Session {sessionId}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Objectif de la Session</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    {(sessionContent as any)?.objective}
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
                {(sessionContent as any)?.keyPhrases?.map((phrase: any, index: number) => (
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
              scenarios={(sessionContent as any)?.rolePlayScenarios}
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
                title={(sessionContent as any)?.title}
                culturalNote={(sessionContent as any)?.culturalNote}
                vipTip={(sessionContent as any)?.vipTip}
                practice={(sessionContent as any)?.practice}
                practiceResources={(sessionContent as any)?.practiceResources}
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
    
    // Special handling for Session 7
    if (sessionId === 7) {
      return renderSession7Content()
    }
    
    // Special handling for Session 8
    if (sessionId === 8) {
      return renderSession8Content()
    }
    
    // Special handling for Session 9
    if (sessionId === 9) {
      return renderSession9Content()
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

  const renderSession7Content = () => {
    switch (currentStep) {
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <GrammarComparison
              title="HE HAS / SHE HAS - La 3ème Personne"
              subtitle="Maîtrise la règle du 'S' obligatoire pour he/she/it"
              rules={session7GrammarRules}
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
              scenario={session7DialogueScenario}
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
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Guess Who? - Devine qui!
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Jeu interactif pour pratiquer "Does he/she have...?"
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-purple-100">
                  <h4 className="font-semibold text-lg mb-4 text-purple-900">🎯 Comment jouer:</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>• Le tuteur choisit une personne en secret parmi 4-5 photos</p>
                    <p>• Tu poses des questions: "Does he have brown hair?"</p>
                    <p>• Le tuteur répond: "Yes, he does" ou "No, he doesn't"</p>
                    <p>• Continue jusqu'à deviner la bonne personne!</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-3 text-purple-900">💡 Phrases utiles:</h4>
                  <div className="grid gap-2 text-sm">
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <strong>"Does he have glasses?"</strong> - Est-ce qu'il a des lunettes?
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <strong>"Does she have long hair?"</strong> - Est-ce qu'elle a les cheveux longs?
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <strong>"Is it Person 3?"</strong> - C'est la Personne 3?
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button
                    onClick={() => handleStepComplete(5)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    J'ai joué à Guess Who!
                  </Button>
                </div>
              </CardContent>
            </Card>
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
              title={(sessionContent as any)?.title}
              culturalNote={(sessionContent as any)?.culturalNote}
              vipTip={(sessionContent as any)?.vipTip}
              practice={(sessionContent as any)?.practice}
              practiceResources={(sessionContent as any)?.practiceResources}
              onComplete={() => handleStepComplete(6)}
            />
          </motion.div>
        )
      default:
        return renderDefaultStepContent()
    }
  }

  const renderSession8Content = () => {
    switch (currentStep) {
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <GrammarComparison
              title="ADJECTIVE + NOUN - La Place des Adjectifs"
              subtitle="Maîtrise la règle fondamentale: adjectif AVANT le nom en anglais"
              rules={session8GrammarRules}
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
              scenario={session8DialogueScenario}
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
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardHeader className="text-center px-4 sm:px-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                  Character Description Challenge
                </CardTitle>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  Décris des personnages avec des adjectifs de personnalité
                </p>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-orange-100">
                  <h4 className="font-semibold text-lg mb-4 text-orange-900">🎭 Comment jouer:</h4>
                  <div className="space-y-3 text-gray-700 text-sm sm:text-base">
                    <p>• Regarde des images de personnages (films, dessins animés)</p>
                    <p>• Décris-les: "He is a funny character!"</p>
                    <p>• Utilise: happy, sad, funny, serious, kind, smart</p>
                    <p>• Rappel: adjectif + nom ("a smart person")</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-lg mb-3 text-orange-900">💡 Exemples:</h4>
                  <div className="grid gap-2 text-sm">
                    <div className="bg-white rounded p-3 border border-orange-200">
                      <strong>"He is a funny actor!"</strong> - Il est un acteur drôle!
                    </div>
                    <div className="bg-white rounded p-3 border border-orange-200">
                      <strong>"She is a smart person."</strong> - Elle est une personne intelligente.
                    </div>
                    <div className="bg-white rounded p-3 border border-orange-200">
                      <strong>"My father is a serious man."</strong> - Mon père est un homme sérieux.
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button
                    onClick={() => handleStepComplete(5)}
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-3 w-full sm:w-auto"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    J'ai décrit les personnages!
                  </Button>
                </div>
              </CardContent>
            </Card>
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
              title={(sessionContent as any)?.title}
              culturalNote={(sessionContent as any)?.culturalNote}
              vipTip={(sessionContent as any)?.vipTip}
              practice={(sessionContent as any)?.practice}
              practiceResources={(sessionContent as any)?.practiceResources}
              onComplete={() => handleStepComplete(6)}
            />
          </motion.div>
        )
      default:
        return renderDefaultStepContent()
    }
  }

  const renderSession9Content = () => {
    switch (currentStep) {
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <GrammarComparison
              title="Descriptions Complètes + Son 'TH'"
              subtitle="Combine toutes les structures et maîtrise la prononciation difficile du 'th'"
              rules={session9GrammarRules}
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
              scenario={session9DialogueScenario}
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
            <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
              <CardHeader className="text-center px-4 sm:px-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mic className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                  TH Pronunciation Challenge
                </CardTitle>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  Maîtrise le son le plus difficile de l'anglais!
                </p>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-indigo-100">
                  <h4 className="font-semibold text-lg mb-4 text-indigo-900">🗣️ Technique:</h4>
                  <div className="space-y-3 text-gray-700 text-sm sm:text-base">
                    <p>• Place ta langue entre tes dents</p>
                    <p>• Souffle doucement pour /θ/ (think)</p>
                    <p>• Fais vibrer pour /ð/ (this)</p>
                    <p>• Écoute et répète avec le tuteur</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-lg mb-3 text-indigo-900">🎯 Mots à pratiquer:</h4>
                  <div className="grid gap-2 text-sm">
                    <div className="bg-white rounded p-3 border border-indigo-200">
                      <strong>"think"</strong> /θ/ vs <strong>"sink"</strong> - penser vs évier
                    </div>
                    <div className="bg-white rounded p-3 border border-indigo-200">
                      <strong>"this"</strong> /ð/ vs <strong>"dis"</strong> - ceci vs (inexistant)
                    </div>
                    <div className="bg-white rounded p-3 border border-indigo-200">
                      <strong>"This is my brother. I think he is funny."</strong>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button
                    onClick={() => handleStepComplete(5)}
                    className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-lg px-8 py-3 w-full sm:w-auto"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    J'ai maîtrisé le son 'TH'!
                  </Button>
                </div>
              </CardContent>
            </Card>
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
              title={(sessionContent as any)?.title}
              culturalNote={(sessionContent as any)?.culturalNote}
              vipTip={(sessionContent as any)?.vipTip}
              practice={(sessionContent as any)?.practice}
              practiceResources={(sessionContent as any)?.practiceResources}
              onComplete={() => handleStepComplete(6)}
            />
          </motion.div>
        )
      default:
        return renderDefaultStepContent()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-4 sm:py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                {(sessionContent as any)?.duration} min
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-900">
                Session {sessionId}
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar - Progress Stepper */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-8">
              <ProgressStepper
                steps={sessionSteps}
                onStepClick={handleStepClick}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2 min-w-0">
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