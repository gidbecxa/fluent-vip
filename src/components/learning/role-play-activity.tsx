"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Users, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface Scenario {
  id: number
  title: string
  description: string
  yourLine: string
  context: string
}

interface RolePlayActivityProps {
  scenarios: Scenario[]
  title: string
  description: string
}

export function RolePlayActivity({ scenarios, title, description }: RolePlayActivityProps) {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([])

  const handleComplete = (scenarioId: number) => {
    if (!completedScenarios.includes(scenarioId)) {
      setCompletedScenarios([...completedScenarios, scenarioId])
    }
  }

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center text-green-900">
            <Users className="h-5 w-5 mr-2" />
            {title}
          </CardTitle>
          <CardDescription className="text-green-800">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-4">
        {scenarios.map((scenario, index) => (
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`transition-all duration-200 ${
              index === currentScenario 
                ? 'ring-2 ring-blue-500 shadow-lg' 
                : completedScenarios.includes(scenario.id)
                ? 'bg-green-50 border-green-200'
                : 'opacity-60'
            }`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3 ${
                      completedScenarios.includes(scenario.id)
                        ? 'bg-green-100 text-green-700'
                        : index === currentScenario
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {completedScenarios.includes(scenario.id) ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        scenario.id
                      )}
                    </div>
                    {scenario.title}
                  </CardTitle>
                </div>
                <CardDescription>{scenario.description}</CardDescription>
              </CardHeader>
              
              {index === currentScenario && (
                <CardContent>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="text-sm font-semibold text-blue-700 mb-2">
                      Votre réplique :
                    </div>
                    <div className="text-lg font-bold text-blue-900">
                      "{scenario.yourLine}"
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Contexte :</strong> {scenario.context}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button 
                      onClick={() => handleComplete(scenario.id)}
                      className="flex-1 h-12 sm:h-10"
                      size="lg"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Pratiquer
                    </Button>
                    
                    {completedScenarios.includes(scenario.id) && (
                      <Button 
                        onClick={nextScenario}
                        variant="outline"
                        disabled={currentScenario >= scenarios.length - 1}
                        className="h-12 sm:h-10 sm:w-auto w-full"
                        size="lg"
                      >
                        Suivant
                      </Button>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}