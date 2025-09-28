// Session type detection and configuration
export interface SessionConfig {
  useNewRenderer: boolean
  customSteps?: any[]
  customGrammarRules?: any[]
  customDialogue?: any
  customComponents?: { [stepId: number]: React.ReactNode }
}

// Define which sessions use the new renderer
const NEW_RENDERER_SESSIONS: Record<"regular" | "executive", number[]> = {
  regular: [6, 7, 8, 9, 10], // Week 2 sessions
  executive: [] // None yet, but ready for future
}

export function getSessionConfig(sessionId: number, track: "regular" | "executive"): SessionConfig {
  const useNewRenderer = NEW_RENDERER_SESSIONS[track].includes(sessionId)
  
  // Session 6 specific configuration
  if (sessionId === 6 && track === "regular") {
    return {
      useNewRenderer: true,
      customSteps: [
        { id: 1, title: "Objectif de la Session" },
        { id: 2, title: "Règles de Grammaire" },
        { id: 3, title: "Phrases Clés" },
        { id: 4, title: "Dialogue Pratique" },
        { id: 5, title: "Jeu du Miroir" },
        { id: 6, title: "Notes de Leçon" }
      ]
    }
  }

  // Default configuration for new renderer sessions
  if (useNewRenderer) {
    return {
      useNewRenderer: true,
      customSteps: [
        { id: 1, title: "Objectif de la Session" },
        { id: 2, title: "Phrases Clés" },
        { id: 3, title: "Activité Pratique" },
        { id: 4, title: "Notes de Leçon" }
      ]
    }
  }

  // Legacy sessions use old renderer
  return {
    useNewRenderer: false
  }
}

export function shouldUseNewRenderer(sessionId: number, track: "regular" | "executive"): boolean {
  return NEW_RENDERER_SESSIONS[track].includes(sessionId)
}