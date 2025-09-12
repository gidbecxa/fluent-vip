import { SessionData } from "@/types/session"

export const regularWeek1Sessions = [
  {
    id: 1,
    title: "Hello, English! I am...",
    description: "Déconstruire la barrière initiale et prononcer tes premières phrases complètes en anglais.",
    duration: 60,
    objective: "Permettre à l'étudiant de prononcer ses premières phrases complètes et correctes en anglais, créant ainsi un sentiment de réussite immédiat."
  },
  {
    id: 2,
    title: "Where Are You From?",
    description: "Élargir le champ des informations personnelles en introduisant l'origine et les nationalités.",
    duration: 60,
    objective: "Maîtriser la forme interrogative et négative de 'To Be' pour parler d'origine et de nationalité."
  },
  {
    id: 3,
    title: "Who is he? Who is she?",
    description: "Consolider l'utilisation de la 3ème personne pour décrire l'environnement et les personnes.",
    duration: 60,
    objective: "Consolider l'utilisation de la 3ème personne du singulier (he/she/it) pour pouvoir décrire l'environnement et les personnes qui nous entourent."
  },
  {
    id: 4,
    title: "We are, They are... What is it?",
    description: "Compléter la conjugaison de 'To Be' avec les formes plurielles et identifier les objets.",
    duration: 60,
    objective: "Compléter la conjugaison de 'To Be' avec les formes plurielles et apprendre à identifier les objets de l'environnement immédiat."
  },
  {
    id: 5,
    title: "The International Student Mixer",
    description: "Session 100% pratique dans un scénario réaliste de soirée étudiante internationale.",
    duration: 60,
    objective: "Réactiver et intégrer TOUTES les connaissances de la semaine dans un scénario réaliste, fluide et engageant."
  }
]

export const regularSessionContent: SessionData = {
  1: {
    title: "Hello, English! I am...",
    objective: "Permettre à l'étudiant de prononcer ses premières phrases complètes et correctes en anglais, créant ainsi un sentiment de réussite immédiat.",
    duration: 60,
    keyPhrases: [
      {
        english: "Hello.",
        pronunciation: "Hè-lo",
        context: "La salutation universelle que tu utiliseras partout dans le monde anglophone.",
        audioFile: "/audio/regular/session1/hello.mp3"
      },
      {
        english: "I am [Your Name].",
        pronunciation: "Aï am [Ton Nom]",
        context: "La base pour te présenter - simple et efficace.",
        audioFile: "/audio/regular/session1/i-am.mp3"
      },
      {
        english: "You are...",
        pronunciation: "You ar...",
        context: "Pour identifier quelqu'un d'autre ou poser une question.",
        audioFile: "/audio/regular/session1/you-are.mp3"
      },
      {
        english: "How are you?",
        pronunciation: "Haow ar you?",
        context: "La question sociale la plus importante en anglais.",
        audioFile: "/audio/regular/session1/how-are-you.mp3"
      },
      {
        english: "I'm fine, thank you.",
        pronunciation: "Aïm faïn, sènk you",
        context: "La réponse standard et polie à 'How are you?'.",
        audioFile: "/audio/regular/session1/im-fine.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Premier Contact - Style Campus",
        description: "Tu rencontres un étudiant international dans le couloir de ton lycée.",
        yourLine: "Hello! I am [Ton Nom]. How are you?",
        context: "Sois naturel et souriant. C'est ton premier contact en anglais - fais-en un succès!"
      },
      {
        id: 2,
        title: "Répondre avec Confiance",
        description: "Quelqu'un t'aborde en anglais. Tu dois répondre avec assurance.",
        yourLine: "Hello! I'm fine, thank you. And you?",
        context: "Montre que tu peux tenir une conversation basique. Le secret: sourire et contact visuel!"
      },
      {
        id: 3,
        title: "Challenge TikTok Style",
        description: "Crée une vidéo de présentation de 30 secondes pour un échange international.",
        yourLine: "Hello everyone! I am [Ton Nom]. I am from France. How are you?",
        context: "Imagine que tu postes ça sur TikTok pour te présenter à des étudiants du monde entier!"
      }
    ],
    culturalNote: "Dans les pays anglophones, 'How are you?' n'est pas vraiment une question sur ta santé - c'est plutôt comme dire 'Salut!' en français. La réponse est presque toujours positive, même si tu n'es pas au top de ta forme!",
    vipTip: "Secret de Gen Z: Les anglophones adorent quand tu fais l'effort de parler leur langue, même avec des erreurs. Ton accent français? C'est un atout, pas un défaut! Assume-le avec fierté.",
    practice: "Ta mission cette semaine: enregistre-toi en train de dire ces 5 phrases, poste-le sur ton story Instagram privé avec #MyEnglishJourney, et regarde-toi progresser jour après jour!",
    practiceResources: [
      "Quizlet interactif avec mode 'Learn'",
      "Reconnaissance vocale Google pour la prononciation",
      "Défi TikTok: 'My First English Words'"
    ],
    interactiveTitle: "English Zone Challenge",
    interactiveDescription: "Transforme ta chambre en 'English Zone' pendant 1 heure. Tout ce que tu dis doit être en anglais!",
    flippedClassroom: {
      videoUrl: "https://youtu.be/I_tRSrPru94?si=txqOHCNX_PbdsB3F",
      videoTitle: "BBC Learning English: First Words",
      videoDuration: "5 min",
      videoDescription: "Découvre les sons de l'anglais et les salutations de base avec cette vidéo interactive."
    },
    gamification: {
      xpReward: 100,
      badges: ["First Words Master", "Pronunciation Pro", "Confidence Builder"],
      challenges: [
        "Dis 'Hello' à 5 personnes différentes aujourd'hui",
        "Enregistre-toi en train de te présenter",
        "Trouve 3 mots anglais que tu utilises déjà en français"
      ]
    },
    digitalTools: [
      {
        name: "Quizlet",
        description: "Flashcards gamifiées pour mémoriser tes premiers mots",
        link: "https://quizlet.com/placeholder"
      },
      {
        name: "Google Traduction",
        description: "Utilise la fonction vocale pour t'entraîner à la prononciation",
        link: "https://translate.google.com"
      }
    ]
  },
  2: {
    title: "Where Are You From?",
    objective: "Élargir le champ des informations personnelles en introduisant l'origine. Maîtriser la forme interrogative et négative de 'To Be' pour parler d'origine et de nationalité.",
    duration: 60,
    keyPhrases: [
      {
        english: "I am from France.",
        pronunciation: "Aï am from Frànss",
        context: "Pour dire d'où tu viens - la base de toute conversation internationale.",
        audioFile: "/audio/regular/session2/i-am-from.mp3"
      },
      {
        english: "Where are you from?",
        pronunciation: "Ouèr ar you from?",
        context: "LA question pour découvrir l'origine de quelqu'un.",
        audioFile: "/audio/regular/session2/where-are-you-from.mp3"
      },
      {
        english: "I am not from Spain.",
        pronunciation: "Aï am not from Spèïn",
        context: "Pour corriger une supposition - très utile en voyage!",
        audioFile: "/audio/regular/session2/i-am-not-from.mp3"
      },
      {
        english: "Are you French?",
        pronunciation: "Ar you Frèntch?",
        context: "Question fermée pour confirmer une nationalité.",
        audioFile: "/audio/regular/session2/are-you-french.mp3"
      },
      {
        english: "Yes, I am. / No, I am not.",
        pronunciation: "Yèss, aï am. / No, aï am not",
        context: "Réponses courtes et efficaces aux questions fermées.",
        audioFile: "/audio/regular/session2/yes-no-responses.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Contrôle des Passeports - Style Aéroport",
        description: "Tu arrives à l'aéroport de Londres. L'officier vérifie ton identité.",
        yourLine: "Hello. My name is [Ton Nom]. I am from France.",
        context: "Sois clair et confiant. C'est ta première interaction officielle en anglais!"
      },
      {
        id: 2,
        title: "Speed Dating International",
        description: "Tu participes à un speed dating étudiant international. Tu as 2 minutes!",
        yourLine: "Hi! I'm [Ton Nom]. Where are you from? I am from France.",
        context: "Énergie positive! Montre ta curiosité pour les autres cultures."
      },
      {
        id: 3,
        title: "Correction Polie",
        description: "Quelqu'un pense que tu es espagnol. Tu dois corriger poliment.",
        yourLine: "No, I am not from Spain. I am from France. Are you from the UK?",
        context: "Reste poli même en corrigeant. Retourne la question pour continuer la conversation!"
      }
    ],
    culturalNote: "Dans les pays anglophones, demander 'Where are you from?' est une question sociale normale et amicale. Contrairement à la France, ce n'est pas considéré comme indiscret - c'est même attendu dans les premières conversations!",
    vipTip: "Secret Gen Z: Quand tu dis 'I am from France', ajoute toujours quelque chose de positif sur ton pays ou ta ville. Les anglophones adorent découvrir la culture française à travers tes yeux!",
    practice: "Ta mission cette semaine: trouve 3 personnes de nationalités différentes sur les réseaux sociaux (TikTok, Instagram) et commente en anglais 'Hello! I am from France. Where are you from?' - tu vas voir, les gens adorent répondre!",
    practiceResources: [
      "Quizlet interactif avec 20 nationalités",
      "Carte du monde interactive pour réviser",
      "Défi Instagram: 'Guess My Nationality'"
    ],
    interactiveTitle: "World Map Challenge",
    interactiveDescription: "Transforme ta chambre en centre de contrôle international! Tu vas devenir expert en nationalités.",
    flippedClassroom: {
      videoUrl: "https://www.youtube.com/watch?v=31y2Bq1RYQA",
      videoTitle: "Countries and Nationalities for Beginners",
      videoDuration: "7 min",
      videoDescription: "Découvre 20 pays et nationalités avec cette vidéo interactive parfaite pour les débutants."
    },
    gamification: {
      xpReward: 120,
      badges: ["Geography Master", "Question Pro", "Cultural Explorer"],
      challenges: [
        "Apprends 10 nationalités différentes",
        "Pose la question 'Where are you from?' à 3 personnes",
        "Trouve 5 célébrités de pays différents et dis leur nationalité"
      ]
    },
    digitalTools: [
      {
        name: "Seterra Geography",
        description: "Jeu interactif pour apprendre les pays et capitales",
        link: "https://www.seterra.com"
      },
      {
        name: "Kahoot Geography",
        description: "Quiz gamifié sur les nationalités et drapeaux",
        link: "https://kahoot.com"
      }
    ]
  },
  3: {
    title: "Who is he? Who is she?",
    objective: "Consolider l'utilisation de la 3ème personne du singulier (he/she/it) pour pouvoir décrire l'environnement et les personnes qui nous entourent.",
    duration: 60,
    keyPhrases: [
      {
        english: "He is...",
        pronunciation: "Hi iz...",
        context: "Pour parler d'un homme ou d'un garçon.",
        audioFile: "/audio/regular/session3/he-is.mp3"
      },
      {
        english: "She is...",
        pronunciation: "Chi iz...",
        context: "Pour parler d'une femme ou d'une fille.",
        audioFile: "/audio/regular/session3/she-is.mp3"
      },
      {
        english: "Who is he? Who is she?",
        pronunciation: "Hou iz hi? Hou iz chi?",
        context: "Pour demander l'identité de quelqu'un.",
        audioFile: "/audio/regular/session3/who-is.mp3"
      },
      {
        english: "This is my friend...",
        pronunciation: "Ziss iz maï frènd...",
        context: "Pour présenter quelqu'un - super utile en soirée!",
        audioFile: "/audio/regular/session3/this-is-my-friend.mp3"
      },
      {
        english: "It is...",
        pronunciation: "Itt iz...",
        context: "Pour parler d'un objet, d'un lieu ou d'un animal.",
        audioFile: "/audio/regular/session3/it-is.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Présentation de Célébrités - Style TikTok",
        description: "Tu crées une vidéo pour présenter tes 3 célébrités préférées à tes followers.",
        yourLine: "This is [Celebrity Name]. He/She is from [Country]. He/She is a [Profession].",
        context: "Énergie TikTok! Sois enthousiaste et informatif comme un vrai influenceur."
      },
      {
        id: 2,
        title: "Soirée Étudiante - Présenter un Ami",
        description: "Tu es à une soirée et tu présentes ton meilleur ami à quelqu'un de nouveau.",
        yourLine: "Hi! This is my friend [Name]. He/She is from [Country]. He/She is really cool!",
        context: "Ambiance décontractée! Montre que ton ami est génial."
      },
      {
        id: 3,
        title: "Visite Guidée de ta Ville",
        description: "Tu fais visiter ta ville à un étudiant international via Instagram Stories.",
        yourLine: "This is the Eiffel Tower. It is in Paris. It is not in London!",
        context: "Guide touristique mode Gen Z! Sois fier de ta ville et amusant."
      }
    ],
    culturalNote: "En anglais, on utilise 'he' et 'she' beaucoup plus qu'en français. Les anglophones adorent personnaliser leurs descriptions - même pour parler d'animaux, ils utilisent souvent 'he' ou 'she' au lieu de 'it'!",
    vipTip: "Secret Gen Z: Quand tu présentes quelqu'un, ajoute toujours quelque chose de positif! 'This is my friend Sarah. She is from Canada and she is amazing!' - ça crée une super première impression.",
    practice: "Ta mission cette semaine: trouve 3 photos de tes amis sur Instagram et écris une description en anglais pour chacun. Poste-les en story privé avec #MyFriendsInEnglish - tu vas voir, c'est addictif!",
    practiceResources: [
      "Quizlet avec pronoms personnels",
      "Jeu de cartes célébrités à décrire",
      "Challenge Instagram: 'Describe Your Squad'"
    ],
    interactiveTitle: "Celebrity Spotlight Challenge",
    interactiveDescription: "Transforme ta chambre en plateau TV! Tu vas présenter tes célébrités préférées comme un vrai présentateur.",
    flippedClassroom: {
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoTitle: "He, She, It - Personal Pronouns for Beginners",
      videoDuration: "6 min",
      videoDescription: "Apprends à utiliser les pronoms personnels avec des exemples de films et séries populaires."
    },
    gamification: {
      xpReward: 150,
      badges: ["Pronoun Master", "Celebrity Expert", "Social Presenter"],
      challenges: [
        "Présente 5 célébrités différentes",
        "Utilise 'he', 'she' et 'it' dans la même phrase",
        "Crée une description de 3 phrases pour ton meilleur ami"
      ]
    },
    digitalTools: [
      {
        name: "Celebrity Quiz App",
        description: "Quiz interactif pour pratiquer les descriptions de célébrités",
        link: "https://www.sporcle.com/games/category/celebrity"
      },
      {
        name: "Flipgrid",
        description: "Enregistre des vidéos de présentation pour pratiquer l'oral",
        link: "https://flipgrid.com"
      }
    ]
  }
}