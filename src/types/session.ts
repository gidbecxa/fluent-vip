export interface KeyPhrase {
  english: string
  pronunciation: string
  context: string
  audioFile: string
}

export interface RolePlayScenario {
  id: number
  title: string
  description: string
  yourLine: string
  context: string
}

export interface FlippedClassroom {
  videoUrl: string
  videoTitle: string
  videoDuration: string
  videoDescription: string
}

export interface Gamification {
  xpReward: number
  badges: string[]
  challenges: string[]
}

export interface DigitalTool {
  name: string
  description: string
  link: string
}

export interface SessionContent {
  title: string
  objective: string
  duration: number
  keyPhrases: KeyPhrase[]
  rolePlayScenarios: RolePlayScenario[]
  culturalNote: string
  vipTip: string
  practice: string
  practiceResources: string[]
  interactiveTitle: string
  interactiveDescription: string
  flippedClassroom?: FlippedClassroom
  gamification?: Gamification
  digitalTools?: DigitalTool[]
}

export interface SessionData {
  [key: number]: SessionContent
}