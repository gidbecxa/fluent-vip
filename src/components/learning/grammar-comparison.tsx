"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AudioPlayer } from "./audio-player"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle, X, Lightbulb, Volume2, Zap } from "lucide-react"

interface GrammarExample {
  english: string
  french: string
  explanation: string
  audioFile?: string
  isCorrect?: boolean
}

interface GrammarRule {
  title: string
  description: string
  color: "blue" | "purple" | "green"
  examples: GrammarExample[]
}

interface GrammarComparisonProps {
  title: string
  subtitle: string
  rules: GrammarRule[]
  onComplete?: () => void
}

export function GrammarComparison({ title, subtitle, rules, onComplete }: GrammarComparisonProps) {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0)
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0)
  const [completedRules, setCompletedRules] = useState<number[]>([])
  const [showExplanation, setShowExplanation] = useState(false)

  const currentRule = rules[currentRuleIndex]
  const currentExample = currentRule.examples[currentExampleIndex]
  const isCompleted = completedRules.length === rules.length

  const getColorClasses = (color: "blue" | "purple" | "green") => {
    const colors = {
      blue: "bg-blue-100 text-blue-900 border-blue-200",
      purple: "bg-purple-100 text-purple-900 border-purple-200",
      green: "bg-green-100 text-green-900 border-green-200"
    }
    return colors[color]
  }

  const getGradientClasses = (color: "blue" | "purple" | "green") => {
    const gradients = {
      blue: "from-blue-600 to-cyan-600",
      purple: "from-purple-600 to-pink-600",
      green: "from-green-600 to-emerald-600"
    }
    return gradients[color]
  }

  const handleNextExample = () => {
    if (currentExampleIndex < currentRule.examples.length - 1) {
      setCurrentExampleIndex(currentExampleIndex + 1)
      setShowExplanation(false)
    }
  }

  const handlePreviousExample = () => {
    if (currentExampleIndex > 0) {
      setCurrentExampleIndex(currentExampleIndex - 1)
      setShowExplanation(false)
    }
  }

  const handleNextRule = () => {
    if (currentRuleIndex < rules.length - 1) {
      setCurrentRuleIndex(currentRuleIndex + 1)
      setCurrentExampleIndex(0)
      setShowExplanation(false)
    }
  }

  const handlePreviousRule = () => {
    if (currentRuleIndex > 0) {
      setCurrentRuleIndex(currentRuleIndex - 1)
      setCurrentExampleIndex(0)
      setShowExplanation(false)
    }
  }

  const handleRuleComplete = () => {
    if (!completedRules.includes(currentRuleIndex)) {
      setCompletedRules([...completedRules, currentRuleIndex])
    }
    if (currentRuleIndex === rules.length - 1 && onComplete) {
      onComplete()
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${getGradientClasses(currentRule.color)} rounded-xl flex items-center justify-center`}>
            <Zap className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
        <p className="text-gray-600 mt-2">{subtitle}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Rule Progress */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          {rules.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentRuleIndex
                  ? `bg-gradient-to-r ${getGradientClasses(currentRule.color)}`
                  : completedRules.includes(index)
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Current Rule */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRuleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Rule Header */}
            <Card className={`${getColorClasses(currentRule.color)} border-2`}>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  {currentRule.title}
                </CardTitle>
                <p className="text-lg">{currentRule.description}</p>
              </CardHeader>
            </Card>

            {/* Current Example */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExampleIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <Card className="bg-white border-2 border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    {/* English Example */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-900 mb-4 leading-relaxed">
                        {currentExample.english}
                      </div>
                      
                      {/* Audio Player */}
                      {currentExample.audioFile && (
                        <div className="flex justify-center mb-4">
                          <AudioPlayer 
                            src={currentExample.audioFile || ''} 
                            className="bg-gray-50"
                          />
                        </div>
                      )}

                      {/* French Translation */}
                      <div className="flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-gray-400 mx-4" />
                      </div>
                      <div className="text-xl text-gray-700 italic mt-4">
                        "{currentExample.french}"
                      </div>
                    </div>

                    {/* Explanation Toggle */}
                    <div className="text-center">
                      <Button
                        variant="outline"
                        onClick={() => setShowExplanation(!showExplanation)}
                        className="mb-4"
                      >
                        <Volume2 className="h-4 w-4 mr-2" />
                        {showExplanation ? "Masquer" : "Voir"} l'explication
                      </Button>

                      {/* Explanation */}
                      <AnimatePresence>
                        {showExplanation && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200"
                          >
                            <div className="flex items-start">
                              <Lightbulb className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                              <p className="text-left text-gray-800 leading-relaxed">
                                {currentExample.explanation}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </CardContent>
                </Card>

                {/* Example Navigation */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePreviousExample}
                    disabled={currentExampleIndex === 0}
                    size="sm"
                  >
                    ← Exemple précédent
                  </Button>

                  <Badge variant="secondary" className="px-3 py-1">
                    Exemple {currentExampleIndex + 1} / {currentRule.examples.length}
                  </Badge>

                  <Button
                    onClick={handleNextExample}
                    disabled={currentExampleIndex === currentRule.examples.length - 1}
                    size="sm"
                  >
                    Exemple suivant →
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Rule Completion */}
            <div className="text-center pt-4 border-t">
              {completedRules.includes(currentRuleIndex) ? (
                <Badge className="bg-green-100 text-green-900 border-green-200 px-4 py-2 text-lg">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Règle maîtrisée!
                </Badge>
              ) : (
                <Button
                  onClick={handleRuleComplete}
                  className={`bg-gradient-to-r ${getGradientClasses(currentRule.color)} hover:opacity-90 text-lg px-6 py-3`}
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  J'ai compris cette règle
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Rule Navigation */}
        <div className="flex items-center justify-between pt-6 border-t">
          <Button
            variant="outline"
            onClick={handlePreviousRule}
            disabled={currentRuleIndex === 0}
          >
            ← Règle précédente
          </Button>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">
              Règle {currentRuleIndex + 1} / {rules.length}
            </div>
            <div className="text-xs text-gray-500">
              {completedRules.length} / {rules.length} maîtrisées
            </div>
          </div>

          <Button
            onClick={handleNextRule}
            disabled={currentRuleIndex === rules.length - 1}
          >
            Règle suivante →
          </Button>
        </div>

        {/* Completion Message */}
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">
              Grammaire maîtrisée! 🎉
            </h3>
            <p className="text-green-800">
              Tu as compris toutes les règles. Tu peux maintenant les utiliser avec confiance!
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}