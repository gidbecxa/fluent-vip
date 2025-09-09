import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ProgressState {
  completedSessions: number[]
  completeSession: (sessionId: number) => void
  isSessionCompleted: (sessionId: number) => boolean
  getCompletedSessionsCount: () => number
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedSessions: [],
      
      completeSession: (sessionId: number) => {
        const { completedSessions } = get()
        if (!completedSessions.includes(sessionId)) {
          set({ completedSessions: [...completedSessions, sessionId] })
        }
      },
      
      isSessionCompleted: (sessionId: number) => {
        return get().completedSessions.includes(sessionId)
      },
      
      getCompletedSessionsCount: () => {
        return get().completedSessions.length
      }
    }),
    {
      name: 'fluentvip-progress',
    }
  )
)