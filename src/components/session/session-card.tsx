"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Play, CheckCircle, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface SessionCardProps {
  session: {
    id: number
    title: string
    objective: string
    duration: number
  }
  track: "regular" | "executive"
  isCompleted?: boolean
  showRedoButton?: boolean
}

export function SessionCard({ session, track, isCompleted = false, showRedoButton = false }: SessionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: session.id * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="ios-card h-full hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                isCompleted ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
              }`}>
                {isCompleted ? <CheckCircle className="h-5 w-5" /> : session.id}
              </div>
              <div>
                <CardTitle className="text-lg">{session.title}</CardTitle>
                <div className="flex items-center text-sm text-slate-500 mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  {session.duration} min
                </div>
              </div>
            </div>

          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-slate-600 mb-4 line-clamp-2">{session.objective}</p>
          
          <div className="flex items-center gap-2">
            <Link href={`/${track}/session/${session.id}`} className="flex-1">
              <Button className="w-full gradient-brand text-white ios-button">
                {isCompleted ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" /> Terminé
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" /> Commencer
                  </>
                )}
              </Button>
            </Link>
            
            {showRedoButton && isCompleted && (
              <Link href={`/${track}/session/${session.id}`}>
                <Button variant="outline" className="ios-button px-3">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}