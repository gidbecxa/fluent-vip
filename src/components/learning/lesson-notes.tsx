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

const executiveTrackNotes: Record<number, LessonNote[]> = {
  1: [
    {
      id: "politeness-mastery",
      title: "The 5 Pillars of Professional Politeness",
      content: "These expressions unlock 80% of polite interactions in business English. Master these and you command respect.",
      examples: [
        "Hello - Universal, neutral, always appropriate",
        "Thank you - Foundation of gratitude (add 'very much' for emphasis)",
        "Please - Essential for any request",
        "Excuse me - For attention, passing by, interrupting politely",
        "Good morning/afternoon/evening - Time-specific formality"
      ],
      phonetics: "/həˈloʊ/ - Hello, /θæŋk ju/ - Thank you, /pliːz/ - Please",
      culturalTip: "'Excuse me' (before) vs 'Sorry' (after) - This distinction marks sophistication",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "pronunciation-excellence",
      title: "Executive Pronunciation Standards",
      content: "Clear pronunciation projects confidence and competence in professional settings.",
      examples: [
        "Hello: /həˈloʊ/ - Aspirated H, clear vowels",
        "Thank: /θæŋk/ - Tongue between teeth for 'th'",
        "Please: /pliːz/ - Long 'ee' sound, soft 's'",
        "Excuse: /ɪkˈskjuːz/ - Stress on second syllable"
      ],
      phonetics: "Focus on clear consonants and proper stress patterns",
      culturalTip: "Professional English values clarity over accent - speak slowly and distinctly",
      icon: <Volume2 className="h-4 w-4" />
    },
    {
      id: "business-context",
      title: "Professional Context Applications",
      content: "How to deploy these phrases in real business situations with maximum impact.",
      examples: [
        "Entering a meeting: 'Good morning, everyone'",
        "Receiving documents: 'Thank you very much'",
        "Getting attention: 'Excuse me, may I...'",
        "Making requests: 'Could you please...'"
      ],
      culturalTip: "Combine phrases for enhanced politeness: 'Excuse me, could you please...'",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      id: "confidence-building",
      title: "Building Executive Presence",
      content: "Body language and tone that complement your English for maximum professional impact.",
      examples: [
        "Eye contact during greetings shows confidence",
        "Slight pause before speaking shows thoughtfulness",
        "Clear, measured pace demonstrates control",
        "Smile with 'Nice to meet you' creates warmth"
      ],
      culturalTip: "In Anglo-Saxon cultures, confident communication is expected from executives",
      icon: <Globe className="h-4 w-4" />
    }
  ],
  2: [
    {
      id: "introduction-mastery",
      title: "Executive-Level Introductions",
      content: "Professional self-presentation that establishes credibility and opens doors.",
      examples: [
        "My name is [Name] - Standard, professional",
        "I'm [Name] - More casual but still appropriate",
        "What is your name? - Formal inquiry",
        "Nice to meet you - Essential closing phrase"
      ],
      phonetics: "/maɪ neɪm ɪz/ - My name is, /naɪs tu miːt ju/ - Nice to meet you",
      culturalTip: "Always maintain eye contact during introductions - it signals trustworthiness",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "conversation-flow",
      title: "Professional Conversation Architecture",
      content: "The structure of business introductions follows predictable, learnable patterns.",
      examples: [
        "Opening: Hello/Good morning",
        "Introduction: My name is...",
        "Inquiry: What is your name?",
        "Acknowledgment: Nice to meet you",
        "Reciprocation: Nice to meet you too"
      ],
      culturalTip: "The 'conversation chain' creates smooth, professional interactions",
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      id: "cultural-sophistication",
      title: "Anglo-Saxon Business Culture",
      content: "Understanding the cultural context behind professional English interactions.",
      examples: [
        "Eye contact = confidence and honesty",
        "Firm handshake = professionalism",
        "'Nice to meet you' = genuine interest",
        "Reciprocating questions = social awareness"
      ],
      culturalTip: "These rituals build trust faster than credentials in Anglo-Saxon business culture",
      icon: <Globe className="h-4 w-4" />
    },
    {
      id: "advanced-combinations",
      title: "Combining Session 1 & 2 Elements",
      content: "Sophisticated phrase combinations that demonstrate advanced English competence.",
      examples: [
        "Excuse me, what is your name, please?",
        "Good morning. My name is... Nice to meet you.",
        "Thank you for the introduction. I'm...",
        "Please, allow me to introduce myself..."
      ],
      culturalTip: "Layering politeness phrases shows mastery and earns immediate respect",
      icon: <Lightbulb className="h-4 w-4" />
    }
  ],
  3: [
    {
      id: "incomprehension-mastery",
      title: "Managing Incomprehension with Executive Grace",
      content: "Transform potential embarrassment into professional competence with these essential phrases.",
      examples: [
        "I'm sorry, I don't understand - Polite acknowledgment",
        "Could you repeat, please? - Direct, respectful request",
        "Could you speak more slowly, please? - Rhythm control tool"
      ],
      phonetics: "/aɪm ˈsɔri/ - I'm sorry, /kʊd ju rɪˈpit/ - Could you repeat",
      culturalTip: "Asking for clarification shows engagement, not weakness - it's expected in professional settings",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "professional-control",
      title: "Taking Control of Professional Conversations",
      content: "These phrases give you power to manage any conversation at your preferred pace.",
      examples: [
        "'Could you...' - Polite but firm control",
        "'Please' - Maintains respect while asserting needs",
        "'I'm sorry' - Professional acknowledgment, not apology"
      ],
      culturalTip: "In Anglo-Saxon business culture, controlling conversation pace is seen as leadership",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      id: "stress-management",
      title: "Linguistic Stress Management Techniques",
      content: "Professional strategies for maintaining composure when language becomes challenging.",
      examples: [
        "Pause before responding - Shows thoughtfulness",
        "Maintain eye contact - Projects confidence",
        "Use calm, measured tone - Demonstrates control",
        "Thank after clarification - Shows professionalism"
      ],
      culturalTip: "Calm confidence in difficult moments marks true executive presence",
      icon: <Globe className="h-4 w-4" />
    },
    {
      id: "advanced-combinations",
      title: "Sophisticated Clarification Strategies",
      content: "Combine phrases for maximum professional impact and elegant problem-solving.",
      examples: [
        "Excuse me, I'm sorry, I don't understand",
        "Could you repeat that more slowly, please?",
        "I'm sorry, could you speak more slowly? Thank you.",
        "Excuse me, could you repeat, please? I want to be sure I understand."
      ],
      culturalTip: "Layering politeness with purpose shows sophisticated language mastery",
      icon: <BookOpen className="h-4 w-4" />
    }
  ]
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