"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SessionCard } from "@/components/session/session-card"
import { useProgressStore } from "@/store/progress-store"
import { contentManager, SessionContent } from "@/lib/content-manager"
import { Calendar, Clock, Target, Menu, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface WeekOverviewProps {
  track: "regular" | "executive"
}

const WEEK_CONFIG = {
  1: { title: "Les Fondations de la Confiance", sessions: [1, 2, 3, 4, 5], description: "Parler dès le premier jour" },
  2: { title: "Consolidation des Bases", sessions: [6, 7, 8, 9, 10], description: "Élargissement des compétences" },
  3: { title: "Aisance Conversationnelle", sessions: [11, 12, 13, 14, 15], description: "Fluidité naturelle" },
  4: { title: "Usage Sophistiqué", sessions: [16, 17, 18, 19, 20], description: "Expression d'idées complexes" }
}

export function WeekOverview({ track }: WeekOverviewProps) {
  const { currentWeek, isSessionCompleted } = useProgressStore()
  const [sessions, setSessions] = useState<SessionContent[]>([])
  const [loading, setLoading] = useState(true)
  const [showWeekMenu, setShowWeekMenu] = useState(false)

  const weekConfig = WEEK_CONFIG[currentWeek as keyof typeof WEEK_CONFIG]

  useEffect(() => {
    const loadWeekSessions = async () => {
      setLoading(true)
      const weekSessions: SessionContent[] = []
      
      for (const sessionId of weekConfig.sessions) {
        const session = await contentManager.loadSession(track, sessionId)
        if (session) {
          weekSessions.push(session)
        }
      }
      
      setSessions(weekSessions)
      setLoading(false)
    }

    loadWeekSessions()
  }, [currentWeek, track, weekConfig.sessions])

  const completedCount = weekConfig.sessions.filter(id => isSessionCompleted(id)).length
  const progressPercentage = (completedCount / weekConfig.sessions.length) * 100

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-4 sm:py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header with Week Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="ios-button">
                <ChevronLeft className="h-4 w-4 mr-2" /> Accueil
              </Button>
            </Link>
            <div className="relative">
              <Button 
                variant="outline" 
                onClick={() => setShowWeekMenu(!showWeekMenu)}
                className="ios-button"
              >
                <Menu className="h-4 w-4 mr-2" /> Semaines
              </Button>
              
              {showWeekMenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border z-50">
                  {Object.entries(WEEK_CONFIG).map(([week, config]) => {
                    const weekNum = parseInt(week)
                    const hasContent = weekNum <= 2 // Only weeks 1-2 have content
                    
                    return (
                      <button
                        key={week}
                        onClick={() => {
                          if (hasContent) {
                            useProgressStore.getState().setCurrentWeek(weekNum)
                            setShowWeekMenu(false)
                          }
                        }}
                        disabled={!hasContent}
                        className={`w-full text-left p-3 hover:bg-slate-50 first:rounded-t-xl last:rounded-b-xl transition-colors ${
                          weekNum === currentWeek ? 'bg-emerald-50 text-emerald-900' : ''
                        } ${!hasContent ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <div className="font-medium">Semaine {week}</div>
                        <div className="text-sm text-slate-600">{config.title}</div>
                        {!hasContent && (
                          <div className="text-xs text-amber-600 mt-1">Bientôt disponible</div>
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
          
          <Badge className="bg-slate-100 text-slate-900 capitalize">
            {track === "executive" ? "Parcours Exécutif" : "Parcours Régulier"}
          </Badge>
        </div>

        {/* Week Header */}
        <Card className="ios-card mb-8">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-emerald-600" />
              <Badge variant="outline" className="text-lg px-4 py-2">
                Semaine {currentWeek}
              </Badge>
            </div>
            <CardTitle className="text-3xl font-bold mb-2">{weekConfig.title}</CardTitle>
            <p className="text-lg text-slate-600 mb-4">{weekConfig.description}</p>
            
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
              <div 
                className="gradient-brand h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-600">
              {completedCount} sur {weekConfig.sessions.length} sessions terminées
            </p>
          </CardHeader>
        </Card>

        {/* Sessions Grid */}
        {sessions.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                track={track}
                isCompleted={isSessionCompleted(session.id)}
                showRedoButton={isSessionCompleted(session.id)}
              />
            ))}
          </div>
        ) : (
          <Card className="ios-card text-center py-12">
            <CardContent>
              <Target className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Contenu en Préparation
              </h3>
              <p className="text-slate-600 mb-6">
                Les sessions de la semaine {currentWeek} sont en cours de développement.
                <br />
                Revenez bientôt pour découvrir de nouveaux contenus passionnants !
              </p>
              <Button 
                onClick={() => useProgressStore.getState().setCurrentWeek(1)}
                className="gradient-brand text-white ios-button"
              >
                Retour à la Semaine 1
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}