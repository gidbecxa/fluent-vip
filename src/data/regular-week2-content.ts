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
  },
  8: {
    title: "My brother is funny.",
    objective: "Introduire les adjectifs de personnalité et maîtriser leur placement (avant le nom), qui est une différence fondamentale avec le français.",
    duration: 60,
    keyPhrases: [
      {
        english: "My brother is funny.",
        pronunciation: "Maï bra-theur iz fa-ni",
        context: "Pour décrire la personnalité - adjectif APRÈS le verbe 'is'.",
        audioFile: "/audio/regular/week2/session8/my-brother-is-funny.mp3"
      },
      {
        english: "He is a funny brother.",
        pronunciation: "Hi iz a fa-ni bra-theur",
        context: "Adjectif AVANT le nom - règle anglaise fondamentale!",
        audioFile: "/audio/regular/week2/session8/funny-brother.mp3"
      },
      {
        english: "She is a kind person.",
        pronunciation: "Chi iz a kaïnd peur-seun",
        context: "'Kind' = gentil. Adjectif + nom = structure anglaise.",
        audioFile: "/audio/regular/week2/session8/kind-person.mp3"
      },
      {
        english: "Is he a serious man?",
        pronunciation: "Iz hi a si-ri-eus man?",
        context: "Question avec adjectif + nom. 'Serious' = sérieux.",
        audioFile: "/audio/regular/week2/session8/serious-man.mp3"
      },
      {
        english: "My smart sister has glasses.",
        pronunciation: "Maï smart sis-teur haz gla-siz",
        context: "Combinaison: adjectif + nom + 'has'. Structure complète!",
        audioFile: "/audio/regular/week2/session8/smart-sister-has.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Décrire des Personnages de Films",
        description: "Tu regardes des images de personnages et tu les décris avec des adjectifs de personnalité.",
        yourLine: "Look at him. He is a funny character! And she is a very smart person.",
        context: "Sois expressif! Utilise les adjectifs pour donner ton opinion sur les personnages."
      },
      {
        id: 2,
        title: "Parler de ta Famille avec des Adjectifs",
        description: "Tu décris les membres de ta famille en utilisant des adjectifs de personnalité.",
        yourLine: "My father is a serious man. My mother is a kind person. My sister is very funny!",
        context: "Sois positif et affectueux quand tu parles de ta famille!"
      },
      {
        id: 3,
        title: "Choisir des Amis pour une Sortie",
        description: "Tu expliques quel type de personne tu veux inviter selon l'activité.",
        yourLine: "For the cinema, I want a funny friend. For studying, I prefer a serious person.",
        context: "Explique tes choix! Montre que tu comprends les différentes personnalités."
      }
    ],
    culturalNote: "En anglais, l'adjectif se place AVANT le nom (a funny brother), contrairement au français (un frère drôle). Cette règle est absolue et très importante pour sonner naturel. De plus, les adjectifs de personnalité sont très utilisés dans les conversations quotidiennes.",
    vipTip: "Secret Gen Z: Quand tu postes sur les réseaux sociaux en anglais, utilise des adjectifs avant les noms pour décrire tes amis: 'my crazy friend', 'my smart sister'. Ça sonne beaucoup plus naturel que 'my friend who is crazy'!",
    practice: "Ta mission cette semaine: choisis 3 personnes que tu connais et écris une phrase pour chacune en utilisant un adjectif de personnalité + nom. Exemple: 'My funny teacher makes me laugh.' Poste en story avec #MyPeopleInEnglish!",
    practiceResources: [
      "Quiz interactif sur la place des adjectifs",
      "Jeu de memory avec adjectifs de personnalité",
      "Challenge TikTok: 'Describe Your Squad'"
    ],
    interactiveTitle: "Personality Detective Challenge",
    interactiveDescription: "Deviens expert pour décrire les personnalités! Tu vas apprendre à utiliser les adjectifs comme un vrai anglophone.",
    flippedClassroom: {
      videoUrl: "https://www.youtube.com/watch?v=adjective-placement",
      videoTitle: "Adjective Placement - Before the Noun",
      videoDuration: "7 min",
      videoDescription: "Apprends la règle fondamentale de placement des adjectifs en anglais avec des exemples visuels."
    },
    gamification: {
      xpReward: 240,
      badges: ["Adjective Master", "Personality Pro", "Grammar Detective Winner"],
      challenges: [
        "Place 5 adjectifs correctement avant des noms",
        "Décris 3 personnalités différentes avec précision",
        "Utilise 'funny', 'serious', 'kind' dans des phrases complètes"
      ]
    },
    digitalTools: [
      {
        name: "Adjective Placement Game",
        description: "Jeu interactif pour maîtriser l'ordre adjectif + nom",
        link: "https://www.englishclub.com/grammar/adjectives-order.htm"
      },
      {
        name: "Personality Quiz",
        description: "Quiz pour apprendre les adjectifs de personnalité en contexte",
        link: "https://www.eslgamesplus.com/personality-adjectives-game/"
      }
    ]
  },
  9: {
    title: "My tall brother has green eyes.",
    objective: "Combiner toutes les structures de description (adjectif + nom + \"to have\") pour créer des phrases plus complexes et précises. Introduction à la prononciation du son \"th\".",
    duration: 60,
    keyPhrases: [
      {
        english: "My tall brother has green eyes.",
        pronunciation: "Maï tol bra-theur haz griin aïz",
        context: "Phrase complète: adjectif + nom + 'has' + description. Structure parfaite!",
        audioFile: "/audio/regular/week2/session9/tall-brother-green-eyes.mp3"
      },
      {
        english: "This is my brother.",
        pronunciation: "Thiz iz maï bra-theur",
        context: "Prononciation du 'th' dans 'this' - langue entre les dents!",
        audioFile: "/audio/regular/week2/session9/this-is-brother.mp3"
      },
      {
        english: "I think he is funny.",
        pronunciation: "Aï think hi iz fa-ni",
        context: "'Think' avec le son 'th' sourd. Très important à maîtriser!",
        audioFile: "/audio/regular/week2/session9/i-think-funny.mp3"
      },
      {
        english: "My serious father has glasses.",
        pronunciation: "Maï si-ri-eus fa-theur haz gla-siz",
        context: "Adjectif + nom + 'has' - description complète de la personnalité et apparence.",
        audioFile: "/audio/regular/week2/session9/serious-father-glasses.mp3"
      },
      {
        english: "Does your smart sister have brown hair?",
        pronunciation: "Daz your smart sis-teur hav braoun hèr?",
        context: "Question avec adjectif + nom + 'have'. Structure interrogative avancée!",
        audioFile: "/audio/regular/week2/session9/smart-sister-question.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Construction de Phrases Pas à Pas",
        description: "Tu construis des phrases complètes étape par étape avec le tuteur.",
        yourLine: "My brother... My tall brother... My tall brother has green eyes!",
        context: "Suis la progression! Commence simple, puis ajoute des détails progressivement."
      },
      {
        id: 2,
        title: "Jeu de Description Détaillée",
        description: "Tu fais deviner une personne de ta famille avec des descriptions riches.",
        yourLine: "This person is in my family. She is a young person. She has long, brown hair and glasses.",
        context: "Sois précis! Utilise au moins 2 adjectifs et 2 descriptions physiques."
      },
      {
        id: 3,
        title: "Prononciation Challenge 'TH'",
        description: "Tu pratiques les mots avec 'th' dans des phrases complètes.",
        yourLine: "This is my brother. I think he is funny. My mother has three cats.",
        context: "Concentre-toi sur la prononciation! Langue entre les dents pour chaque 'th'."
      }
    ],
    culturalNote: "Le son 'th' n'existe pas en français et est très difficile pour les francophones. Il y a deux sons: /θ/ (sourd, comme dans 'think') et /ð/ (sonore, comme dans 'this'). C'est un marqueur fort d'un bon niveau d'anglais. De plus, combiner adjectifs + noms + 'to have' permet des descriptions très naturelles.",
    vipTip: "Secret Gen Z: Pour impressionner en anglais, maîtrise le 'th'! C'est le son qui fait la différence entre un débutant et quelqu'un qui sonne naturel. Entraîne-toi avec 'This is my thing' - si tu y arrives, tu peux tout prononcer!",
    practice: "Ta mission cette semaine: enregistre-toi en train de dire 'This is my brother. I think he is funny.' 5 fois. Concentre-toi sur le 'th'. Puis écris 3 phrases complètes sur ta famille avec adjectif + nom + 'has'. Poste avec #MyThChallenge!",
    practiceResources: [
      "Exercices de prononciation 'th' interactifs",
      "Quiz construction de phrases complexes",
      "Challenge TikTok: 'Th Sound Master'"
    ],
    interactiveTitle: "Complex Description Master",
    interactiveDescription: "Deviens expert des descriptions complètes! Tu vas combiner tout ce que tu as appris cette semaine pour créer des phrases parfaites.",
    flippedClassroom: {
      videoUrl: "https://www.youtube.com/watch?v=th-pronunciation",
      videoTitle: "TH Pronunciation - Think vs This",
      videoDuration: "8 min",
      videoDescription: "Apprends à prononcer correctement les deux sons 'th' avec des exercices pratiques."
    },
    gamification: {
      xpReward: 260,
      badges: ["TH Pronunciation Master", "Complex Description Pro", "Week 2 Champion"],
      challenges: [
        "Prononce correctement 5 mots avec 'th'",
        "Construis 3 phrases avec adjectif + nom + 'has'",
        "Combine toutes les structures de la semaine dans une description"
      ]
    },
    digitalTools: [
      {
        name: "TH Pronunciation Trainer",
        description: "Outil interactif pour maîtriser la prononciation du son 'th'",
        link: "https://www.sounds-pronunciation.com/english/th-sound"
      },
      {
        name: "Complex Sentence Builder",
        description: "Générateur de phrases pour pratiquer les descriptions complètes",
        link: "https://www.englishclub.com/grammar/sentence-structure.htm"
      }
    ]
  }
}