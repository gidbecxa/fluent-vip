import { z } from 'zod'

// Zod schemas for runtime validation
const KeyPhraseSchema = z.object({
  english: z.string().min(1),
  pronunciation: z.string().min(1),
  context: z.string().min(1),
  audioFile: z.string().optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional()
})

const DialogueLineSchema = z.object({
  speaker: z.enum(['A', 'B', 'narrator']),
  text: z.string(),
  translation: z.string(),
  audioFile: z.string().optional(),
  emphasis: z.array(z.string()).optional()
})

const DialogueSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  context: z.string(),
  lines: z.array(DialogueLineSchema)
})

const ScenarioSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  yourLine: z.string(),
  context: z.string()
})

const ActivitySchema = z.object({
  id: z.string(),
  type: z.enum(['rolePlay', 'interactive', 'quiz', 'pronunciation', 'listening']),
  title: z.string(),
  description: z.string(),
  instructions: z.string().optional(),
  scenarios: z.array(ScenarioSchema).optional()
})

const GrammarExampleSchema = z.object({
  english: z.string(),
  french: z.string(),
  explanation: z.string(),
  audioFile: z.string().optional(),
  isCorrect: z.boolean().optional()
})

const GrammarRuleSchema = z.object({
  title: z.string(),
  description: z.string(),
  color: z.enum(['blue', 'purple', 'green', 'orange', 'red']).optional(),
  examples: z.array(GrammarExampleSchema)
})

const CulturalNoteSchema = z.object({
  type: z.enum(['cultural', 'vipTip', 'genZTip']),
  content: z.string(),
  title: z.string().optional()
})

const DigitalToolSchema = z.object({
  name: z.string(),
  description: z.string(),
  link: z.string().url()
})

const PracticeExerciseSchema = z.object({
  description: z.string(),
  resources: z.array(z.string()),
  digitalTools: z.array(DigitalToolSchema).optional()
})

const FlippedClassroomSchema = z.object({
  videoUrl: z.string().url(),
  videoTitle: z.string(),
  videoDuration: z.string(),
  videoDescription: z.string()
})

const InteractiveElementSchema = z.object({
  type: z.enum(['challenge', 'game', 'quiz', 'simulation']),
  title: z.string(),
  description: z.string()
})

const MultimediaSchema = z.object({
  flippedClassroom: FlippedClassroomSchema.optional(),
  interactiveElements: z.array(InteractiveElementSchema).optional()
})

const GamificationSchema = z.object({
  xpReward: z.number().min(0).optional(),
  badges: z.array(z.string()).optional(),
  challenges: z.array(z.string()).optional()
})

const SessionContentSchema = z.object({
  id: z.number().min(1),
  title: z.string().min(1),
  objective: z.string().min(1),
  duration: z.number().min(1),
  track: z.enum(['regular', 'executive']),
  week: z.number().min(1),
  keyPhrases: z.array(KeyPhraseSchema).optional(),
  dialogues: z.array(DialogueSchema).optional(),
  activities: z.array(ActivitySchema).optional(),
  grammarRules: z.array(GrammarRuleSchema).optional(),
  culturalNotes: z.array(CulturalNoteSchema).optional(),
  practiceExercises: z.array(PracticeExerciseSchema).optional(),
  multimedia: MultimediaSchema.optional(),
  gamification: GamificationSchema.optional()
})

// Type exports
export type KeyPhrase = z.infer<typeof KeyPhraseSchema>
export type DialogueLine = z.infer<typeof DialogueLineSchema>
export type Dialogue = z.infer<typeof DialogueSchema>
export type Scenario = z.infer<typeof ScenarioSchema>
export type Activity = z.infer<typeof ActivitySchema>
export type GrammarExample = z.infer<typeof GrammarExampleSchema>
export type GrammarRule = z.infer<typeof GrammarRuleSchema>
export type CulturalNote = z.infer<typeof CulturalNoteSchema>
export type DigitalTool = z.infer<typeof DigitalToolSchema>
export type PracticeExercise = z.infer<typeof PracticeExerciseSchema>
export type FlippedClassroom = z.infer<typeof FlippedClassroomSchema>
export type InteractiveElement = z.infer<typeof InteractiveElementSchema>
export type Multimedia = z.infer<typeof MultimediaSchema>
export type Gamification = z.infer<typeof GamificationSchema>
export type SessionContent = z.infer<typeof SessionContentSchema>

// Content Manager Class
export class ContentManager {
  private static instance: ContentManager
  private contentCache = new Map<string, SessionContent>()
  private trackMetadata = new Map<string, unknown>()

  private constructor() {}

  static getInstance(): ContentManager {
    if (!ContentManager.instance) {
      ContentManager.instance = new ContentManager()
    }
    return ContentManager.instance
  }

  /**
   * Load session content with validation
   */
  async loadSession(track: 'regular' | 'executive', sessionId: number): Promise<SessionContent | null> {
    const cacheKey = `${track}-${sessionId}`
    
    if (this.contentCache.has(cacheKey)) {
      return this.contentCache.get(cacheKey)!
    }

    try {
      const response = await fetch(`/api/content?track=${track}&sessionId=${sessionId}&type=session`)
      
      if (!response.ok) {
        console.warn(`Session content not found: ${track}/session-${sessionId}`)
        return null
      }

      const rawContent = await response.json()
      const validatedContent = SessionContentSchema.parse(rawContent)
      
      this.contentCache.set(cacheKey, validatedContent)
      return validatedContent
    } catch (error) {
      console.error(`Error loading session content: ${track}/session-${sessionId}`, error)
      return null
    }
  }

  /**
   * Load track metadata
   */
  async loadTrackMetadata(track: 'regular' | 'executive'): Promise<unknown> {
    if (this.trackMetadata.has(track)) {
      return this.trackMetadata.get(track)
    }

    try {
      const response = await fetch(`/api/content?track=${track}&type=metadata`)
      if (!response.ok) {
        throw new Error(`Failed to load ${track} track metadata`)
      }

      const metadata = await response.json()
      this.trackMetadata.set(track, metadata)
      return metadata
    } catch (error) {
      console.error(`Error loading track metadata: ${track}`, error)
      return null
    }
  }

  /**
   * Get all sessions for a track
   */
  async getTrackSessions(track: 'regular' | 'executive'): Promise<SessionContent[]> {
    const metadata = await this.loadTrackMetadata(track) as any
    if (!metadata?.sessions) {
      return []
    }

    const sessions: SessionContent[] = []
    for (const sessionId of metadata.sessions) {
      const session = await this.loadSession(track, sessionId)
      if (session) {
        sessions.push(session)
      }
    }

    return sessions
  }

  /**
   * Validate content against schema
   */
  validateSessionContent(content: unknown): SessionContent {
    return SessionContentSchema.parse(content)
  }

  /**
   * Clear cache (useful for development)
   */
  clearCache(): void {
    this.contentCache.clear()
    this.trackMetadata.clear()
  }

  /**
   * Preload content for better performance
   */
  async preloadTrack(track: 'regular' | 'executive'): Promise<void> {
    const metadata = await this.loadTrackMetadata(track) as any
    if (!metadata?.sessions) {
      return
    }

    // Load all sessions in parallel
    const loadPromises = metadata.sessions.map((sessionId: number) => 
      this.loadSession(track, sessionId)
    )

    await Promise.all(loadPromises)
  }
}

// Export singleton instance
export const contentManager = ContentManager.getInstance()

// Utility functions
export function createKeyPhrase(
  english: string,
  pronunciation: string,
  context: string,
  audioFile?: string
): KeyPhrase {
  return {
    english,
    pronunciation,
    context,
    audioFile
  }
}

export function createDialogue(
  id: string,
  title: string,
  description: string,
  context: string,
  lines: DialogueLine[]
): Dialogue {
  return {
    id,
    title,
    description,
    context,
    lines
  }
}

export function createActivity(
  id: string,
  type: Activity['type'],
  title: string,
  description: string,
  scenarios?: Scenario[]
): Activity {
  return {
    id,
    type,
    title,
    description,
    scenarios
  }
}

export function createGrammarRule(
  title: string,
  description: string,
  examples: GrammarExample[],
  color?: GrammarRule['color']
): GrammarRule {
  return {
    title,
    description,
    examples,
    color
  }
}