"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { executiveTrackNotes, regularTrackNotes, type LessonNote } from "@/data/lesson-notes"

interface LessonNotesProps {
  sessionId: number
  track: 'regular' | 'executive'
}
export function LessonNotes({ sessionId, track }: LessonNotesProps) {
  const [isOpen, setIsOpen] = useState(false)
  const notes = track === 'regular' 
    ? regularTrackNotes[sessionId] || [] 
    : executiveTrackNotes[sessionId] || []

  if (notes.length === 0) return null

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
        >
          <BookOpen className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Lesson Notes</h2>
                    <p className="text-sm text-gray-600">Session {sessionId} - Deep Learning</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
                <div className="grid gap-6">
                  {notes.map((note, index) => (
                    <motion.div
                      key={note.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            {note.icon}
                            <span>{note.title}</span>
                          </CardTitle>
                          <CardDescription>{note.content}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {note.examples && (
                            <div>
                              <h4 className="font-semibold text-sm text-gray-900 mb-2">📝 Examples:</h4>
                              <ul className="space-y-1">
                                {note.examples.map((example, i) => (
                                  <li key={i} className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {note.phonetics && (
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <h4 className="font-semibold text-sm text-blue-900 mb-1">🔊 Phonetics:</h4>
                              <p className="text-sm text-blue-800 font-mono">{note.phonetics}</p>
                            </div>
                          )}

                          {note.synonyms && (
                            <div>
                              <h4 className="font-semibold text-sm text-gray-900 mb-2">🔄 Alternatives:</h4>
                              <div className="flex flex-wrap gap-2">
                                {note.synonyms.map((synonym, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {synonym}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {note.culturalTip && (
                            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                              <h4 className="font-semibold text-sm text-amber-900 mb-1">💡 Cultural Tip:</h4>
                              <p className="text-sm text-amber-800">{note.culturalTip}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}