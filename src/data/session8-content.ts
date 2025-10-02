// Session 8 specific content - Adjective placement and personality
export const session8GrammarRules = [
  {
    title: "ADJECTIVE + NOUN - La Règle d'Or",
    description: "En anglais, l'adjectif se place AVANT le nom (différent du français)",
    color: "blue" as const,
    examples: [
      {
        english: "a black cat",
        french: "un chat noir",
        explanation: "En français: nom + adjectif (chat noir). En anglais: adjectif + nom (black cat). C'est l'inverse!",
        audioFile: "/audio/regular/week2/session8/black-cat.mp3"
      },
      {
        english: "a funny brother",
        french: "un frère drôle",
        explanation: "L'adjectif 'funny' vient AVANT 'brother'. Toujours cette règle en anglais!",
        audioFile: "/audio/regular/week2/session8/funny-brother.mp3"
      },
      {
        english: "a kind sister",
        french: "une sœur gentille",
        explanation: "'Kind' (gentil) se place avant 'sister'. Mémorise: Adjectif + Nom = règle anglaise!",
        audioFile: "/audio/regular/week2/session8/kind-sister.mp3"
      }
    ]
  },
  {
    title: "TO BE + ADJECTIVE - Pour l'État",
    description: "Utilise 'To Be' + adjectif pour décrire la personnalité",
    color: "purple" as const,
    examples: [
      {
        english: "My brother is funny.",
        french: "Mon frère est drôle.",
        explanation: "Ici, 'funny' vient APRÈS le verbe 'is'. C'est un adjectif attribut (comme en français).",
        audioFile: "/audio/regular/week2/session8/my-brother-is-funny.mp3"
      },
      {
        english: "She is smart.",
        french: "Elle est intelligente.",
        explanation: "Adjectif après 'is' = normal. Mais attention: 'a smart girl' = adjectif AVANT le nom!",
        audioFile: "/audio/regular/week2/session8/she-is-smart.mp3"
      },
      {
        english: "He is a serious person.",
        french: "C'est une personne sérieuse.",
        explanation: "Ici on combine: 'He is' + 'a serious person' (adjectif + nom). Les deux règles ensemble!",
        audioFile: "/audio/regular/week2/session8/serious-person.mp3"
      }
    ]
  },
  {
    title: "Adjectifs de Personnalité Essentiels",
    description: "Les adjectifs les plus utiles pour décrire le caractère",
    color: "green" as const,
    examples: [
      {
        english: "happy, sad, funny, serious",
        french: "heureux, triste, drôle, sérieux",
        explanation: "Les 4 adjectifs de base pour l'humeur et le caractère. Très utiles au quotidien!",
        audioFile: "/audio/regular/week2/session8/personality-basic.mp3"
      },
      {
        english: "kind, shy, smart",
        french: "gentil, timide, intelligent",
        explanation: "3 adjectifs pour décrire la personnalité profonde. 'Kind' = très positif en anglais!",
        audioFile: "/audio/regular/week2/session8/personality-traits.mp3"
      },
      {
        english: "tall, short, young, old",
        french: "grand, petit, jeune, vieux",
        explanation: "Adjectifs physiques ET d'âge. Attention: 'tall/short' pour la taille, pas 'big/small'!",
        audioFile: "/audio/regular/week2/session8/physical-age.mp3"
      }
    ]
  }
]

export const session8DialogueScenario = {
  id: "choosing-movie",
  title: "Choisir un Film",
  description: "Deux amis décident quel film regarder",
  context: "Conversation décontractée pour choisir un divertissement",
  lines: [
    {
      speaker: "A" as const,
      text: "Let's watch a film. What about this one? It's a comedy.",
      translation: "Regardons un film. Et celui-ci ? C'est une comédie.",
      audioFile: "/audio/regular/week2/session8/dialogue-line1.mp3"
    },
    {
      speaker: "B" as const,
      text: "Oh, I know this actor. He is a very funny actor!",
      translation: "Oh, je connais cet acteur. C'est un acteur très drôle !",
      audioFile: "/audio/regular/week2/session8/dialogue-line2.mp3"
    },
    {
      speaker: "A" as const,
      text: "Yes, he is. And the actress is very smart in the movie.",
      translation: "Oui, c'est vrai. Et l'actrice est très intelligente dans le film.",
      audioFile: "/audio/regular/week2/session8/dialogue-line3.mp3"
    },
    {
      speaker: "B" as const,
      text: "I prefer serious movies. Is there a drama?",
      translation: "Je préfère les films sérieux. Y a-t-il un drame ?",
      audioFile: "/audio/regular/week2/session8/dialogue-line4.mp3"
    },
    {
      speaker: "A" as const,
      text: "Yes, but the main character is a very sad man. It's not for tonight.",
      translation: "Oui, mais le personnage principal est un homme très triste. Ce n'est pas pour ce soir.",
      audioFile: "/audio/regular/week2/session8/dialogue-line5.mp3"
    },
    {
      speaker: "B" as const,
      text: "Okay, you're right. A funny movie is a good idea!",
      translation: "D'accord, tu as raison. Un film drôle, c'est une bonne idée !",
      audioFile: "/audio/regular/week2/session8/dialogue-line6.mp3"
    }
  ]
}