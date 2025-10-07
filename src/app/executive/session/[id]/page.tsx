"use client"

import { use } from "react"
import { SessionRenderer } from "@/components/session/session-renderer"

interface ExecutiveSessionPageProps {
  params: Promise<{ id: string }>
}

export default function ExecutiveSessionPage({ params }: ExecutiveSessionPageProps) {
  const { id } = use(params)
  const sessionId = parseInt(id)

  return (
    <SessionRenderer 
      sessionId={sessionId} 
      track="executive" 
    />
  )
}