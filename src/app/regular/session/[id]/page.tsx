"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PronunciationCard } from "@/components/learning/pronunciation-card"
import { ProgressStepper } from "@/components/learning/progress-stepper"
import { RolePlayActivity } from "@/components/learning/role-play-activity"
import { LessonNotes } from "@/components/learning/lesson-notes"
import { ArrowLeft, Target, Video, CheckCircle, BookOpen, Lightbulb, Play, Gamepad2, Users, Zap, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { use, useState } from "react"
import { useRouter } from "next/navigation"
import { useProgressStore } from "@/store/progress-store"
import { regularSessionContent } from "@/data/regular-content"

interface RegularSessionPageProps {
  params: Promise<{ id: string }>
}

export default function RegularSessionPage({ params }: RegularSessionPageProps) {
  const { id } = use(params)
  const sessionId = parseInt(id)
  
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [isCompleting, setIsCompleting] = useState(false)
  const [earnedXP, setEarnedXP] = useState(0)
  const router = useRouter()
  const { completeSession } = useProgressStore()
  
  const currentSession = regularSessionContent[sessionId as keyof typeof regularSessionContent]
  
  if (!currentSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Session {sessionId}</h2>
              <p className="text-gray-600 mb-4">Cette session sera bientôt disponible.</p>
              <Link href="/regular">
                <Button>Retour au parcours</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
  
  const steps = [
    { id: 1, title: "Classe inversée", completed: completedSteps.includes(1), current: currentStep === 1 },
    { id: 2, title: "Phrases clés", completed: completedSteps.includes(2), current: currentStep === 2 },
    { id: 3, title: "English Zone Challenge", completed: completedSteps.includes(3), current: currentStep === 3 },
    { id: 4, title: "Note culturelle", completed: completedSteps.includes(4), current: currentStep === 4 },
    { id: 5, title: "Mission & Gamification", completed: completedSteps.includes(5), current: currentStep === 5 }
  ]

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep])
      if (currentSession.gamification) {
        setEarnedXP(prev => prev + Math.floor(currentSession.gamification!.xpReward / 5))
      }
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
            className="space-y-6"
          >
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-900">
                  <Play className="h-5 w-5 mr-2" />
                  Classe Inversée - Préparation (15 min)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-800 text-lg mb-6">
                  {currentSession.objective}
                </p>
                
                {currentSession.flippedClassroom && (
                  <div className="bg-white/50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-purple-900 mb-3">🎥 Vidéo à regarder</h4>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-16 h-12 bg-purple-200 rounded flex items-center justify-center">
                        <Play className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-purple-900">{currentSession.flippedClassroom.videoTitle}</div>
                        <div className="text-sm text-purple-700">{currentSession.flippedClassroom.videoDuration}</div>
                      </div>
                    </div>
                    <p className="text-purple-800 text-sm mb-3">{currentSession.flippedClassroom.videoDescription}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(currentSession.flippedClassroom!.videoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Regarder la vidéo
                    </Button>
                  </div>
                )}
                
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">🎯 Ce que tu vas apprendre :</h4>
                  <ul className="text-purple-800 space-y-1">
                    <li>• Tes 5 premiers mots essentiels en anglais</li>
                    <li>• Comment te présenter avec confiance</li>
                    <li>• Les sons de l'anglais qui n'existent pas en français</li>
                    <li>• Créer ton premier dialogue en anglais</li>
                  </ul>
                </div>
                
                <Button onClick={handleStepComplete} className="mt-6 w-full h-12" size="lg">
                  J'ai regardé la vidéo - Continuer
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
                  Tes 5 Premiers Mots Magiques ✨
                </CardTitle>
                <CardDescription>
                  Ces mots vont débloquer tes premières conversations en anglais !
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
            
            {earnedXP > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-lg p-4 text-center"
              >
                <div className="text-2xl mb-2">🎉</div>
                <div className="font-bold text-yellow-800">+{earnedXP} XP gagnés!</div>
                <div className="text-sm text-yellow-700">Continue comme ça, champion!</div>
              </motion.div>
            )}
            
            <Button onClick={handleStepComplete} className="w-full h-12" size="lg">
              J'ai écouté tous les mots - Challenge time! 🚀
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
            
            {currentSession.gamification && (
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 mt-6">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center">
                    <Gamepad2 className="h-5 w-5 mr-2" />
                    Défis Bonus 🎮
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentSession.gamification.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-green-800">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            <Button onClick={handleStepComplete} className="w-full mt-6 h-12" size="lg">
              Défis relevés - Découvrir les secrets culturels 🌍
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
                  Secret Culturel Débloqué! 🔓
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-amber-800 text-lg leading-relaxed mb-4">
                  {currentSession.culturalNote}
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-amber-900 mb-2">💡 Astuce Gen Z :</div>
                  <div className="text-amber-800">
                    {currentSession.vipTip}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button onClick={handleStepComplete} className="w-full mt-6 h-12" size="lg">
              Secret mémorisé - Voir ma mission finale 🎯
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
            className="space-y-6"
          >
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Ta Mission Cette Semaine 🚀
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 text-lg mb-6">
                  {currentSession.practice}
                </p>
                <div className="bg-white/50 rounded-lg p-4 mb-4">
                  <div className="text-sm font-semibold text-green-900 mb-2">📱 Tes outils :</div>
                  <ul className="text-green-800 space-y-1">
                    {currentSession.practiceResources.map((resource, index) => (
                      <li key={index}>• {resource}</li>
                    ))}
                  </ul>
                </div>
                
                {currentSession.digitalTools && (
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="text-sm font-semibold text-green-900 mb-3">🛠️ Apps recommandées :</div>
                    <div className="space-y-2">
                      {currentSession.digitalTools.map((tool, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-green-900 text-sm">{tool.name}</div>
                            <div className="text-xs text-green-700">{tool.description}</div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(tool.link, '_blank')}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {currentSession.gamification && (
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Récompenses Débloquées! 🏆
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-700">+{currentSession.gamification.xpReward}</div>
                      <div className="text-purple-600 text-sm">XP Total</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-700">{currentSession.gamification.badges.length}</div>
                      <div className="text-purple-600 text-sm">Badges</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentSession.gamification.badges.map((badge, index) => (
                      <Badge key={index} className="bg-purple-100 text-purple-800">
                        🏅 {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            <div className="flex flex-col gap-3 mt-6">
              <Button 
                size="lg" 
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" 
                disabled={isCompleting}
                onClick={() => {
                  setIsCompleting(true)
                  setCompletedSteps([...completedSteps, 5])
                  if (currentSession.gamification) {
                    completeSession(
                      sessionId, 
                      currentSession.gamification.xpReward,
                      currentSession.gamification.badges,
                      currentSession.gamification.challenges
                    )
                  } else {
                    completeSession(sessionId)
                  }
                  setTimeout(() => router.push('/regular'), 2000)
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
                    Mission acceptée - Terminer la session 🎉
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
                className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-lg text-center"
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
                  Bravo! Session {sessionId} terminée avec succès!
                </div>
                <div className="text-green-600 text-sm mt-1">
                  Tu es maintenant plus proche de ton objectif A2! 🚀
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-4 sm:py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <Link href="/regular">
              <Button variant="ghost" size="sm" className="h-10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Retour au parcours</span>
                <span className="sm:hidden">Retour</span>
              </Button>
            </Link>
            
            <div className="flex items-center space-x-3">
              {earnedXP > 0 && (
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  +{earnedXP} XP
                </div>
              )}
              <Button onClick={handleLiveSession} variant="premium" className="h-10">
                <Video className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Session Live</span>
                <span className="sm:hidden">Live</span>
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl font-bold text-white text-lg mb-4">
              {sessionId}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{currentSession.title}</h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Session interactive • {currentSession.duration} minutes</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1 order-last lg:order-first">
            <ProgressStepper steps={steps} onStepClick={handleStepClick} />
          </div>
          
          <div className="lg:col-span-3">
            {renderStepContent()}
          </div>
        </div>
        
        {/* Lesson Notes */}
        <LessonNotes sessionId={sessionId} track="regular" />
      </div>
    </div>
  )
}