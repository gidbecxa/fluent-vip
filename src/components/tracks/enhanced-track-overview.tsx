"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SessionCard } from "@/components/session/session-card"
import { ProgressTracker } from "@/components/session/progress-tracker"
import { motion } from "framer-motion"
import { Clock, Target, Users, Award, BookOpen, Zap, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"
import { contentManager, SessionContent } from "@/lib/content-manager"
import { useProgressStore } from "@/store/progress-store"

interface TrackMetadata {
  track: string
  title: string
  description: string
  targetLevel: string
  duration: string
  sessionsPerWeek: number
  totalSessions: number
  sessions: number[]
  weeks: Array<{
    weekNumber: number
    title: string
    objective: string
    sessions: number[]
    keyTopics: string[]
  }>
  learningObjectives: string[]
  prerequisites: string
  assessmentMethods: string[]
  pedagogicalApproach: string[]
  uniqueFeatures?: string[]
}

interface EnhancedTrackOverviewProps {
  track: "regular" | "executive"
}

export function EnhancedTrackOverview({ track }: EnhancedTrackOverviewProps) {
  const [metadata, setMetadata] = useState<TrackMetadata | null>(null)
  const [sessions, setSessions] = useState<SessionContent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { completedSessions, totalXP } = useProgressStore()

  useEffect(() => {
    const loadTrackData = async () => {
      try {
        setLoading(true)
        
        // Load metadata
        const trackMetadata = await contentManager.loadTrackMetadata(track)
        if (!trackMetadata) {
          setError(`Failed to load ${track} track metadata`)
          return
        }
        setMetadata(trackMetadata as TrackMetadata)

        // Load all sessions
        const trackSessions = await contentManager.getTrackSessions(track)
        setSessions(trackSessions)
        
      } catch (err) {
        setError(`Failed to load track data: ${err}`)
      } finally {
        setLoading(false)
      }
    }

    loadTrackData()
  }, [track])

  const getTrackIcon = () => {
    return track === "executive" ? <Award className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />
  }

  const getTrackColor = () => {
    return track === "executive" ? "from-amber-600 to-orange-600" : "from-blue-600 to-purple-600"
  }

  const getCompletionStats = () => {
    if (!metadata) return { completed: 0, total: 0, percentage: 0 }
    
    const completed = metadata.sessions.filter(sessionId => 
      completedSessions.includes(sessionId)
    ).length
    const total = metadata.sessions.length
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
    
    return { completed, total, percentage }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 flex items-center justify-center">
        <Card className="p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement du parcours...</p>
          </div>
        </Card>
      </div>
    )
  }

  if (error || !metadata) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 flex items-center justify-center">
        <Card className="p-8 max-w-md">
          <div className="text-center">
            <h2 className="text-xl font-bold text-red-600 mb-4">Erreur</h2>
            <p className="text-gray-600 mb-4">{error || "Parcours non trouvé"}</p>
            <Link href="/">
              <Button>Retour à l'accueil</Button>
            </Link>
          </div>
        </Card>
      </div>
    )
  }

  const stats = getCompletionStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 ${track === 'executive' ? 'gradient-executive' : 'gradient-regular'} rounded-2xl text-white mb-4`}>
            {getTrackIcon()}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {metadata.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {metadata.description}
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{metadata.targetLevel}</div>
                <div className="text-sm text-gray-600">Niveau cible</div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{metadata.duration}</div>
                <div className="text-sm text-gray-600">Durée totale</div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{stats.completed}/{stats.total}</div>
                <div className="text-sm text-gray-600">Sessions terminées</div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{totalXP}</div>
                <div className="text-sm text-gray-600">XP total</div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <ProgressTracker 
            totalSessions={5}
            currentWeek={1}
          />
        </motion.div>

        {/* Weeks Overview */}
        <div className="space-y-8">
          {metadata.weeks.map((week, weekIndex) => (
            <motion.div
              key={week.weekNumber}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + weekIndex * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className={`${track === 'executive' ? 'gradient-executive' : 'gradient-regular'} text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        Semaine {week.weekNumber}: {week.title}
                      </CardTitle>
                      <p className="text-white/90 mt-2">{week.objective}</p>
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30">
                      {week.sessions.length} sessions
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  {/* Key Topics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Sujets clés de cette semaine
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {week.keyTopics.map((topic, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-900">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Sessions Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {week.sessions.map((sessionId) => {
                      const session = sessions.find(s => s.id === sessionId)
                      const isCompleted = completedSessions.includes(sessionId)
                      
                      if (!session) {
                        return (
                          <Card key={sessionId} className="p-4 border-dashed border-gray-300">
                            <div className="text-center text-gray-500">
                              <div className="text-lg font-semibold mb-2">Session {sessionId}</div>
                              <div className="text-sm">Bientôt disponible</div>
                            </div>
                          </Card>
                        )
                      }

                      return (
                        <SessionCard
                          key={sessionId}
                          session={session}
                          track={track}
                          isCompleted={isCompleted}
                          showRedoButton={isCompleted}
                        />
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Objectifs d'apprentissage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {metadata.learningObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pedagogical Approach */}
        {metadata.pedagogicalApproach && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Approche pédagogique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {metadata.pedagogicalApproach.map((approach, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{approach}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Unique Features for Executive Track */}
        {metadata.uniqueFeatures && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <Award className="h-5 w-5 mr-2" />
                  Avantages exclusifs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {metadata.uniqueFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-amber-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}