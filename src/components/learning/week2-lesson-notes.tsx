"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Lightbulb, Star, CheckCircle, Download, Share2, Heart, Zap, Target, Users } from "lucide-react"

interface Week2LessonNotesProps {
  title: string
  culturalNote: string
  vipTip: string
  practice: string
  practiceResources: string[]
  onComplete?: () => void
}

export function Week2LessonNotes({ 
  title, 
  culturalNote, 
  vipTip, 
  practice, 
  practiceResources, 
  onComplete 
}: Week2LessonNotesProps) {
  const [activeTab, setActiveTab] = useState<"cultural" | "vip" | "practice">("cultural")
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    if (onComplete) {
      onComplete()
    }
  }

  const tabs = [
    {
      id: "cultural" as const,
      title: "Note Culturelle",
      icon: Users,
      color: "blue",
      content: culturalNote
    },
    {
      id: "vip" as const,
      title: "Conseil VIP",
      icon: Star,
      color: "purple",
      content: vipTip
    },
    {
      id: "practice" as const,
      title: "Mission Pratique",
      icon: Target,
      color: "green",
      content: practice
    }
  ]

  const getTabColors = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive 
        ? "bg-blue-100 text-blue-900 border-blue-300" 
        : "bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-700",
      purple: isActive 
        ? "bg-purple-100 text-purple-900 border-purple-300" 
        : "bg-gray-50 text-gray-600 hover:bg-purple-50 hover:text-purple-700",
      green: isActive 
        ? "bg-green-100 text-green-900 border-green-300" 
        : "bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-green-700"
    }
    return colors[color as keyof typeof colors]
  }

  const getContentColors = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-cyan-50 border-blue-200",
      purple: "from-purple-50 to-pink-50 border-purple-200",
      green: "from-green-50 to-emerald-50 border-green-200"
    }
    return colors[color as keyof typeof colors]
  }

  const activeTabData = tabs.find(tab => tab.id === activeTab)!

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Notes de Leçon - {title}
        </CardTitle>
        <p className="text-gray-600 mt-2">
          Résumé essentiel pour retenir et appliquer ce que tu as appris
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="outline"
              onClick={() => setActiveTab(tab.id)}
              className={`${getTabColors(tab.color, activeTab === tab.id)} transition-all duration-200`}
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.title}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className={`bg-gradient-to-br ${getContentColors(activeTabData.color)} border-2`}>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <activeTabData.icon className="h-5 w-5 mr-3" />
                  {activeTabData.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg leading-relaxed text-gray-800">
                  {activeTabData.content}
                </div>

                {/* Practice Resources for Practice Tab */}
                {activeTab === "practice" && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      Ressources pour t'entraîner
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {practiceResources.map((resource, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 bg-white/60 rounded-lg border border-green-200"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm font-medium text-green-900">
                            {resource}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Quick Summary Card */}
        <Card className="bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-200">
          <CardContent className="p-6">
            <h3 className="font-bold text-indigo-900 mb-4 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2" />
              Résumé Express - À Retenir Absolument
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-indigo-900">
                    <strong>TO HAVE</strong> = pour ce que tu POSSÈDES (yeux, cheveux, objets)
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-indigo-900">
                    <strong>TO BE</strong> = pour ce que tu ES (état, identité, nationalité)
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-purple-900">
                    "I have brown eyes" ✅ (pas "I am brown eyes")
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-purple-900">
                    "He/She HAS" (avec S!) pour la 3ème personne
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
          <div className="flex-1 flex gap-3">
            <Button variant="outline" className="flex-1 sm:flex-none">
              <Download className="h-4 w-4 mr-2" />
              Télécharger PDF
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none">
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </Button>
          </div>
          
          {!isCompleted ? (
            <Button
              onClick={handleComplete}
              className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white"
            >
              <Heart className="h-4 w-4 mr-2" />
              J'ai bien noté!
            </Button>
          ) : (
            <Badge className="bg-green-100 text-green-900 border-green-200 px-4 py-2 text-base">
              <CheckCircle className="h-4 w-4 mr-2" />
              Notes sauvegardées!
            </Badge>
          )}
        </div>

        {/* Completion Message */}
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">
              Notes bien enregistrées! 📝
            </h3>
            <p className="text-green-800">
              Tu peux maintenant passer à la session suivante. Ces notes resteront disponibles dans ton espace personnel.
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}