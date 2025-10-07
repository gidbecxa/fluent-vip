import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ProgressState {
  completedSessions: number[]
  currentWeek: number
  totalXP: number
  earnedBadges: string[]
  completedChallenges: string[]
  completeSession: (sessionId: number, xpReward?: number, badges?: string[], challenges?: string[]) => void
  isSessionCompleted: (sessionId: number) => boolean
  getCurrentWeek: () => number
  setCurrentWeek: (week: number) => void
  getCompletedSessionsCount: () => number
  getTotalXP: () => number
  getEarnedBadges: () => string[]
  hasBadge: (badge: string) => boolean
  addXP: (amount: number) => void
  addBadge: (badge: string) => void
  completeChallenge: (challenge: string) => void
  isChallengeCompleted: (challenge: string) => boolean
  markSessionCompleted: (sessionId: number) => void
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedSessions: [],
      currentWeek: 1,
      totalXP: 0,
      earnedBadges: [],
      completedChallenges: [],
      
      completeSession: (sessionId: number, xpReward = 0, badges = [], challenges = []) => {
        const { completedSessions, totalXP, earnedBadges, completedChallenges } = get()
        if (!completedSessions.includes(sessionId)) {
          set({ 
            completedSessions: [...completedSessions, sessionId],
            totalXP: totalXP + xpReward,
            earnedBadges: [...new Set([...earnedBadges, ...badges])],
            completedChallenges: [...new Set([...completedChallenges, ...challenges])]
          })
        }
      },
      
      isSessionCompleted: (sessionId: number) => {
        return get().completedSessions.includes(sessionId)
      },
      
      getCompletedSessionsCount: () => {
        return get().completedSessions.length
      },
      
      getTotalXP: () => {
        return get().totalXP
      },
      
      getEarnedBadges: () => {
        return get().earnedBadges
      },
      
      hasBadge: (badge: string) => {
        return get().earnedBadges.includes(badge)
      },
      
      addXP: (amount: number) => {
        const { totalXP } = get()
        set({ totalXP: totalXP + amount })
      },
      
      addBadge: (badge: string) => {
        const { earnedBadges } = get()
        if (!earnedBadges.includes(badge)) {
          set({ earnedBadges: [...earnedBadges, badge] })
        }
      },
      
      completeChallenge: (challenge: string) => {
        const { completedChallenges } = get()
        if (!completedChallenges.includes(challenge)) {
          set({ completedChallenges: [...completedChallenges, challenge] })
        }
      },
      
      isChallengeCompleted: (challenge: string) => {
        return get().completedChallenges.includes(challenge)
      },
      
      getCurrentWeek: () => {
        return get().currentWeek
      },
      
      setCurrentWeek: (week: number) => {
        set({ currentWeek: week })
      },
      
      markSessionCompleted: (sessionId: number) => {
        const { completedSessions, currentWeek } = get()
        if (!completedSessions.includes(sessionId)) {
          const newCompleted = [...completedSessions, sessionId]
          let newWeek = currentWeek
          
          // Auto-advance week based on completed sessions
          if (sessionId === 5 && currentWeek === 1) {
            newWeek = 2
          } else if (sessionId === 10 && currentWeek === 2) {
            newWeek = 3
          }
          
          set({ 
            completedSessions: newCompleted,
            currentWeek: newWeek
          })
        }
      }
    }),
    {
      name: 'fluentvip-progress',
    }
  )
)