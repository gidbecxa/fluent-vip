"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, Award, RotateCcw } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  audioFile?: string
}

interface QuizActivityProps {
  title: string
  questions: QuizQuestion[]
  onComplete: (score: number) => void
  passingScore?: number
}

export function QuizActivity({ title, questions, onComplete, passingScore = 70 }: QuizActivityProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)
    setShowResult(true)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        // Quiz completed
        const score = Math.round((newAnswers.filter((answer, index) => 
          answer === questions[index].correctAnswer
        ).length / questions.length) * 100)
        
        setQuizCompleted(true)
        onComplete(score)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnswers([])
    setQuizCompleted(false)
  }

  const currentQ = questions[currentQuestion]
  const isCorrect = selectedAnswer === currentQ?.correctAnswer
  const score = Math.round((answers.filter((answer, index) => 
    answer === questions[index].correctAnswer
  ).length / questions.length) * 100)

  if (quizCompleted) {
    const passed = score >= passingScore
    
    return (
      <Card className="ios-card">
        <CardHeader className="text-center">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
            passed ? 'bg-emerald-100' : 'bg-orange-100'
          }`}>
            {passed ? (
              <Award className="h-10 w-10 text-emerald-600" />
            ) : (
              <RotateCcw className="h-10 w-10 text-orange-600" />
            )}
          </div>
          <CardTitle className="text-2xl">
            {passed ? 'Quiz Réussi! 🎉' : 'Continuez vos Efforts! 💪'}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className={`text-4xl font-bold ${passed ? 'text-emerald-600' : 'text-orange-600'}`}>
            {score}%
          </div>
          <p className="text-slate-600">
            {passed 
              ? `Excellent! Vous avez obtenu ${score}% (minimum requis: ${passingScore}%)`
              : `Vous avez obtenu ${score}%. Réessayez pour atteindre ${passingScore}%`
            }
          </p>
          <div className="flex gap-3 justify-center">
            <Button onClick={resetQuiz} variant="outline" className="ios-button">
              <RotateCcw className="h-4 w-4 mr-2" /> Recommencer
            </Button>
            {passed && (
              <Button onClick={() => onComplete(score)} className="gradient-brand text-white ios-button">
                Continuer
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="ios-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge variant="outline">
            {currentQuestion + 1} / {questions.length}
          </Badge>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div 
            className="gradient-brand h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {currentQ?.question}
            </h3>
            
            <div className="space-y-3">
              {currentQ?.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                    selectedAnswer === index
                      ? showResult
                        ? isCorrect
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-red-500 bg-red-50'
                        : 'border-blue-500 bg-blue-50'
                      : showResult && index === currentQ.correctAnswer
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                  whileHover={{ scale: showResult ? 1 : 1.02 }}
                  whileTap={{ scale: showResult ? 1 : 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && (
                      <div>
                        {selectedAnswer === index && (
                          isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )
                        )}
                        {index === currentQ.correctAnswer && selectedAnswer !== index && (
                          <CheckCircle className="h-5 w-5 text-emerald-600" />
                        )}
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {showResult && currentQ.explanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-slate-50 rounded-xl"
              >
                <p className="text-sm text-slate-700">
                  <strong>Explication :</strong> {currentQ.explanation}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center">
          <div className="text-sm text-slate-500">
            Question {currentQuestion + 1} sur {questions.length}
          </div>
          <Button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null || showResult}
            className="gradient-brand text-white ios-button"
          >
            {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}