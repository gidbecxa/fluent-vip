"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Clock, BookOpen, Users, Video, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface WeekObjective {
  title: string
  description: string
  skills: string[]
}

interface LearningMethod {
  name: string
  description: string
  icon: string
  examples: string[]
}

interface WeekOverviewProps {
  weekNumber: number
  title: string
  objective: WeekObjective
  methods: LearningMethod[]
  totalHours: number
  sessionsCount: number
}

export function WeekOverview({ 
  weekNumber, 
  title, 
  objective, 
  methods, 
  totalHours, 
  sessionsCount 
}: WeekOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Week Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl font-bold text-white text-xl mb-4">
          W{weekNumber}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {totalHours}h total
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {sessionsCount} sessions
          </div>
        </div>
      </motion.div>

      {/* Main Objective */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-900">
              <Target className="h-5 w-5 mr-2" />
              {objective.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 mb-4">{objective.description}</p>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">🎯 Compétences à acquérir :</h4>
              <div className="flex flex-wrap gap-2">
                {objective.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Learning Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Méthodes d'Apprentissage Gen Z
            </CardTitle>
            <CardDescription>
              Approches modernes et interactives adaptées à ta génération
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {methods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{method.name}</h4>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                  <div className="ml-11">
                    <div className="text-xs text-gray-500 mb-1">Exemples :</div>
                    <div className="flex flex-wrap gap-1">
                      {method.examples.map((example, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Success Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Résultats Mesurables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">100%</div>
                <div className="text-green-600">Participation Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">5/5</div>
                <div className="text-green-600">Sessions Complétées</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">A1+</div>
                <div className="text-green-600">Niveau Atteint</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          Commencer la Semaine {weekNumber}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-gray-600 mt-2">
          Prêt à transformer ton anglais ? C'est parti ! 🚀
        </p>
      </motion.div>
    </div>
  )
}