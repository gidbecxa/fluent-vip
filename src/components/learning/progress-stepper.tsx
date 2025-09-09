"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle, ArrowRight } from "lucide-react"

interface Step {
  id: number
  title: string
  completed: boolean
  current: boolean
}

interface ProgressStepperProps {
  steps: Step[]
  onStepClick: (stepId: number) => void
}

export function ProgressStepper({ steps, onStepClick }: ProgressStepperProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Progression</h3>
        <span className="text-xs sm:text-sm text-gray-500">
          {steps.filter(s => s.completed).length}/{steps.length}
        </span>
      </div>
      
      <div className="space-y-1 sm:space-y-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center p-2 sm:p-3 rounded-lg cursor-pointer transition-colors touch-manipulation ${
              step.current 
                ? 'bg-blue-50 border border-blue-200' 
                : step.completed 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-gray-50 border border-gray-200 active:bg-gray-100'
            }`}
            onClick={() => onStepClick(step.id)}
          >
            <div className="flex-shrink-0 mr-2 sm:mr-3">
              {step.completed ? (
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              ) : step.current ? (
                <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-blue-600 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-pulse" />
                </div>
              ) : (
                <Circle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className={`text-xs sm:text-sm font-medium truncate ${
                step.current ? 'text-blue-900' : 
                step.completed ? 'text-green-900' : 'text-gray-700'
              }`}>
                {step.title}
              </div>
            </div>
            
            {step.current && (
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 animate-pulse flex-shrink-0" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}