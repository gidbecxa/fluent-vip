"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AudioPlayer } from "@/components/learning/audio-player"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface PronunciationCardProps {
  english: string
  pronunciation: string
  context: string
  audioFile?: string
  index: number
}

export function PronunciationCard({ 
  english, 
  pronunciation, 
  context, 
  audioFile, 
  index 
}: PronunciationCardProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cardContent = (
    <Card className="hover:shadow-md transition-all duration-200 border-l-4 border-l-blue-500">
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="text-xl sm:text-2xl font-bold text-gray-900 flex-1">
              {english}
            </div>
            <div className="ml-3 flex-shrink-0">
              <AudioPlayer src={audioFile || 'placeholder.mp3'} />
            </div>
          </div>
          
          {/* Pronunciation Guide - Mobile Optimized */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-lg p-3">
            <div className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-1">
              🇫🇷 Prononciation française
            </div>
            <div className="text-base sm:text-lg font-bold text-purple-900 italic">
              {pronunciation}
            </div>
          </div>
          
          <div className="text-sm sm:text-base text-gray-600">
            {context}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  if (!isMounted) {
    return cardContent
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {cardContent}
    </motion.div>
  )
}