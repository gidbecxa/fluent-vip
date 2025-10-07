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
import { QuizLoader } from "@/components/learning/quiz-loader"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Clock, Target, Play, CheckCircle, Volume2, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useProgressStore } from "@/store/progress-store"
import { SessionContent, contentManager } from "@/lib/content-manager"

interface SessionRendererProps {
  sessionId: number
  track: "regular" | "executive"
}

export function SessionRenderer({ sessionId, track }: SessionRendererProps) {
  const [sessionContent, setSessionContent] = useState<SessionContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const { markSessionCompleted } = useProgressStore()

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await contentManager.loadSession(track, sessionId)
        setSessionContent(content)
      } catch (error) {
        console.error('Failed to load session:', error)
      } finally {
        setLoading(false)
      }
    }
    loadContent()
  }, [sessionId, track])

  if (loading || !sessionContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 flex items-center justify-center">
        <Card className="p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Chargement...</p>
          </div>
        </Card>
      </div>
    )
  }

  const generateSteps = () => {
    const steps = [{ id: 1, title: "Objectif", current: currentStep === 1, completed: completedSteps.includes(1) }]
    
    if (sessionContent.grammarRules?.length) {
      steps.push({ id: steps.length + 1, title: "Grammaire", current: currentStep === steps.length + 1, completed: completedSteps.includes(steps.length + 1) })
    }
    if (sessionContent.keyPhrases?.length) {
      steps.push({ id: steps.length + 1, title: "Phrases Clés", current: currentStep === steps.length + 1, completed: completedSteps.includes(steps.length + 1) })
    }
    if (sessionContent.dialogues?.length) {
      steps.push({ id: steps.length + 1, title: "Dialogue", current: currentStep === steps.length + 1, completed: completedSteps.includes(steps.length + 1) })
    }
    if (sessionContent.activities?.length) {
      steps.push({ id: steps.length + 1, title: "Pratique", current: currentStep === steps.length + 1, completed: completedSteps.includes(steps.length + 1) })
    }
    if (sessionContent.culturalNotes?.length) {
      steps.push({ id: steps.length + 1, title: "Culture", current: currentStep === steps.length + 1, completed: completedSteps.includes(steps.length + 1) })
    }
    if (sessionContent.multimedia?.interactiveElements?.some(el => el.type === 'quiz')) {
      steps.push({ id: steps.length + 1, title: "Quiz", current: currentStep === steps.length + 1, completed: completedSteps.includes(steps.length + 1) })
    }
    
    return steps
  }

  const steps = generateSteps()
  const isCompleted = completedSteps.length === steps.length

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep])
    }
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      markSessionCompleted(sessionId)
    }
  }

  const renderStepContent = () => {
    const step = steps[currentStep - 1]
    if (!step) return null

    switch (step.title) {
      case "Objectif":
        return (
          <Card className="ios-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">{sessionContent.title}</CardTitle>
              <Badge className="bg-emerald-100 text-emerald-900 mt-2">
                Session {sessionId} - Semaine {sessionContent.week}
              </Badge>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-slate-700">{sessionContent.objective}</p>
              <Button onClick={handleStepComplete} className="gradient-brand text-white ios-button">
                Commencer <Play className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )

      case "Grammaire":
        return sessionContent.grammarRules ? (
          <GrammarComparison
            title="Règles de Grammaire"
            subtitle="Structures fondamentales"
            rules={sessionContent.grammarRules}
            onComplete={handleStepComplete}
          />
        ) : null

      case "Phrases Clés":
        return (
          <Card className="ios-card">
            <CardHeader className="text-center">
              <Volume2 className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <CardTitle>Phrases Clés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sessionContent.keyPhrases?.map((phrase, index) => (
                <PronunciationCard
                  key={index}
                  index={index}
                  english={phrase.english}
                  pronunciation={phrase.pronunciation}
                  context={phrase.context}
                  audioFile={phrase.audioFile || ''}
                />
              ))}
              <Button onClick={handleStepComplete} className="w-full gradient-brand text-white ios-button">
                <CheckCircle className="h-4 w-4 mr-2" /> Continuer
              </Button>
            </CardContent>
          </Card>
        )

      case "Dialogue":
        return sessionContent.dialogues?.[0] ? (
          <DialoguePractice
            scenario={sessionContent.dialogues[0]}
            onComplete={handleStepComplete}
          />
        ) : null

      case "Pratique":
        return sessionContent.activities?.[0] ? (
          <div className="space-y-6">
            <RolePlayActivity
              scenarios={sessionContent.activities[0].scenarios || []}
              title={sessionContent.activities[0].title}
              description={sessionContent.activities[0].description}
            />
            <Button onClick={handleStepComplete} className="w-full gradient-brand text-white ios-button">
              <CheckCircle className="h-4 w-4 mr-2" /> Terminé
            </Button>
          </div>
        ) : null

      case "Culture":
        return (
          <Card className="ios-card">
            <CardHeader className="text-center">
              <Lightbulb className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <CardTitle>Notes Culturelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sessionContent.culturalNotes?.map((note, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-xl">
                  <div className="font-semibold text-slate-900 mb-2">
                    {note.type === 'cultural' && '🌍 Culture'}
                    {note.type === 'vipTip' && '💡 Astuce VIP'}
                    {note.type === 'genZTip' && '🚀 Astuce Gen Z'}
                  </div>
                  <p className="text-slate-700">{note.content}</p>
                </div>
              ))}
              <Button onClick={handleStepComplete} className="w-full gradient-brand text-white ios-button">
                <CheckCircle className="h-4 w-4 mr-2" /> {sessionContent.multimedia?.interactiveElements?.some(el => el.type === 'quiz') ? 'Continuer vers le Quiz' : 'Terminer la session'}
              </Button>
            </CardContent>
          </Card>
        )

      case "Quiz":
        const quizElement = sessionContent.multimedia?.interactiveElements?.find(el => el.type === 'quiz')
        if (!quizElement) return null
        
        return (
          <QuizLoader
            sessionId={sessionContent.id}
            track={sessionContent.track}
            title={quizElement.title}
            onComplete={(score) => {
              console.log(`Session ${sessionContent.id} quiz completed with score: ${score}%`)
              handleStepComplete()
            }}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-4 sm:py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-6">
          <Link href={`/${track}`}>
            <Button variant="ghost" className="ios-button">
              <ArrowLeft className="h-4 w-4 mr-2" /> Retour
            </Button>
          </Link>
          <Badge className="bg-slate-100 text-slate-900">
            <Clock className="h-3 w-3 mr-1" /> {sessionContent.duration} min
          </Badge>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <ProgressStepper steps={steps} onStepClick={setCurrentStep} />
          </div>
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <Card className="ios-card max-w-md w-full">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Session Terminée! 🎉</h3>
                <p className="text-slate-600 mb-6">Excellent travail! Vous progressez rapidement.</p>
                {sessionContent.gamification && (
                  <div className="bg-emerald-50 rounded-xl p-4 mb-6">
                    <div className="text-lg font-bold text-emerald-900">+{sessionContent.gamification.xpReward} XP</div>
                    <div className="text-sm text-emerald-700">Points gagnés</div>
                  </div>
                )}
                <div className="space-y-3">
                  <Link href={`/${track}`}>
                    <Button className="w-full gradient-brand text-white ios-button">Retour au parcours</Button>
                  </Link>
                  <Link href={`/${track}/session/${sessionId + 1}`}>
                    <Button variant="outline" className="w-full ios-button">Session suivante →</Button>
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