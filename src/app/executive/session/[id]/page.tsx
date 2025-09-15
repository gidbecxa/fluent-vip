"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PronunciationCard } from "@/components/learning/pronunciation-card"
import { ProgressStepper } from "@/components/learning/progress-stepper"
import { RolePlayActivity } from "@/components/learning/role-play-activity"
import { LessonNotes } from "@/components/learning/lesson-notes"
import { ArrowLeft, Target, Video, CheckCircle, BookOpen, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { use, useState } from "react"
import { useRouter } from "next/navigation"
import { useProgressStore } from "@/store/progress-store"
import { executiveSessionContent } from "@/data/executive-content"


interface SessionPageProps {
  params: Promise<{ id: string }>
}

export default function SessionPage({ params }: SessionPageProps) {
  const { id } = use(params)
  const sessionId = parseInt(id)
  
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [isCompleting, setIsCompleting] = useState(false)
  const router = useRouter()
  const { completeSession } = useProgressStore()
  
  const currentSession = executiveSessionContent[sessionId as keyof typeof executiveSessionContent]
  
  if (!currentSession) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Session {sessionId}</h2>
              <p className="text-gray-600 mb-4">Cette session n'existe pas.</p>
              <Link href="/executive">
                <Button>Retour au parcours</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
  
  // Handle Sessions 1, 2, 3, 4, and 5
  if (sessionId !== 1 && sessionId !== 2 && sessionId !== 3 && sessionId !== 4 && sessionId !== 5) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Session {sessionId}</h2>
              <p className="text-gray-600 mb-4">Cette session sera bientôt disponible.</p>
              <Link href="/executive">
                <Button>Retour au parcours</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
  
  const steps = [
    { id: 1, title: "Objectif de la session", completed: completedSteps.includes(1), current: currentStep === 1 },
    { id: 2, title: "Phrases clés (20/80)", completed: completedSteps.includes(2), current: currentStep === 2 },
    { id: 3, title: "Pratique interactive", completed: completedSteps.includes(3), current: currentStep === 3 },
    { id: 4, title: "Note culturelle", completed: completedSteps.includes(4), current: currentStep === 4 },
    { id: 5, title: "Mission pratique", completed: completedSteps.includes(5), current: currentStep === 5 }
  ]

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep])
    }
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId)
  }

  const handleLiveSession = () => {
    window.open('https://meet.google.com/new', '_blank')
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Target className="h-5 w-5 mr-2" />
                  Objectif de cette Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 text-lg mb-6">
                  {currentSession.objective}
                </p>
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Ce que vous allez apprendre :</h4>
                  <ul className="text-blue-800 space-y-1">
                    <li>• 5 expressions de politesse essentielles</li>
                    <li>• Prononciation claire et naturelle</li>
                    <li>• Application dans des situations réelles</li>
                    <li>• Nuances culturelles importantes</li>
                  </ul>
                </div>
                <Button onClick={handleStepComplete} className="mt-6 w-full h-12" size="lg">
                  Commencer l'apprentissage
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )
      
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Phrases Clés (Notre 20/80)
                </CardTitle>
                <CardDescription>
                  Ce sont les mots qui débloqueront 80 % de vos interactions polies.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <div className="space-y-4">
              {currentSession.keyPhrases.map((phrase, index) => (
                <PronunciationCard
                  key={index}
                  english={phrase.english}
                  pronunciation={phrase.pronunciation}
                  context={phrase.context}
                  audioFile={phrase.audioFile}
                  index={index}
                />
              ))}
            </div>
            
            <Button onClick={handleStepComplete} className="w-full h-12" size="lg">
              Continuer vers la pratique
            </Button>
          </motion.div>
        )
      
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <RolePlayActivity
              title={currentSession.interactiveTitle}
              description={currentSession.interactiveDescription}
              scenarios={currentSession.rolePlayScenarios}
            />
            <Button onClick={handleStepComplete} className="w-full mt-6 h-12" size="lg">
              Continuer vers les notes culturelles
            </Button>
          </motion.div>
        )
      
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Note Culturelle Importante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-amber-800 text-lg leading-relaxed">
                  {currentSession.culturalNote}
                </div>
                <div className="mt-4 p-4 bg-white/50 rounded-lg">
                  <div className="text-sm font-semibold text-amber-900 mb-2">💡 Astuce VIP :</div>
                  <div className="text-amber-800">
                    {currentSession.vipTip}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button onClick={handleStepComplete} className="w-full mt-6 h-12" size="lg">
              Voir ma mission pratique
            </Button>
          </motion.div>
        )
      
      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Votre Mission (Pratique Asynchrone)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 text-lg mb-6">
                  {currentSession.practice}
                </p>
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-green-900 mb-2">📱 Ressources à venir :</div>
                  <ul className="text-green-800 space-y-1">
                    {currentSession.practiceResources.map((resource, index) => (
                      <li key={index}>• {resource}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col gap-3 mt-6">
              <Button 
                size="lg" 
                className="w-full h-12" 
                disabled={isCompleting}
                onClick={() => {
                  setIsCompleting(true)
                  setCompletedSteps([...completedSteps, 5])
                  completeSession(sessionId)
                  setTimeout(() => router.push('/executive'), 2000)
                }}
              >
                {isCompleting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
                    />
                    Session terminée! Redirection...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Marquer comme terminé
                  </>
                )}
              </Button>
              
              <Button onClick={handleLiveSession} variant="outline" size="lg" className="w-full h-12">
                <Video className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Session Live avec Tuteur</span>
                <span className="sm:hidden">Session Live</span>
              </Button>
            </div>
            
            {isCompleting && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl mb-2"
                >
                  🎉
                </motion.div>
                <div className="text-green-800 font-semibold">
                  Félicitations ! Session {sessionId} terminée avec succès !
                </div>
                <div className="text-green-600 text-sm mt-1">
                  Redirection vers votre parcours...
                </div>
              </motion.div>
            )}
          </motion.div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <Link href="/executive">
              <Button variant="ghost" size="sm" className="h-10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Retour au parcours</span>
                <span className="sm:hidden">Retour</span>
              </Button>
            </Link>
            
            <Button onClick={handleLiveSession} variant="premium" className="h-10">
              <Video className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Session Live</span>
              <span className="sm:hidden">Live</span>
            </Button>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-full font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              {sessionId}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{currentSession.title}</h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Session interactive • {currentSession.duration} minutes</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1 order-last lg:order-first">
            <ProgressStepper steps={steps} onStepClick={handleStepClick} />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderStepContent()}
          </div>
        </div>
        
        {/* Lesson Notes */}
        <LessonNotes sessionId={sessionId} track="executive" />
      </div>
    </div>
  )
}