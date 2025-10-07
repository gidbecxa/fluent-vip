"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle } from "lucide-react"
import { useProgressStore } from "@/store/progress-store"
import { useEffect, useState } from "react"

interface ProgressTrackerProps {
  totalSessions: number
  currentWeek: number
}

export function ProgressTracker({ totalSessions, currentWeek }: ProgressTrackerProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { getCompletedSessionsCount, isSessionCompleted, getTotalXP } = useProgressStore()
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const completedCount = getCompletedSessionsCount()
  const totalXP = getTotalXP()
  const progressPercentage = (completedCount / totalSessions) * 100

  return (
    <div className="ios-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-slate-900">Progression</h3>
        <span className="text-sm text-slate-500">Semaine {currentWeek}</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Sessions complétées</span>
            <span>{completedCount}/{totalSessions}</span>
          </div>
          
          <div className="w-full bg-slate-200 rounded-full h-2">
            <motion.div
              className="gradient-brand h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: totalSessions }, (_, i) => {
            const sessionId = i + 1
            return (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-center"
              >
                {isSessionCompleted(sessionId) ? (
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                ) : (
                  <Circle className="h-6 w-6 text-slate-300" />
                )}
              </motion.div>
            )
          })}
        </div>
        
        {totalXP > 0 && (
          <div className="bg-emerald-50 rounded-xl p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-700">{totalXP}</div>
              <div className="text-sm text-emerald-600">XP Total</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}