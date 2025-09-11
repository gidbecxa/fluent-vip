"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, X, Volume2, Lightbulb, Users, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface LessonNote {
  id: string
  title: string
  content: string
  examples?: string[]
  phonetics?: string
  synonyms?: string[]
  culturalTip?: string
  icon?: React.ReactNode
}

interface LessonNotesProps {
  sessionId: number
  track: 'regular' | 'executive'
}

const regularTrackNotes: Record<number, LessonNote[]> = {
  1: [
    {
      id: "hello-variations",
      title: "Beyond 'Hello' - Greeting Variations",
      content: "While 'Hello' is universal, native speakers use different greetings based on context and time.",
      examples: [
        "Hi - Casual, friendly (most common)",
        "Hey - Very casual, with friends",
        "Good morning - Formal, before 12pm",
        "Good afternoon - Formal, 12pm-6pm", 
        "Good evening - Formal, after 6pm"
      ],
      phonetics: "/həˈloʊ/ vs /haɪ/ - Notice the diphthong in 'Hi'",
      culturalTip: "Americans prefer 'Hi', British use 'Hello' more formally",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "to-be-mastery",
      title: "The Verb 'To Be' - Your English Foundation",
      content: "Master this verb and you unlock 60% of basic English communication.",
      examples: [
        "I am = I'm (always contract in speech)",
        "You are = You're (sounds like 'your')",
        "Negative: I'm not / You're not / You aren't"
      ],
      phonetics: "/aɪ æm/ → /aɪm/ - The 'a' in 'am' disappears in contractions",
      synonyms: ["I am = I'm", "You are = You're"],
      culturalTip: "Native speakers almost always use contractions in casual speech",
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      id: "pronunciation-secrets",
      title: "French vs English Sounds",
      content: "Key sounds that don't exist in French - master these for instant improvement.",
      examples: [
        "H sound: 'Hello' - breathe out, don't skip it!",
        "TH sound: 'Thank you' - tongue between teeth",
        "W sound: 'What' - round your lips like 'ou'"
      ],
      phonetics: "/h/ - aspirated, /θ/ - voiceless th, /w/ - rounded lips",
      culturalTip: "French accent is charming, but these sounds show real effort",
      icon: <Volume2 className="h-4 w-4" />
    },
    {
      id: "conversation-flow",
      title: "Natural Conversation Patterns",
      content: "Learn the rhythm of English conversations - it's like a dance!",
      examples: [
        "A: Hello! → B: Hi! (mirror the energy)",
        "A: How are you? → B: I'm fine, thanks. And you? (always return)",
        "A: I'm good, thanks! (close the loop)"
      ],
      culturalTip: "Always return the question - it shows interest and politeness",
      icon: <Globe className="h-4 w-4" />
    }
  ],
  2: [
    {
      id: "countries-nationalities",
      title: "Countries vs Nationalities - The Pattern",
      content: "Understanding the transformation patterns helps you guess correctly 90% of the time.",
      examples: [
        "France → French (change -ce to -ch)",
        "Spain → Spanish (add -ish)",
        "Italy → Italian (change -y to -ian)",
        "Germany → German (completely different!)",
        "Japan → Japanese (add -ese)"
      ],
      phonetics: "/frɛntʃ/ - French, /ˈspænɪʃ/ - Spanish, /ɪˈtæljən/ - Italian",
      culturalTip: "Never say 'I am France' - always 'I am French' or 'I am from France'",
      icon: <Globe className="h-4 w-4" />
    },
    {
      id: "question-formation",
      title: "Making Questions with 'To Be'",
      content: "Simple inversion rule: Statement → Question by switching positions.",
      examples: [
        "You are French → Are you French?",
        "He is from Spain → Is he from Spain?",
        "They are students → Are they students?"
      ],
      phonetics: "/ɑr ju/ - Are you (sounds like 'R U')",
      synonyms: ["Where are you from? = Where do you come from?"],
      culturalTip: "Rising intonation at the end makes it clearly a question",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      id: "negative-forms",
      title: "Saying 'No' Politely and Clearly",
      content: "Master negative forms to correct misunderstandings gracefully.",
      examples: [
        "I am not from Spain = I'm not from Spain",
        "You are not French = You're not French / You aren't French",
        "He is not American = He's not American / He isn't American"
      ],
      phonetics: "/aɪm nɑt/ - I'm not, /jʊr nɑt/ - You're not",
      culturalTip: "Always offer the correct information after saying 'no'",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "cultural-geography",
      title: "Geography in English-Speaking Countries",
      content: "How native speakers talk about origins and travel.",
      examples: [
        "I'm from Paris (city) vs I'm from France (country)",
        "I'm American vs I'm from America (both correct)",
        "I live in London vs I'm from London (different meanings)"
      ],
      culturalTip: "Asking 'Where are you from?' is normal and friendly - not intrusive like in France",
      icon: <Globe className="h-4 w-4" />
    }
  ]
}

export function LessonNotes({ sessionId, track }: LessonNotesProps) {
  const [isOpen, setIsOpen] = useState(false)
  const notes = track === 'regular' ? regularTrackNotes[sessionId] || [] : []

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