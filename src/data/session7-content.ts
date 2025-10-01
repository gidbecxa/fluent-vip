// Session 7 specific content - separated for better organization
export const session7GrammarRules = [
  {
    title: "I HAVE / YOU HAVE - Révision",
    description: "Rappel des formes que tu connais déjà",
    color: "blue" as const,
    examples: [
      {
        english: "I have brown eyes.",
        french: "J'ai les yeux marron.",
        explanation: "Forme que tu maîtrises déjà - pour parler de toi.",
        audioFile: "/audio/regular/week2/session7/i-have-brown-eyes.mp3"
      },
      {
        english: "You have a nice smile.",
        french: "Tu as un beau sourire.",
        explanation: "Pour parler à quelqu'un directement - tu connais déjà cette forme.",
        audioFile: "/audio/regular/week2/session7/you-have-nice-smile.mp3"
      }
    ]
  },
  {
    title: "HE HAS / SHE HAS - Nouvelle Règle!",
    description: "La 3ème personne: attention au 'S' obligatoire!",
    color: "purple" as const,
    examples: [
      {
        english: "He has green eyes.",
        french: "Il a les yeux verts.",
        explanation: "ATTENTION: 'HAS' avec un S! C'est la règle pour he/she/it. Ne jamais oublier ce S!",
        audioFile: "/audio/regular/week2/session7/he-has-green-eyes.mp3"
      },
      {
        english: "She has long hair.",
        french: "Elle a les cheveux longs.",
        explanation: "Même règle pour 'she' - toujours 'HAS' avec un S. C'est différent du français!",
        audioFile: "/audio/regular/week2/session7/she-has-long-hair.mp3"
      },
      {
        english: "My sister has glasses.",
        french: "Ma sœur a des lunettes.",
        explanation: "'My sister' = 'she', donc on utilise 'HAS'. Vocabulaire famille + description!",
        audioFile: "/audio/regular/week2/session7/my-sister-has-glasses.mp3"
      }
    ]
  },
  {
    title: "Questions et Négations",
    description: "Comment poser des questions et dire 'non' avec la 3ème personne",
    color: "green" as const,
    examples: [
      {
        english: "Does he have brown hair?",
        french: "Est-ce qu'il a les cheveux marron ?",
        explanation: "Question: 'Does' + he/she + 'have' (sans S!). Le S passe dans 'Does'.",
        audioFile: "/audio/regular/week2/session7/does-he-have-brown-hair.mp3"
      },
      {
        english: "She doesn't have blue eyes.",
        french: "Elle n'a pas les yeux bleus.",
        explanation: "Négation: 'doesn't' + 'have' (sans S!). Le S est dans 'doesn't'.",
        audioFile: "/audio/regular/week2/session7/she-doesnt-have-blue-eyes.mp3"
      },
      {
        english: "❌ He have glasses. ✅ He has glasses.",
        french: "❌ Il avoir lunettes. ✅ Il a des lunettes.",
        explanation: "Erreur classique! Toujours 'HAS' avec he/she, jamais 'have'.",
        audioFile: "/audio/regular/week2/session7/common-mistake-he-has.mp3"
      }
    ]
  }
]

export const session7DialogueScenario = {
  id: "family-photo",
  title: "Photo de Famille",
  description: "Deux amis regardent une photo sur un téléphone",
  context: "Conversation amicale pour présenter sa famille",
  lines: [
    {
      speaker: "A" as const,
      text: "Is this your family?",
      translation: "C'est ta famille ?",
      audioFile: "/audio/regular/week2/session7/dialogue-line1.mp3"
    },
    {
      speaker: "B" as const,
      text: "Yes, it is. This is my brother.",
      translation: "Oui, c'est ça. Ça c'est mon frère.",
      audioFile: "/audio/regular/week2/session7/dialogue-line2.mp3"
    },
    {
      speaker: "A" as const,
      text: "Oh, he has your eyes! Does he have brown hair too?",
      translation: "Oh, il a tes yeux ! Est-ce qu'il a les cheveux marron aussi ?",
      audioFile: "/audio/regular/week2/session7/dialogue-line3.mp3"
    },
    {
      speaker: "B" as const,
      text: "No, he doesn't. He has blond hair.",
      translation: "Non, pas du tout. Il a les cheveux blonds.",
      audioFile: "/audio/regular/week2/session7/dialogue-line4.mp3"
    },
    {
      speaker: "A" as const,
      text: "And who is she? Your mother?",
      translation: "Et qui est-ce ? Ta mère ?",
      audioFile: "/audio/regular/week2/session7/dialogue-line5.mp3"
    },
    {
      speaker: "B" as const,
      text: "No, she's my sister. Her name is Laura.",
      translation: "Non, c'est ma sœur. Elle s'appelle Laura.",
      audioFile: "/audio/regular/week2/session7/dialogue-line6.mp3"
    },
    {
      speaker: "A" as const,
      text: "She has very long hair! You have a nice family.",
      translation: "Elle a de très longs cheveux ! Tu as une belle famille.",
      audioFile: "/audio/regular/week2/session7/dialogue-line7.mp3"
    }
  ]
}