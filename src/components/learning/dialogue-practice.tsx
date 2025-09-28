"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AudioPlayer } from "./audio-player"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, RotateCcw, CheckCircle, Users, MessageCircle, Volume2 } from "lucide-react"

interface DialogueLine {
  speaker: "A" | "B"
  text: string
  translation: string
  audioFile?: string
}

interface DialogueScenario {
  id: string
  title: string
  description: string
  context: string
  lines: DialogueLine[]
}

interface DialoguePracticeProps {
  scenario: DialogueScenario
  onComplete?: () => void
}

export function DialoguePractice({ scenario, onComplete }: DialoguePracticeProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [completedLines, setCompletedLines] = useState<number[]>([])
  const [showTranslation, setShowTranslation] = useState(false)

  const currentLine = scenario.lines[currentLineIndex]
  const isCompleted = completedLines.length === scenario.lines.length

  const handleNext = () => {
    if (currentLineIndex < scenario.lines.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1)
      setShowTranslation(false)
    }
  }

  const handlePrevious = () => {
    if (currentLineIndex > 0) {
      setCurrentLineIndex(currentLineIndex - 1)
      setShowTranslation(false)
    }
  }

  const handleLineComplete = () => {
    if (!completedLines.includes(currentLineIndex)) {
      setCompletedLines([...completedLines, currentLineIndex])
    }
    if (currentLineIndex === scenario.lines.length - 1 && onComplete) {
      onComplete()
    }
  }

  const handleRestart = () => {
    setCurrentLineIndex(0)
    setCompletedLines([])
    setShowTranslation(false)
    setIsPlaying(false)
  }

  const getSpeakerColor = (speaker: "A" | "B") => {
    return speaker === "A" ? "bg-blue-100 text-blue-900 border-blue-200" : "bg-purple-100 text-purple-900 border-purple-200"
  }

  const getSpeakerName = (speaker: "A" | "B") => {
    return speaker === "A" ? "Toi" : "Ami"
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">{scenario.title}</CardTitle>
        <p className="text-gray-600 mt-2">{scenario.description}</p>
        <div className="flex items-center justify-center mt-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-900">
            <Users className="h-3 w-3 mr-1" />
            {scenario.context}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentLineIndex + 1) / scenario.lines.length) * 100}%` }}
          />
        </div>

        {/* Current Line Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLineIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Speaker Badge */}
            <div className="flex items-center justify-center">
              <Badge className={`${getSpeakerColor(currentLine.speaker)} px-4 py-2 text-lg font-semibold`}>
                {getSpeakerName(currentLine.speaker)} ({currentLine.speaker})
              </Badge>
            </div>

            {/* Main Text */}
            <Card className={`${getSpeakerColor(currentLine.speaker)} border-2`}>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-4 leading-relaxed">
                  {currentLine.text}
                </div>
                
                {/* Audio Player */}
                {currentLine.audioFile && (
                  <div className="flex justify-center mb-4">
                    <AudioPlayer 
                      src={currentLine.audioFile || ''} 
                      className="bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                )}

                {/* Translation Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="text-sm opacity-75 hover:opacity-100"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  {showTranslation ? "Masquer" : "Voir"} la traduction
                </Button>

                {/* Translation */}
                <AnimatePresence>
                  {showTranslation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-white/50 rounded-lg border"
                    >
                      <p className="text-lg italic text-gray-700">
                        "{currentLine.translation}"
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Line Completion */}
            <div className="flex justify-center">
              {completedLines.includes(currentLineIndex) ? (
                <Badge className="bg-green-100 text-green-900 border-green-200 px-4 py-2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Ligne maîtrisée!
                </Badge>
              ) : (
                <Button
                  onClick={handleLineComplete}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  J'ai maîtrisé cette ligne
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentLineIndex === 0}
            className="flex items-center"
          >
            ← Précédent
          </Button>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              {currentLineIndex + 1} / {scenario.lines.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRestart}
              className="text-gray-500 hover:text-gray-700"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          <Button
            onClick={handleNext}
            disabled={currentLineIndex === scenario.lines.length - 1}
            className="flex items-center"
          >
            Suivant →
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
              Dialogue maîtrisé! 🎉
            </h3>
            <p className="text-green-800">
              Tu as terminé ce dialogue avec succès. Tu peux maintenant l'utiliser dans de vraies conversations!
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}