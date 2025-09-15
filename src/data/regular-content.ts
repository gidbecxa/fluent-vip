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
        yourLine: "Hi! This is my friend, [Name]. He/She is from [Country]. He/She is really cool!",
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
      videoUrl: "https://www.youtube.com/watch?v=1mKeXz5Bf7c",
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
  },
  4: {
    title: "We are, They are... What is it?",
    objective: "Compléter la conjugaison de 'To Be' avec les formes plurielles et apprendre à identifier les objets de l'environnement immédiat.",
    duration: 60,
    keyPhrases: [
      {
        english: "We are...",
        pronunciation: "Oui ar...",
        context: "Pour parler de toi et d'autres personnes ensemble.",
        audioFile: "/audio/regular/session4/we-are.mp3"
      },
      {
        english: "They are...",
        pronunciation: "Zèï ar...",
        context: "Pour parler d'un groupe de personnes ou d'objets.",
        audioFile: "/audio/regular/session4/they-are.mp3"
      },
      {
        english: "What is it? What are they?",
        pronunciation: "Ouatt iz itt? Ouatt ar zèï?",
        context: "Pour demander ce que c'est - singulier et pluriel.",
        audioFile: "/audio/regular/session4/what-is-what-are.mp3"
      },
      {
        english: "It is a... They are...",
        pronunciation: "Itt iz a... Zèï ar...",
        context: "Pour identifier des objets - un ou plusieurs.",
        audioFile: "/audio/regular/session4/it-is-they-are.mp3"
      },
      {
        english: "These are my...",
        pronunciation: "Ziiz ar maï...",
        context: "Pour présenter tes affaires - style Instagram!",
        audioFile: "/audio/regular/session4/these-are-my.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Room Tour Challenge - Style YouTuber",
        description: "Tu filmes un room tour pour tes followers. Présente tous tes objets préférés!",
        yourLine: "These are my books. They are interesting. This is my laptop. It is new!",
        context: "Énergie YouTuber! Sois enthousiaste et montre ta personnalité à travers tes objets."
      },
      {
        id: 2,
        title: "Chasse au Trésor Numérique",
        description: "Ton ami te demande de trouver des objets spécifiques dans ta chambre via FaceTime.",
        yourLine: "What is it? It is my phone! What are they? They are my headphones!",
        context: "Jeu interactif! Sois rapide et précis dans tes réponses."
      },
      {
        id: 3,
        title: "Présentation de Groupe - Projet Étudiant",
        description: "Tu présentes ton équipe et vos outils de travail pour un projet scolaire.",
        yourLine: "We are students. These are our notebooks. They are for our English project.",
        context: "Contexte scolaire professionnel! Montre que vous êtes organisés et motivés."
      }
    ],
    culturalNote: "En anglais, on fait très attention au singulier/pluriel. 'This is' pour UN objet, 'These are' pour PLUSIEURS objets. Les anglophones remarquent immédiatement si tu confonds - mais c'est normal au début!",
    vipTip: "Secret Gen Z: Utilise 'These are my...' pour présenter tes affaires sur les réseaux sociaux! C'est le début parfait pour un post Instagram ou une story Snapchat en anglais.",
    practice: "Ta mission cette semaine: prends une photo de ton bureau/ta chambre et écris 5 phrases en anglais pour décrire ce qu'il y a. Utilise 'It is...' et 'They are...' - poste-le en story privé avec #MyStuffInEnglish!",
    practiceResources: [
      "Quizlet avec objets du quotidien",
      "Jeu de memory singulier/pluriel",
      "Challenge TikTok: 'Name Everything in English'"
    ],
    interactiveTitle: "Digital Scavenger Hunt",
    interactiveDescription: "Transforme ta chambre en terrain de jeu! Tu vas devenir expert pour nommer tout ce qui t'entoure en anglais.",
    flippedClassroom: {
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoTitle: "Singular vs Plural - This, That, These, Those",
      videoDuration: "8 min",
      videoDescription: "Apprends la différence entre singulier et pluriel avec des exemples de la vie quotidienne."
    },
    gamification: {
      xpReward: 180,
      badges: ["Object Master", "Plural Pro", "Room Tour Star"],
      challenges: [
        "Nomme 10 objets différents dans ta chambre",
        "Utilise 'we are' et 'they are' dans la même phrase",
        "Crée un mini room tour de 30 secondes en anglais"
      ]
    },
    digitalTools: [
      {
        name: "Household Objects Quiz",
        description: "Quiz interactif pour apprendre le vocabulaire des objets du quotidien",
        link: "https://www.englishclub.com/vocabulary/household.htm"
      },
      {
        name: "Padlet Collaboration",
        description: "Partage des photos d'objets avec descriptions en anglais",
        link: "https://padlet.com"
      }
    ]
  },
  5: {
    title: "The International Student Mixer",
    objective: "Réactiver et intégrer TOUTES les connaissances de la semaine dans un scénario réaliste, fluide et engageant.",
    duration: 60,
    keyPhrases: [
      {
        english: "Hi everyone! I'm...",
        pronunciation: "Haï èvri-ouan! Aïm...",
        context: "Pour te présenter à un groupe - style soirée internationale!",
        audioFile: "/audio/regular/session5/hi-everyone.mp3"
      },
      {
        english: "This is my friend...",
        pronunciation: "Ziss iz maï frènd...",
        context: "Pour présenter quelqu'un dans un groupe social.",
        audioFile: "/audio/regular/session5/this-is-my-friend.mp3"
      },
      {
        english: "We are from France.",
        pronunciation: "Oui ar from Frànss",
        context: "Pour parler de votre origine en groupe.",
        audioFile: "/audio/regular/session5/we-are-from.mp3"
      },
      {
        english: "They are students too.",
        pronunciation: "Zèï ar stiou-dènts tou",
        context: "Pour décrire d'autres personnes dans le groupe.",
        audioFile: "/audio/regular/session5/they-are-students.mp3"
      },
      {
        english: "It was nice meeting you!",
        pronunciation: "Itt ouaz naïss mii-ting you!",
        context: "Pour conclure une conversation de groupe - parfait pour les soirées!",
        audioFile: "/audio/regular/session5/was-nice-meeting-you.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Welcome Party - Rencontrer Carlos",
        description: "Tu es à une soirée d'accueil pour étudiants internationaux à Londres. Tu rencontres Carlos d'Espagne.",
        yourLine: "Hi! I'm [Ton Nom]. I'm from France. Are you from the UK? No, I'm from Spain. Nice to meet you!",
        context: "Ambiance décontractée! Sois curieux et amical comme dans une vraie soirée étudiante."
      },
      {
        id: 2,
        title: "Group Presentation - Rencontrer Akiko",
        description: "Tu rencontres Akiko du Japon qui a un appareil photo. Tu es curieux de ses affaires.",
        yourLine: "Hi Akiko! What is it? It's a camera. That's cool! Where are you from? I'm from Japan.",
        context: "Montre ton intérêt pour les autres cultures et leurs objets - c'est très Gen Z!"
      },
      {
        id: 3,
        title: "Squad Goals - Rencontrer Anna & Ben",
        description: "Tu rencontres Anna et Ben d'Allemagne. Vous formez un groupe d'étudiants internationaux.",
        yourLine: "Hi! Who are they? They are Anna and Ben. They are from Germany. We are all students here!",
        context: "Crée une vibe de groupe internationale! C'est le moment de former ta squad anglophone."
      }
    ],
    culturalNote: "Les soirées étudiantes internationales sont parfaites pour pratiquer l'anglais! Tout le monde est dans la même situation - apprendre et se faire des amis. L'anglais devient la langue commune naturelle.",
    vipTip: "Secret Gen Z: Dans les groupes internationaux, l'anglais est la langue cool qui unit tout le monde. Même avec des erreurs, tu seras respecté pour l'effort - et tu vas progresser super vite!",
    practice: "Ta mission finale: écris un court paragraphe (4-5 phrases) dans tes notes sur ton téléphone, résumant cette simulation. Utilise TOUS les mots appris cette semaine. Exemple: 'Today, I was at a party. I met Carlos. He is from Spain...' - c'est ton premier texte créatif en anglais!",
    practiceResources: [
      "Journal de bord créatif en anglais",
      "Révision complète de la semaine",
      "Challenge: 'Écris ton premier paragraphe'"
    ],
    interactiveTitle: "International Student Mixer Simulation",
    interactiveDescription: "Bienvenue à la soirée d'accueil! Tu vas rencontrer 3 étudiants de pays différents et créer ton premier réseau international en anglais.",
    flippedClassroom: {
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoTitle: "International Student Life - Making Friends",
      videoDuration: "10 min",
      videoDescription: "Découvre comment les étudiants internationaux se rencontrent et créent des amitiés dans les universités anglophones."
    },
    gamification: {
      xpReward: 250,
      badges: ["Week 1 Champion", "International Networker", "Conversation Master"],
      challenges: [
        "Utilise TOUS les mots appris cette semaine dans une conversation",
        "Présente 3 personnes différentes en anglais",
        "Écris ton premier paragraphe créatif en anglais"
      ]
    },
    digitalTools: [
      {
        name: "HelloTalk",
        description: "App pour pratiquer l'anglais avec de vrais étudiants internationaux",
        link: "https://www.hellotalk.com"
      },
      {
        name: "Tandem",
        description: "Plateforme d'échange linguistique avec des jeunes du monde entier",
        link: "https://www.tandem.net"
      }
    ]
  }
}