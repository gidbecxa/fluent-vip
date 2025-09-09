"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Play, Video } from "lucide-react"
import { motion } from "framer-motion"
import { formatDuration } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"

interface SessionCardProps {
  sessionNumber: number
  title: string
  description: string
  duration: number
  objective: string
  isCompleted?: boolean
  onStart?: () => void
  onLiveSession: () => void
}

export function SessionCard({
  sessionNumber,
  title,
  description,
  duration,
  objective,
  isCompleted = false,
  onLiveSession
}: SessionCardProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cardContent = (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              isMounted && isCompleted 
                ? 'bg-green-100 text-green-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {sessionNumber}
            </div>
              <div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  {formatDuration(duration)}
                </div>
              </div>
            </div>
          </div>
          <CardDescription className="mt-2">
            <strong>Objectif:</strong> {objective}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <p className="text-sm sm:text-base text-gray-600 mb-4">{description}</p>
          
          <div className="flex flex-col gap-3">
            <Link href={`/executive/session/${sessionNumber}`}>
              <Button 
                className="w-full h-12"
                variant={isMounted && isCompleted ? "secondary" : "default"}
                size="lg"
              >
                <Play className="h-4 w-4 mr-2" />
                {isMounted && isCompleted ? "Revoir la session" : "Commencer"}
              </Button>
            </Link>
            
            <Button 
              onClick={onLiveSession}
              variant="outline"
              className="w-full h-12"
              size="lg"
            >
              <Video className="h-4 w-4 mr-2" />
              Session Live
            </Button>
          </div>
        </CardContent>
      </Card>
  )

  if (!isMounted) {
    return cardContent
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: sessionNumber * 0.1 }}
    >
      {cardContent}
    </motion.div>
  )
}