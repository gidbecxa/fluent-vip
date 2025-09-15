import { BookOpen, Volume2, Lightbulb, Users, Globe } from "lucide-react"

export interface LessonNote {
  id: string
  title: string
  content: string
  examples?: string[]
  phonetics?: string
  synonyms?: string[]
  culturalTip?: string
  icon?: React.ReactNode
}

export const executiveTrackNotes: Record<number, LessonNote[]> = {
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
  ],
  4: [
    {
      id: "social-ritual-mastery",
      title: "The Essential Social Ritual - 'How Are You?'",
      content: "Master the most common social exchange in English business culture - it's more ritual than question.",
      examples: [
        "How are you? - The universal social opener",
        "I'm fine, thank you. And you? - Standard positive response",
        "Very well, thank you - Slightly more formal alternative",
        "And you? - CRUCIAL reciprocation"
      ],
      phonetics: "/haʊ ɑr ju/ - How are you, /aɪm faɪn/ - I'm fine",
      culturalTip: "This is social ritual, not health inquiry - always respond positively in professional settings",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "conversation-assembly",
      title: "Complete Professional Conversation Architecture",
      content: "Combine all learned elements into a seamless, professional dialogue that impresses immediately.",
      examples: [
        "Good morning + My name is... + How are you? = Complete opener",
        "Hello + Nice to meet you + I'm fine, thank you = Perfect response",
        "Thank you + And you? + Very well = Elegant conclusion",
        "Full dialogue mastery = Executive presence"
      ],
      culturalTip: "The complete conversation shows cultural fluency and professional sophistication",
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      id: "reciprocation-importance",
      title: "The Power of 'And You?' - Social Intelligence",
      content: "This small phrase demonstrates emotional intelligence and cultural awareness in business settings.",
      examples: [
        "Without 'And you?' = Appears self-centered",
        "With 'And you?' = Shows social awareness",
        "Forgetting reciprocation = Cultural mistake",
        "Remembering reciprocation = Professional competence"
      ],
      culturalTip: "'And you?' is the difference between basic English and culturally intelligent English",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      id: "intonation-mastery",
      title: "The Melody of Professional Conversation",
      content: "Master the rhythm and intonation patterns that make your English sound naturally professional.",
      examples: [
        "Rising intonation on 'How are YOU?' - Shows genuine interest",
        "Falling intonation on 'Very well, thank you' - Shows confidence",
        "Pause before 'And you?' - Shows thoughtfulness",
        "Warm tone throughout - Shows approachability"
      ],
      culturalTip: "Professional English is about melody and rhythm, not just words - this creates executive presence",
      icon: <Globe className="h-4 w-4" />
    }
  ],
  5: [
    {
      id: "transaction-mastery",
      title: "Your First Professional Transaction",
      content: "Master the art of polite requests using 'I would like' - the executive's preferred formula for all professional requests.",
      examples: [
        "I would like a coffee, please - Professional beverage order",
        "I would like a tea, please - Alternative with same elegance",
        "I would like a glass of water, please - Simple but sophisticated",
        "I'd like... - Contracted form for casual professional settings"
      ],
      phonetics: "/aɪ wʊd laɪk/ - I would like, /pliːz/ - please",
      culturalTip: "'I would like' vs 'I want' - this distinction immediately marks your level of linguistic sophistication",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "politeness-hierarchy",
      title: "The Hierarchy of Professional Politeness",
      content: "Understanding the subtle gradations of politeness that executives must master for different professional contexts.",
      examples: [
        "I want = Direct, potentially rude",
        "I need = Urgent, but still demanding",
        "Can I have = Casual, appropriate with colleagues",
        "I would like = Professional, respectful, executive-level"
      ],
      culturalTip: "Executives always choose the most respectful option - it shows leadership and cultural intelligence",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      id: "transaction-flow",
      title: "Complete Professional Transaction Architecture",
      content: "The full sequence of a professional transaction that demonstrates complete mastery of Week 1 elements.",
      examples: [
        "Greeting: Good morning",
        "Request: I would like a coffee, please",
        "Acknowledgment: Here you are",
        "Gratitude: Thank you very much",
        "Complete flow = Professional competence"
      ],
      culturalTip: "This complete sequence shows you understand professional English protocols from start to finish",
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      id: "daily-integration",
      title: "Anchoring Learning in Daily Professional Life",
      content: "Techniques for integrating English learning into your daily executive routine for maximum retention.",
      examples: [
        "Mental rehearsal before coffee breaks",
        "English self-talk during beverage preparation",
        "Professional phrase practice in private moments",
        "Confidence building through daily repetition"
      ],
      culturalTip: "Successful executives integrate learning seamlessly into their daily routines - this ensures mastery",
      icon: <Globe className="h-4 w-4" />
    }
  ]
}

export const regularTrackNotes: Record<number, LessonNote[]> = {
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
  ],
  3: [
    {
      id: "third-person-mastery",
      title: "He, She, It - The Social Pronouns",
      content: "Master these pronouns and you can talk about anyone and anything with confidence.",
      examples: [
        "He is... (for males: He is my brother)",
        "She is... (for females: She is my teacher)",
        "It is... (for things/places: It is my phone)",
        "Who is he/she? (to ask about someone)"
      ],
      phonetics: "/hi ɪz/ - He is, /ʃi ɪz/ - She is, /ɪt ɪz/ - It is",
      culturalTip: "English speakers use he/she much more than French - even for pets!",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "introduction-skills",
      title: "Introducing People Like a Pro",
      content: "The secret to being the most popular person at any party - master introductions!",
      examples: [
        "This is my friend [Name] - Basic introduction",
        "This is [Name]. He/She is from [Country] - With details",
        "Meet my friend [Name] - Casual style",
        "[Name], this is [Name] - Formal introduction"
      ],
      culturalTip: "Always add something positive when introducing: 'This is Sarah, she's amazing!'",
      icon: <Globe className="h-4 w-4" />
    },
    {
      id: "celebrity-descriptions",
      title: "Describing People and Places",
      content: "Turn everyday descriptions into engaging conversations using he/she/it patterns.",
      examples: [
        "Celebrity: He is Brad Pitt. He is American. He is an actor.",
        "Friend: She is Marie. She is from Lyon. She is a student.",
        "Place: It is the Louvre. It is in Paris. It is famous."
      ],
      phonetics: "Stress pattern: HE is, SHE is, IT is - emphasize the pronoun",
      culturalTip: "Native speakers love details - don't just say 'He is nice', say 'He is really funny!'",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      id: "social-media-english",
      title: "Gen Z Social Media Descriptions",
      content: "How to describe your squad, your city, and your life in perfect English for social media.",
      examples: [
        "Instagram caption: 'This is my bestie. She is incredible!'",
        "Story description: 'He is my brother. He is so funny!'",
        "Location tag: 'It is Paris. It is beautiful today!'",
        "Friend tag: 'She is my partner in crime!'"
      ],
      culturalTip: "Social media English is more personal - use 'amazing', 'incredible', 'awesome'!",
      icon: <BookOpen className="h-4 w-4" />
    }
  ],
  4: [
    {
      id: "plural-mastery",
      title: "We Are, They Are - Completing the 'To Be' Puzzle",
      content: "Master the final pieces of 'To Be' and you can talk about groups, teams, and collections with confidence.",
      examples: [
        "We are students - You + others together",
        "They are friends - A group of people",
        "We are not teachers - Negative plural form",
        "Are they French? - Question with plural"
      ],
      phonetics: "/wi ɑr/ - We are, /ðeɪ ɑr/ - They are (sounds like 'way are', 'they are')",
      culturalTip: "English speakers love talking about groups - family, friends, teams. Master 'we' and 'they'!",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "object-identification",
      title: "What Is It? The Art of Naming Everything",
      content: "Turn your environment into your English classroom - learn to identify and describe everything around you.",
      examples: [
        "What is it? It is a book - Singular identification",
        "What are they? They are pens - Plural identification",
        "This is my laptop - Presenting singular objects",
        "These are my headphones - Presenting plural objects"
      ],
      phonetics: "/wʌt ɪz ɪt/ - What is it, /wʌt ɑr ðeɪ/ - What are they",
      culturalTip: "Native speakers constantly identify objects in conversation - it's natural and useful!",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      id: "singular-plural-rules",
      title: "Singular vs Plural - The English Logic",
      content: "Understanding when to use 'is' vs 'are' is crucial for sounding natural in English.",
      examples: [
        "It is a pen (singular) → They are pens (plural)",
        "This is my book → These are my books",
        "That is a chair → Those are chairs",
        "The phone is new → The phones are new"
      ],
      synonyms: ["This = singular near", "These = plural near", "That = singular far", "Those = plural far"],
      culturalTip: "English speakers notice singular/plural mistakes immediately - but they're patient with learners!",
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      id: "room-tour-english",
      title: "Social Media English - Room Tours & Object Descriptions",
      content: "Perfect your English for social media content creation - room tours, outfit posts, and lifestyle content.",
      examples: [
        "These are my favorite books - Instagram caption style",
        "This is my study space. It is cozy! - YouTube description",
        "We are ready for class! - Group photo caption",
        "They are my art supplies - Creative content"
      ],
      culturalTip: "Social media English is more enthusiastic - use 'amazing', 'perfect', 'love' frequently!",
      icon: <Globe className="h-4 w-4" />
    }
  ],
  5: [
    {
      id: "week-integration",
      title: "Week 1 Complete Integration - The Big Picture",
      content: "See how all Week 1 elements combine into natural, flowing conversations that sound authentically English.",
      examples: [
        "Session 1: Hello, I'm... + Session 2: Where are you from? = Perfect introduction",
        "Session 3: He/She is... + Session 4: We are... = Complete social description",
        "All sessions together = Fluent international student conversation",
        "Integration = Real English confidence"
      ],
      culturalTip: "Native speakers naturally combine all these elements - now you can too!",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "international-networking",
      title: "International Student Social Skills",
      content: "Master the art of making friends in international settings - essential for Gen Z global connections.",
      examples: [
        "Hi everyone! I'm [Name] - Group introduction energy",
        "This is my friend... - Social connector role",
        "We are from France - Proud cultural representation",
        "It was nice meeting you! - Perfect conversation closer"
      ],
      culturalTip: "International students bond over shared English learning - embrace the community!",
      icon: <Globe className="h-4 w-4" />
    },
    {
      id: "party-english",
      title: "Social Event English - Party & Mixer Mastery",
      content: "Navigate international social events with confidence using your complete Week 1 toolkit.",
      examples: [
        "Arrival: Hi everyone! I'm... - Make your entrance",
        "Mingling: Where are you from? Who is he? - Keep conversations flowing",
        "Introductions: This is my friend... - Be the social connector",
        "Departure: It was nice meeting you! - Leave a great impression"
      ],
      culturalTip: "International parties are perfect English practice - everyone's learning together!",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      id: "creative-writing",
      title: "Your First Creative English Writing",
      content: "Transform your speaking skills into writing skills with your first English paragraph creation.",
      examples: [
        "Today, I was at a party - Simple past introduction",
        "I met Carlos. He is from Spain - Character introduction",
        "Anna and Ben are from Germany - Group description",
        "It was fun! - Personal opinion and conclusion"
      ],
      culturalTip: "Writing reinforces speaking - your first English paragraph is a huge milestone!",
      icon: <BookOpen className="h-4 w-4" />
    }
  ]
}