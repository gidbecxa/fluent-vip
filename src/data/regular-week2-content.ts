import { SessionData } from "@/types/session"

export const regularWeek2Sessions = [
  {
    id: 6,
    title: "I have brown eyes...",
    description: "Introduire et maîtriser le verbe \"To Have\" pour la description physique. Créer une distinction claire avec \"To Be\".",
    duration: 60,
    objective: "Introduire et maîtriser le verbe \"To Have\" (avoir/posséder) pour la description physique. Créer une distinction claire avec \"To Be\" (être/état)."
  },
  {
    id: 7,
    title: "He has a sister...",
    description: "Étendre l'utilisation de \"To Have\" à la 3ème personne et introduire le vocabulaire de la famille proche.",
    duration: 60,
    objective: "Étendre l'utilisation de \"To Have\" à la 3ème personne (\"he/she has\") et introduire le vocabulaire de la famille proche."
  },
  {
    id: 8,
    title: "My brother is funny.",
    description: "Introduire les adjectifs de personnalité et maîtriser leur placement (avant le nom).",
    duration: 60,
    objective: "Introduire les adjectifs de personnalité et maîtriser leur placement (avant le nom), qui est une différence fondamentale avec le français."
  },
  {
    id: 9,
    title: "My tall brother has green eyes.",
    description: "Combiner toutes les structures de description (adjectif + nom + \"to have\") pour créer des phrases plus complexes.",
    duration: 60,
    objective: "Combiner toutes les structures de description (adjectif + nom + \"to have\") pour créer des phrases plus complexes et précises. Introduction à la prononciation du son \"th\"."
  },
  {
    id: 10,
    title: "My Digital Family Album",
    description: "Session 100% pratique. Utiliser toutes les compétences de la semaine pour présenter sa famille de manière fluide.",
    duration: 60,
    objective: "Session 100% pratique. Utiliser toutes les compétences de la semaine pour présenter sa famille (ou des amis) de manière fluide et interactive, simulant une conversation réelle."
  }
]

export const regularWeek2SessionContent: SessionData = {
  6: {
    title: "I have brown eyes...",
    objective: "Introduire et maîtriser le verbe \"To Have\" (avoir/posséder) pour la description physique. Créer une distinction claire avec \"To Be\" (être/état).",
    duration: 60,
    keyPhrases: [
      {
        english: "I have brown eyes.",
        pronunciation: "Aï hav braoun aïz",
        context: "Pour décrire tes yeux - la base de la description physique avec 'To Have'.",
        audioFile: "/audio/regular/week2/session6/i-have-brown-eyes.mp3"
      },
      {
        english: "You have blue hair.",
        pronunciation: "You hav blou hèr",
        context: "Pour décrire les cheveux de quelqu'un - attention à la différence avec 'You are'!",
        audioFile: "/audio/regular/week2/session6/you-have-blue-hair.mp3"
      },
      {
        english: "I have glasses.",
        pronunciation: "Aï hav gla-siz",
        context: "Pour dire que tu portes des lunettes - objet que tu 'possèdes'.",
        audioFile: "/audio/regular/week2/session6/i-have-glasses.mp3"
      },
      {
        english: "Do you have long hair?",
        pronunciation: "Dou you hav long hèr?",
        context: "Question pour demander si quelqu'un a les cheveux longs.",
        audioFile: "/audio/regular/week2/session6/do-you-have-long-hair.mp3"
      },
      {
        english: "I don't have green eyes.",
        pronunciation: "Aï dont hav griin aïz",
        context: "Forme négative pour dire ce que tu n'as pas - très utile pour corriger!",
        audioFile: "/audio/regular/week2/session6/i-dont-have-green-eyes.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Le Jeu du Miroir - Style Selfie",
        description: "Tu te regardes dans le miroir (ou utilises la caméra comme miroir) et tu te décris pour un ami en FaceTime.",
        yourLine: "Look! I have brown hair and brown eyes. I have a nice smile today!",
        context: "Sois naturel et positif! C'est comme si tu prenais un selfie et tu le commentais pour tes amis."
      },
      {
        id: 2,
        title: "Photo de Profil - Nouveau Look",
        description: "Tu montres ta nouvelle photo de profil à un ami et vous discutez de votre apparence.",
        yourLine: "This is my new profile picture. I have tired eyes but I have a nice smile. Do you like it?",
        context: "Ambiance décontractée entre amis! Sois honnête sur ton apparence comme dans une vraie conversation."
      },
      {
        id: 3,
        title: "Description pour un Blind Date",
        description: "Tu décris ton apparence à quelqu'un que tu vas rencontrer pour la première fois.",
        yourLine: "Hi! So you can recognize me: I have short brown hair and I have glasses. I have a red jacket today.",
        context: "Sois précis et utile! C'est pratique pour les vraies situations de rencontre."
      }
    ],
    culturalNote: "En anglais, on utilise 'To Have' pour décrire les caractéristiques physiques qu'on 'possède' (I have blue eyes), tandis que 'To Be' décrit notre état ou identité (I am tall). Cette distinction est cruciale et différente du français où on dit 'Je suis grand' et 'J'ai les yeux bleus'.",
    vipTip: "Secret Gen Z: Quand tu décris ton apparence sur les réseaux sociaux en anglais, utilise 'I have...' pour tes caractéristiques physiques. C'est plus naturel que 'My eyes are blue' - dis plutôt 'I have blue eyes'!",
    practice: "Ta mission cette semaine: prends un selfie et écris 3 phrases en anglais pour te décrire en utilisant 'I have...'. Poste-le en story privé avec #MyLookInEnglish - tu vas voir, c'est addictif de se décrire en anglais!",
    practiceResources: [
      "Quizlet interactif avec vocabulaire de l'apparence",
      "Jeu de memory 'To Be' vs 'To Have'",
      "Challenge TikTok: 'Describe Your Look'"
    ],
    interactiveTitle: "Mirror Mirror Challenge",
    interactiveDescription: "Transforme ta chambre en studio photo! Tu vas devenir expert pour te décrire et décrire les autres en anglais avec le verbe 'To Have'.",
    flippedClassroom: {
      videoUrl: "https://www.youtube.com/watch?v=3_6wZqUELQI",
      videoTitle: "TO HAVE vs TO BE - Physical Description",
      videoDuration: "5 min",
      videoDescription: "Apprends la différence cruciale entre 'To Have' et 'To Be' pour décrire l'apparence physique avec des exemples visuels."
    },
    gamification: {
      xpReward: 200,
      badges: ["Physical Description Master", "Have vs Be Pro", "Mirror Challenge Winner"],
      challenges: [
        "Utilise 'I have' pour décrire 5 caractéristiques physiques",
        "Fais la différence entre 'I am tall' et 'I have brown hair'",
        "Décris ton apparence en 30 secondes sans hésiter"
      ]
    },
    digitalTools: [
      {
        name: "Physical Description Quiz",
        description: "Quiz interactif pour maîtriser 'To Have' vs 'To Be' dans les descriptions",
        link: "https://www.englishclub.com/grammar/verbs-have.htm"
      },
      {
        name: "Avatar Creator",
        description: "Crée ton avatar et décris-le en anglais avec 'I have...'",
        link: "https://www.bitmoji.com"
      }
    ]
  },
  7: {
    title: "He has a sister...",
    objective: "Étendre l'utilisation de \"To Have\" à la 3ème personne (\"he/she has\") et introduire le vocabulaire de la famille proche.",
    duration: 60,
    keyPhrases: [
      {
        english: "He has brown hair.",
        pronunciation: "Hi haz braoun hèr",
        context: "Pour décrire les cheveux d'un homme - attention au 'S' de 'has' pour la 3ème personne!",
        audioFile: "/audio/regular/week2/session7/he-has-brown-hair.mp3"
      },
      {
        english: "She has blue eyes.",
        pronunciation: "Chi haz blou aïz",
        context: "Pour décrire les yeux d'une femme - même règle, 'has' avec un S.",
        audioFile: "/audio/regular/week2/session7/she-has-blue-eyes.mp3"
      },
      {
        english: "Does he have a sister?",
        pronunciation: "Daz hi hav a sis-teur?",
        context: "Question pour demander si quelqu'un a une sœur - forme interrogative.",
        audioFile: "/audio/regular/week2/session7/does-he-have-sister.mp3"
      },
      {
        english: "My brother has glasses.",
        pronunciation: "Maï bra-theur haz gla-siz",
        context: "Pour parler de ton frère - vocabulaire famille + description physique.",
        audioFile: "/audio/regular/week2/session7/my-brother-has-glasses.mp3"
      },
      {
        english: "She doesn't have long hair.",
        pronunciation: "Chi da-zent hav long hèr",
        context: "Forme négative pour dire ce qu'elle n'a pas - très utile!",
        audioFile: "/audio/regular/week2/session7/she-doesnt-have-long-hair.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Guess Who? - Devine qui!",
        description: "Tu regardes des photos de famille et tu devines qui est qui en posant des questions.",
        yourLine: "Does he have brown hair? Does she have glasses? Is it your brother?",
        context: "Sois curieux! Pose plein de questions pour deviner. C'est comme un jeu de détective familial."
      },
      {
        id: 2,
        title: "Photo de Famille sur Instagram",
        description: "Tu montres une photo de famille à un ami et vous discutez de qui est qui.",
        yourLine: "This is my family! My sister has long hair and my brother has glasses. Do you see them?",
        context: "Ambiance réseaux sociaux! Présente ta famille avec fierté et enthousiasme."
      },
      {
        id: 3,
        title: "Description pour un Ami",
        description: "Tu décris les membres de ta famille à quelqu'un qui ne les connaît pas.",
        yourLine: "My mother has brown eyes like me. My father has glasses and short hair. They are very kind!",
        context: "Sois précis et chaleureux! Aide ton ami à imaginer ta famille."
      }
    ],
    culturalNote: "En anglais, on utilise 'he/she HAS' (avec un S!) pour la 3ème personne du singulier. C'est la seule exception dans la conjugaison de 'To Have'. Cette règle est fondamentale et différente du français où 'il a' et 'elle a' se prononcent pareil.",
    vipTip: "Secret Gen Z: Quand tu parles de ta famille sur les réseaux sociaux en anglais, utilise 'My sister has...' ou 'My brother has...' pour les décrire. C'est plus naturel que de dire 'My sister is with blue eyes'!",
    practice: "Ta mission cette semaine: prends une photo de famille (ou trouve-en une sur ton téléphone) et écris 3 phrases pour décrire 3 personnes différentes en utilisant 'He has...' ou 'She has...'. Partage en story privé avec #MyFamilyInEnglish!",
    practiceResources: [
      "Quiz interactif 'He/She Has' vs 'I/You Have'",
      "Jeu de memory avec vocabulaire de la famille",
      "Challenge TikTok: 'Describe Your Family'"
    ],
    interactiveTitle: "Family Detective Challenge",
    interactiveDescription: "Deviens un détective de famille! Tu vas apprendre à poser des questions et décrire les membres de ta famille en anglais.",
    flippedClassroom: {
      videoUrl: "https://www.youtube.com/watch?v=family-has-video",
      videoTitle: "HE HAS / SHE HAS - Family Vocabulary",
      videoDuration: "6 min",
      videoDescription: "Apprends la conjugaison de 'To Have' à la 3ème personne avec le vocabulaire de la famille."
    },
    gamification: {
      xpReward: 220,
      badges: ["Family Description Master", "Third Person Pro", "Detective Challenge Winner"],
      challenges: [
        "Utilise 'He has' et 'She has' pour décrire 5 personnes",
        "Pose 3 questions avec 'Does he/she have...?'",
        "Décris ta famille en 45 secondes sans hésiter"
      ]
    },
    digitalTools: [
      {
        name: "Family Tree Creator",
        description: "Crée ton arbre généalogique et décris chaque membre avec 'He/She has...'",
        link: "https://www.familyecho.com"
      },
      {
        name: "Guess Who Game",
        description: "Jeu interactif pour pratiquer les questions 'Does he/she have...?'",
        link: "https://www.eslgamesplus.com/family-members-vocabulary-game/"
      }
    ]
  }
}