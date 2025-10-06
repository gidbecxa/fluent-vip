"use client"

import { SessionRenderer } from "@/components/sessions/session-renderer"
import { regularWeek2SessionContent } from "@/data/regular-week2-content"
import { getSessionConfig } from "@/lib/session-utils"

export default function Session9Page() {
  const sessionId = 9
  const track = "regular"
  const sessionContent = regularWeek2SessionContent[sessionId]
  const config = getSessionConfig(sessionId, track)

  if (!sessionContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Session non trouvée</h1>
          <p className="text-gray-600">La session {sessionId} n'existe pas encore.</p>
        </div>
      </div>
    )
  }

  return (
    <SessionRenderer
      sessionId={sessionId}
      sessionContent={sessionContent}
      track={track}
      customSteps={config.customSteps}
      customGrammarRules={config.customGrammarRules}
      customDialogue={config.customDialogue}
      customComponents={config.customComponents}
    />
  )
}