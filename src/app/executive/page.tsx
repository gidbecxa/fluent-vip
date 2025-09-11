"use client"

import { SessionCard } from "@/components/sessions/session-card"
import { ProgressTracker } from "@/components/sessions/progress-tracker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Target, Clock, Video } from "lucide-react"
import { motion } from "framer-motion"
import { useProgressStore } from "@/store/progress-store"
import { executiveWeek1Sessions } from "@/data/executive-content"

export default function ExecutivePage() {
  const { isSessionCompleted } = useProgressStore()

  const handleStartSession = (sessionId: number) => {
    // For now, just mark as completed
    console.log(`Starting session ${sessionId}`)
  }

  const handleLiveSession = () => {
    // Open Google Meet link
    window.open('https://meet.google.com/new', '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Parcours Executive</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Semaine 1 : Les Fondations de la Confiance</p>
            </div>
            <Button onClick={handleLiveSession} variant="premium" size="lg" className="w-full sm:w-auto h-12">
              <Video className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Session Live avec Tuteur</span>
              <span className="sm:hidden">Session Live</span>
            </Button>
          </div>
          
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-900">
                <Target className="h-5 w-5 mr-2" />
                Objectif de la Semaine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-blue-800 text-base">
                À la fin de cette semaine, vous maîtriserez les interactions les plus fondamentales en anglais. 
                Vous serez capable de saluer, de vous présenter et de gérer une situation où vous ne comprenez pas 
                avec assurance et élégance. Nous ne visons pas la perfection, mais une communication efficace et immédiate.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Sessions */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Sessions de la Semaine</h2>
              <div className="flex items-center text-xs sm:text-sm text-gray-500">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                Total: 2h 10min
              </div>
            </div>
            
            <div className="space-y-4">
              {executiveWeek1Sessions.map((session) => (
                <SessionCard
                  key={session.id}
                  sessionNumber={session.id}
                  title={session.title}
                  description={session.description}
                  duration={session.duration}
                  objective={session.objective}
                  isCompleted={isSessionCompleted(session.id)}
                  onStart={() => handleStartSession(session.id)}
                  onLiveSession={handleLiveSession}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6 order-first lg:order-last">
            <ProgressTracker
              totalSessions={5}
              currentWeek={1}
            />
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Planning Flexible
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Sessions courtes</p>
                  <p className="text-gray-600">20-30 minutes par session</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Horaires flexibles</p>
                  <p className="text-gray-600">Matin, pause déjeuner, ou soir</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Reprogrammation</p>
                  <p className="text-gray-600">Jusqu'à 3 reports sans pénalité</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">Résultats Garantis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>✓ Saluer avec assurance</li>
                  <li>✓ Se présenter élégamment</li>
                  <li>✓ Gérer l'incompréhension</li>
                  <li>✓ Mener un dialogue social</li>
                  <li>✓ Commander une boisson</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}