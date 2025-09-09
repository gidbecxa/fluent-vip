"use client"

import { Button } from "@/components/ui/button"
import { Video, Menu } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">F</span>
          </div>
          <span className="font-semibold text-lg sm:text-xl text-gray-900">FluentVIP</span>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Video className="h-4 w-4 mr-2" />
            Live Session
          </Button>
          <Button variant="outline" size="sm" className="sm:hidden px-2">
            <Video className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.header>
  )
}