"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, CheckCircle, Clock, Target } from "lucide-react"

interface Week {
  id: number
  title: string
  description: string
  status: "completed" | "current" | "locked"
  sessions: number[]
}

interface WeekSelectorProps {
  currentWeek: number
  onWeekChange: (week: number) => void
}

const weeks: Week[] = [
  {
    id: 1,
    title: "Premiers Pas & Interactions",
    description: "Maîtrise du verbe \"To Be\" et présentations",
    status: "completed",
    sessions: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    title: "Se Décrire et Décrire les Autres",
    description: "Verbe \"To Have\" et description physique",
    status: "current",
    sessions: [6, 7, 8, 9, 10]
  }
]

export function WeekSelector({ currentWeek, onWeekChange }: WeekSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const currentWeekData = weeks.find(w => w.id === currentWeek)
  
  const getStatusColor = (status: Week["status"]) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-900 border-green-200"
      case "current": return "bg-blue-100 text-blue-900 border-blue-200"
      case "locked": return "bg-gray-100 text-gray-500 border-gray-200"
    }
  }
  
  const getStatusIcon = (status: Week["status"]) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4" />
      case "current": return <Clock className="h-4 w-4" />
      case "locked": return <Target className="h-4 w-4 opacity-50" />
    }
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full max-w-md justify-between bg-white border-2 hover:bg-gray-50"
      >
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            {getStatusIcon(currentWeekData?.status || "current")}
            <span className="font-semibold">Semaine {currentWeek}</span>
          </div>
          <span className="text-sm text-gray-600 hidden sm:inline">
            {currentWeekData?.title}
          </span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 z-50 mt-2 max-w-md"
          >
            <Card className="border-2 shadow-lg">
              <CardContent className="p-2">
                {weeks.map((week) => (
                  <Button
                    key={week.id}
                    variant="ghost"
                    onClick={() => {
                      onWeekChange(week.id)
                      setIsOpen(false)
                    }}
                    disabled={week.status === "locked"}
                    className={`w-full justify-start p-4 h-auto ${
                      week.id === currentWeek ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className="flex-shrink-0">
                        {getStatusIcon(week.status)}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold">Semaine {week.id}</span>
                          <Badge className={`${getStatusColor(week.status)} text-xs`}>
                            {week.status === "completed" ? "Terminée" : 
                             week.status === "current" ? "En cours" : "Verrouillée"}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">{week.title}</div>
                        <div className="text-xs text-gray-500">{week.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}