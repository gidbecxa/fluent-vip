// Session 9 specific content - Complex descriptions and "th" pronunciation
export const session9GrammarRules = [
  {
    title: "Construction de Phrases Complètes",
    description: "Combine adjectif + nom + 'to have' pour des descriptions riches",
    color: "blue" as const,
    examples: [
      {
        english: "My brother → My tall brother → My tall brother has green eyes.",
        french: "Mon frère → Mon grand frère → Mon grand frère a les yeux verts.",
        explanation: "Construction pas à pas: 1) Personne 2) + Adjectif 3) + Description physique. Structure complète!",
        audioFile: "/audio/regular/week2/session9/tall-brother-construction.mp3"
      },
      {
        english: "My serious father has glasses.",
        french: "Mon père sérieux a des lunettes.",
        explanation: "Adjectif + nom + 'has' = description complète. 'Serious' décrit la personnalité, 'has glasses' décrit l'apparence.",
        audioFile: "/audio/regular/week2/session9/serious-father-has.mp3"
      },
      {
        english: "My kind mother has brown hair.",
        french: "Ma mère gentille a les cheveux bruns.",
        explanation: "Même structure: adjectif de personnalité + nom + description physique. Très naturel en anglais!",
        audioFile: "/audio/regular/week2/session9/kind-mother-has.mp3"
      }
    ]
  },
  {
    title: "Prononciation du Son 'TH'",
    description: "Maîtrise les deux sons 'th' - un défi pour les francophones!",
    color: "purple" as const,
    examples: [
      {
        english: "think /θ/ vs. sink",
        french: "penser vs. évier",
        explanation: "Son 'th' sourd /θ/: langue entre les dents, pas de vibration. 'Think' ≠ 'sink'!",
        audioFile: "/audio/regular/week2/session9/think-vs-sink.mp3"
      },
      {
        english: "this /ð/ vs. dis",
        french: "ceci vs. (mot inexistant)",
        explanation: "Son 'th' sonore /ð/: langue entre les dents, avec vibration. 'This' est très courant!",
        audioFile: "/audio/regular/week2/session9/this-vs-dis.mp3"
      },
      {
        english: "This is my brother. I think he is funny.",
        french: "C'est mon frère. Je pense qu'il est drôle.",
        explanation: "Phrase avec les deux sons 'th': 'This' /ð/ et 'think' /θ/. Pratique essentielle!",
        audioFile: "/audio/regular/week2/session9/this-brother-think.mp3"
      }
    ]
  },
  {
    title: "Révision Complète de la Semaine",
    description: "Combine TO BE, TO HAVE, adjectifs et descriptions",
    color: "green" as const,
    examples: [
      {
        english: "My smart sister has blue eyes and she is very kind.",
        french: "Ma sœur intelligente a les yeux bleus et elle est très gentille.",
        explanation: "Phrase complexe: adjectif + nom + 'has' + description + 'is' + adjectif. Toutes les structures!",
        audioFile: "/audio/regular/week2/session9/complex-description.mp3"
      },
      {
        english: "Does your funny brother have glasses?",
        french: "Est-ce que ton frère drôle a des lunettes ?",
        explanation: "Question avec adjectif + nom + 'have'. Structure interrogative complète!",
        audioFile: "/audio/regular/week2/session9/question-funny-brother.mp3"
      },
      {
        english: "My tall father doesn't have brown hair.",
        french: "Mon père grand n'a pas les cheveux bruns.",
        explanation: "Négation avec adjectif + nom + 'doesn't have'. Forme négative maîtrisée!",
        audioFile: "/audio/regular/week2/session9/negative-tall-father.mp3"
      }
    ]
  }
]

export const session9DialogueScenario = {
  id: "detailed-description-game",
  title: "Jeu de Description Détaillée",
  description: "Faire deviner une personne de sa famille avec des descriptions complètes",
  context: "Jeu interactif pour pratiquer les descriptions complexes",
  lines: [
    {
      speaker: "A" as const,
      text: "I'm thinking of someone in my family. Can you guess who?",
      translation: "Je pense à quelqu'un de ma famille. Peux-tu deviner qui ?",
      audioFile: "/audio/regular/week2/session9/dialogue-line1.mp3"
    },
    {
      speaker: "B" as const,
      text: "Okay! Give me some clues. Is it a man or a woman?",
      translation: "D'accord ! Donne-moi des indices. C'est un homme ou une femme ?",
      audioFile: "/audio/regular/week2/session9/dialogue-line2.mp3"
    },
    {
      speaker: "A" as const,
      text: "It's a woman. She is a young person. She has long, brown hair.",
      translation: "C'est une femme. C'est une jeune personne. Elle a de longs cheveux bruns.",
      audioFile: "/audio/regular/week2/session9/dialogue-line3.mp3"
    },
    {
      speaker: "B" as const,
      text: "Hmm, is she your sister? Does she have brown eyes too?",
      translation: "Hmm, c'est ta sœur ? A-t-elle aussi les yeux bruns ?",
      audioFile: "/audio/regular/week2/session9/dialogue-line4.mp3"
    },
    {
      speaker: "A" as const,
      text: "Yes, she does! And she is very smart and kind. She has glasses.",
      translation: "Oui, c'est ça ! Et elle est très intelligente et gentille. Elle a des lunettes.",
      audioFile: "/audio/regular/week2/session9/dialogue-line5.mp3"
    },
    {
      speaker: "B" as const,
      text: "Is it your sister? Your smart sister with glasses and brown hair?",
      translation: "C'est ta sœur ? Ta sœur intelligente avec des lunettes et les cheveux bruns ?",
      audioFile: "/audio/regular/week2/session9/dialogue-line6.mp3"
    },
    {
      speaker: "A" as const,
      text: "Yes, it is! Great job! Now it's your turn to describe someone.",
      translation: "Oui, c'est ça ! Bien joué ! Maintenant c'est ton tour de décrire quelqu'un.",
      audioFile: "/audio/regular/week2/session9/dialogue-line7.mp3"
    }
  ]
}