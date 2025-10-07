"use client"

import { use } from "react"
import { SessionRenderer } from "@/components/session/session-renderer"

interface RegularSessionPageProps {
  params: Promise<{ id: string }>
}

export default function RegularSessionPage({ params }: RegularSessionPageProps) {
  const { id } = use(params)
  const sessionId = parseInt(id)

  return (
    <SessionRenderer 
      sessionId={sessionId} 
      track="regular" 
    />
  )
}