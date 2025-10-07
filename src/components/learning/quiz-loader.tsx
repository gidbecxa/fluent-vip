"use client"

import { useState, useEffect } from "react"
import { QuizActivity } from "./quiz-activity"
import { Card, CardContent } from "@/components/ui/card"

interface QuizData {
  sessionId: number
  title: string
  description: string
  passingScore: number
  questions: Array<{
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }>
}

interface QuizLoaderProps {
  sessionId: number
  track: string
  title: string
  onComplete: (score: number) => void
}

export function QuizLoader({ sessionId, track, title, onComplete }: QuizLoaderProps) {
  const [quizData, setQuizData] = useState<QuizData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const response = await fetch(`/api/content?track=${track}&sessionId=${sessionId}&type=quiz`)
        
        if (!response.ok) {
          throw new Error('Quiz not found')
        }

        const data = await response.json()
        setQuizData(data)
      } catch (err) {
        setError('Failed to load quiz')
        console.error('Quiz loading error:', err)
      } finally {
        setLoading(false)
      }
    }

    loadQuiz()
  }, [sessionId, track])

  if (loading) {
    return (
      <Card className="ios-card">
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Chargement du quiz...</p>
        </CardContent>
      </Card>
    )
  }

  if (error || !quizData) {
    return (
      <Card className="ios-card">
        <CardContent className="p-8 text-center">
          <p className="text-red-600">Erreur lors du chargement du quiz</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <QuizActivity
      title={quizData.title}
      questions={quizData.questions}
      onComplete={onComplete}
      passingScore={quizData.passingScore}
    />
  )
}