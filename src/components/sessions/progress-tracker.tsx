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
  const { getCompletedSessionsCount, isSessionCompleted, getTotalXP, getEarnedBadges } = useProgressStore()
  const completedSessions = isMounted ? getCompletedSessionsCount() : 0
  const totalXP = isMounted ? getTotalXP() : 0
  const earnedBadges = isMounted ? getEarnedBadges() : []
  const progressPercentage = (completedSessions / totalSessions) * 100

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900">Votre Progression</h3>
        <span className="text-sm text-gray-500">Semaine {currentWeek}</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Sessions complétées</span>
            <span>{completedSessions}/{totalSessions}</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
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
                {isMounted && isSessionCompleted(sessionId) ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.3, 1] }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </motion.div>
                ) : (
                  <Circle className="h-6 w-6 text-gray-300" />
                )}
              </motion.div>
            )
          })}
        </div>
        
        {totalXP > 0 && (
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-700">{totalXP}</div>
              <div className="text-xs text-yellow-600">XP Total</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-700">{earnedBadges.length}</div>
              <div className="text-xs text-yellow-600">Badges</div>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {completedSessions === totalSessions 
              ? "🎉 Félicitations! Semaine terminée!" 
              : `${totalSessions - completedSessions} sessions restantes`
            }
          </p>
        </div>
      </div>
    </div>
  )
}