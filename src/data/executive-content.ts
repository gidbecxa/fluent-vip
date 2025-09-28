import { SessionData } from "@/types/session"

export const executiveWeek1Sessions = [
  {
    id: 1,
    title: "Les Piliers de la Courtoisie",
    description: "Maîtrisez les 5 expressions de politesse essentielles avec une prononciation claire et naturelle.",
    duration: 25,
    objective: "À la fin de cette session, vous saurez utiliser les 5 expressions de politesse les plus essentielles avec une prononciation claire et naturelle."
  },
  {
    id: 2,
    title: "Se Présenter avec Assurance",
    description: "Apprenez à vous présenter et demander le nom de quelqu'un en concluant l'échange avec aisance.",
    duration: 25,
    objective: "À la fin de cette session, vous saurez vous présenter et demander à quelqu'un son nom, en concluant l'échange avec aisance."
  },
  {
    id: 3,
    title: "Naviguer l'Inconnu avec Élégance",
    description: "Gérez avec calme et confiance une situation où vous ne comprenez pas.",
    duration: 25,
    objective: "Vous donner les outils pour gérer avec calme et confiance une situation où vous ne comprenez pas."
  },
  {
    id: 4,
    title: "Le Rituel Social Incontournable",
    description: "Maîtrisez l'échange social le plus courant en anglais : \"Comment allez-vous ?\"",
    duration: 25,
    objective: "Maîtriser l'échange social le plus courant en anglais : \"Comment allez-vous ?\"."
  },
  {
    id: 5,
    title: "Votre Première Action Concrète",
    description: "Réalisez votre première transaction en anglais en commandant une boisson simple.",
    duration: 30,
    objective: "Réaliser votre première transaction en anglais. À la fin de cette session, vous serez capable de commander une boisson simple avec assurance."
  }
]

export const executiveSessionContent: SessionData = {
  1: {
    title: "Les Piliers de la Courtoisie",
    objective: "À la fin de cette session, vous saurez utiliser les 5 expressions de politesse les plus essentielles avec une prononciation claire et naturelle.",
    duration: 25,
    keyPhrases: [
      {
        english: "Hello.",
        pronunciation: "Hè-lo",
        context: "La salutation universelle, neutre et polie.",
        audioFile: "/audio/executive/session1/hello.mp3"
      },
      {
        english: "Thank you.",
        pronunciation: "Sènk-you",
        context: "Pour remercier. Nous ajouterons 'very much' plus tard.",
        audioFile: "/audio/executive/session1/thank-you.mp3"
      },
      {
        english: "Please.",
        pronunciation: "Pliiz",
        context: "Pour demander quelque chose poliment.",
        audioFile: "/audio/executive/session1/please.mp3"
      },
      {
        english: "Excuse me.",
        pronunciation: "Ex-kiouz-mi",
        context: "Pour attirer l'attention, passer devant quelqu'un.",
        audioFile: "/audio/executive/session1/excuse-me.mp3"
      },
      {
        english: "Good morning / afternoon / evening.",
        pronunciation: "Goud mor-ning / af-ter-noun / iiv-ning",
        context: "Salutations adaptées au moment de la journée.",
        audioFile: "/audio/executive/session1/greetings.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Entrer dans une pièce",
        description: "Vous entrez dans une salle de réunion où des collègues vous attendent.",
        yourLine: "Hello.",
        context: "Levez la tête, souriez et dites simplement 'Hello' avec assurance."
      },
      {
        id: 2,
        title: "Recevoir un document",
        description: "Un collègue vous tend un document important.",
        yourLine: "Thank you.",
        context: "Prenez le document et remerciez avec un sourire sincère."
      },
      {
        id: 3,
        title: "Attirer l'attention d'un serveur",
        description: "Vous êtes dans un restaurant et souhaitez commander.",
        yourLine: "Excuse me.",
        context: "Levez légèrement la main et établissez un contact visuel poli."
      }
    ],
    culturalNote: "En anglais, 'Excuse me' est utilisé *avant* de déranger quelqu'un, tandis que 'Sorry' est utilisé *après* avoir commis une erreur. Cette distinction est un marqueur de sophistication.",
    vipTip: "Cette distinction entre 'Excuse me' et 'Sorry' est un marqueur de sophistication que les anglophones remarquent immédiatement. Maîtriser cette nuance vous positionnera comme quelqu'un qui comprend les subtilités culturelles.",
    practice: "Après notre session, je vous enverrai un lien vers notre set de 'flashcards' numériques contenant ces 5 phrases avec l'audio. Votre mission : écoutez-les et répétez-les à voix haute pendant 5 minutes demain matin.",
    practiceResources: [
      "Flashcards numériques interactives",
      "Fichiers audio haute qualité",
      "Exercices de répétition guidée"
    ],
    interactiveTitle: "Mise en Scène (Micro-Jeux de Rôle)",
    interactiveDescription: "Nous simulerons des situations ultra-simples pour ancrer les phrases dans un contexte réel."
  },
  2: {
    title: "Se Présenter avec Assurance",
    objective: "À la fin de cette session, vous saurez vous présenter et demander à quelqu'un son nom, en concluant l'échange avec aisance.",
    duration: 25,
    keyPhrases: [
      {
        english: "My name is [Votre Prénom].",
        pronunciation: "Maï neïm iz...",
        context: "La manière standard et polie de se présenter.",
        audioFile: "/audio/session2/my-name-is.mp3"
      },
      {
        english: "What is your name?",
        pronunciation: "Ouatt iz yor neïm?",
        context: "Pour demander le nom de votre interlocuteur.",
        audioFile: "/audio/session2/what-is-your-name.mp3"
      },
      {
        english: "Nice to meet you.",
        pronunciation: "Naïss tou miit you",
        context: "La formule de politesse pour conclure une présentation.",
        audioFile: "/audio/session2/nice-to-meet-you.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "La Chaîne de Dialogue - Partie 1",
        description: "Votre interlocuteur commence la conversation.",
        yourLine: "My name is [Votre Prénom]. Nice to meet you.",
        context: "Répondez avec assurance et concluez avec la formule de politesse."
      },
      {
        id: 2,
        title: "La Chaîne de Dialogue - Partie 2",
        description: "C'est vous qui initiez la conversation.",
        yourLine: "Hello. My name is [Votre Prénom]. What is your name?",
        context: "Prenez l'initiative et menez la présentation avec confiance."
      },
      {
        id: 3,
        title: "Combinaison avec Session 1",
        description: "Intégrez les acquis de la session précédente.",
        yourLine: "Excuse me... What is your name, please?",
        context: "Utilisez 'Excuse me' pour attirer l'attention avant de poser votre question."
      }
    ],
    culturalNote: "Le contact visuel est très important lors des présentations dans la plupart des cultures anglophones. Un sourire franc accompagné d'un 'Nice to meet you' est perçu comme un signe de confiance et d'ouverture.",
    vipTip: "Le contact visuel et un sourire sincère sont essentiels dans les présentations anglophones. Cette combinaison avec 'Nice to meet you' crée immédiatement une impression de confiance et de professionnalisme.",
    practice: "Je vous enverrai un très court fichier audio d'une minute contenant 2 ou 3 dialogues de présentation simples. Votre mission : l'écouter plusieurs fois pour habituer votre oreille à la musicalité de ces phrases.",
    practiceResources: [
      "Dialogues audio de présentation",
      "Exercices d'entraînement de l'oreille",
      "Pratique de la musicalité des phrases"
    ],
    interactiveTitle: "La Chaîne de Dialogue",
    interactiveDescription: "Nous allons enchaîner les phrases pour créer votre première mini-conversation."
  },
  3: {
    title: "Naviguer l'Inconnu avec Élégance",
    objective: "Vous donner les outils pour gérer avec calme et confiance une situation où vous ne comprenez pas.",
    duration: 25,
    keyPhrases: [
      {
        english: "I'm sorry, I don't understand.",
        pronunciation: "Aïm so-ri, aï don't un-der-stènd",
        context: "Pour signaler poliment votre incompréhension.",
        audioFile: "/audio/executive/session3/sorry-dont-understand.mp3"
      },
      {
        english: "Could you repeat, please?",
        pronunciation: "Coud you ri-piit, pliiz?",
        context: "Pour demander une répétition.",
        audioFile: "/audio/executive/session3/could-you-repeat.mp3"
      },
      {
        english: "Could you speak more slowly, please?",
        pronunciation: "Coud you spiik mor slo-li, pliiz?",
        context: "Votre outil le plus puissant pour contrôler le rythme.",
        audioFile: "/audio/executive/session3/speak-slowly.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "L'Exercice Anti-Panique",
        description: "Votre interlocuteur parle trop rapidement. Vous devez reprendre le contrôle.",
        yourLine: "I'm sorry, I don't understand. Could you speak more slowly, please?",
        context: "Restez calme et confiant. C'est un signe d'engagement, pas de faiblesse."
      },
      {
        id: 2,
        title: "Réunion Internationale",
        description: "Un collègue utilise un terme technique que vous ne connaissez pas.",
        yourLine: "Excuse me, could you repeat that, please?",
        context: "Combinez avec vos acquis précédents pour une approche polie et professionnelle."
      },
      {
        id: 3,
        title: "Maîtrise du Rythme",
        description: "Vous êtes dans une conversation importante mais le débit est trop rapide.",
        yourLine: "I'm sorry, could you speak more slowly, please? Thank you.",
        context: "Prenez le contrôle de la conversation avec assurance et gratitude."
      }
    ],
    culturalNote: "Demander à quelqu'un de répéter ou de parler plus lentement n'est jamais perçu comme un signe de faiblesse. Au contraire, c'est vu comme une marque d'engagement et un désir sincère de communiquer. Personne ne vous en tiendra rigueur.",
    vipTip: "Cette distinction entre 'Excuse me' et 'Sorry' est un marqueur de sophistication que les anglophones remarquent immédiatement. Maîtriser cette nuance vous positionnera comme quelqu'un qui comprend les subtilités culturelles.",
    practice: "Votre mission est de choisir votre phrase préférée parmi les trois et de la répéter 5 fois devant un miroir, en adoptant une posture confiante et un ton posé. L'objectif est d'incarner le calme que cette phrase est censée projeter.",
    practiceResources: [
      "Exercices de posture et confiance",
      "Entraînement au contrôle du rythme",
      "Techniques de gestion du stress linguistique"
    ],
    interactiveTitle: "Simulation Contrôlée (L'Exercice Anti-Panique)",
    interactiveDescription: "C'est un jeu de rôle où le but n'est pas de comprendre, mais de gérer l'incompréhension avec élégance."
  },
  4: {
    title: "Le Rituel Social Incontournable",
    objective: "Maîtriser l'échange social le plus courant en anglais : 'Comment allez-vous ?'.",
    duration: 25,
    keyPhrases: [
      {
        english: "How are you?",
        pronunciation: "Haow ar you?",
        context: "La question de base pour s'enquérir de l'état de quelqu'un.",
        audioFile: "/audio/executive/session4/how-are-you.mp3"
      },
      {
        english: "I'm fine, thank you. And you?",
        pronunciation: "Aïm faïn, sènk-you. Ènd you?",
        context: "La réponse standard, polie et positive. Le 'And you?' est crucial.",
        audioFile: "/audio/executive/session4/im-fine-and-you.mp3"
      },
      {
        english: "Very well, thank you.",
        pronunciation: "Vè-ri ouell, sènk-you",
        context: "Une réponse alternative, légèrement plus formelle.",
        audioFile: "/audio/executive/session4/very-well.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "Assemblage de la Conversation Complète",
        description: "Vous assemblez toutes les briques apprises pour créer un dialogue professionnel complet.",
        yourLine: "Good morning. My name is [Votre Nom]. Nice to meet you. How are you?",
        context: "Démontrez votre maîtrise en enchaînant naturellement salutation, présentation et question sociale."
      },
      {
        id: 2,
        title: "Réunion Matinale",
        description: "Vous arrivez à une réunion et saluez un collègue que vous rencontrez pour la première fois.",
        yourLine: "Good morning. I'm fine, thank you. And you? Very well, thank you.",
        context: "Montrez votre aisance dans l'échange social professionnel standard."
      },
      {
        id: 3,
        title: "Jeu de Rôle Inversé",
        description: "C'est vous qui initiez tout l'échange social depuis le début.",
        yourLine: "Hello. My name is [Votre Nom]. How are you? Very well, thank you.",
        context: "Prenez le leadership de la conversation avec assurance et fluidité."
      }
    ],
    culturalNote: "Renvoyer la question avec 'And you?' est fondamental. L'oublier peut être perçu comme impoli ou égocentrique. C'est un petit détail qui démontre une grande maîtrise des codes sociaux.",
    vipTip: "'How are you?' est souvent moins une question sur la santé qu'une partie du rituel de salutation. La réponse est presque toujours positive. C'est une nuance culturelle essentielle que les executives doivent maîtriser.",
    practice: "Je vous enverrai un fichier audio de 30 secondes de ce dialogue. Votre mission sera de l'écouter en fermant les yeux, en vous concentrant uniquement sur la 'mélodie' de la conversation, les hauts et les bas de l'intonation.",
    practiceResources: [
      "Fichier audio de dialogue complet",
      "Exercices d'intonation et de rythme",
      "Pratique de la mélodie conversationnelle"
    ],
    interactiveTitle: "Assemblage de la Conversation Complète",
    interactiveDescription: "Nous allons maintenant assembler toutes les briques que nous avons apprises pour créer un dialogue complet et professionnel."
  },
  5: {
    title: "Votre Première Action Concrète",
    objective: "Réaliser votre première transaction en anglais. À la fin de cette session, vous serez capable de commander une boisson simple avec assurance.",
    duration: 30,
    keyPhrases: [
      {
        english: "I would like...",
        pronunciation: "Aï'd laïk...",
        context: "La manière la plus élégante et respectueuse de demander quelque chose. Bien plus distingué que 'I want'.",
        audioFile: "/audio/executive/session5/i-would-like.mp3"
      },
      {
        english: "...a cup of coffee, please.",
        pronunciation: "...a kap of co-fi, pliiz",
        context: "Pour commander un café avec politesse.",
        audioFile: "/audio/executive/session5/coffee-please.mp3"
      },
      {
        english: "...a cup of tea, please.",
        pronunciation: "...a kap of tii, pliiz",
        context: "Pour commander un thé avec élégance.",
        audioFile: "/audio/executive/session5/tea-please.mp3"
      },
      {
        english: "...a glass of water, please.",
        pronunciation: "...a glasse of oua-ter, pliiz",
        context: "Pour commander de l'eau simplement.",
        audioFile: "/audio/executive/session5/water-please.mp3"
      },
      {
        english: "Here you are.",
        pronunciation: "Hir you ar",
        context: "Phrase que vous entendrez. Signifie 'Voici / Tenez'.",
        audioFile: "/audio/executive/session5/here-you-are.mp3"
      }
    ],
    rolePlayScenarios: [
      {
        id: 1,
        title: "La Formule de la Demande",
        description: "Vous maîtrisez 'I would like...' comme votre clé passe-partout pour toute demande polie.",
        yourLine: "Hello. I would like a coffee, please. Thank you.",
        context: "Démontrez votre élégance linguistique avec cette formule respectueuse et professionnelle."
      },
      {
        id: 2,
        title: "Simulation de la Scène Réelle",
        description: "Vous êtes dans un café d'affaires et commandez votre boisson habituelle.",
        yourLine: "Good morning. I would like a cup of tea, please. Thank you very much.",
        context: "Intégrez salutation, commande polie et remerciement dans une transaction fluide."
      },
      {
        id: 3,
        title: "Variations Professionnelles",
        description: "Vous adaptez votre commande selon différentes situations d'affaires.",
        yourLine: "Excuse me, I would like a bottle of water, please. Here you are. Thank you.",
        context: "Montrez votre flexibilité en variant les boissons tout en gardant la même élégance."
      }
    ],
    culturalNote: "L'utilisation de 'I would like' (ou sa contraction 'I'd like') est un marqueur social important. Elle communique le respect et est parfaitement adaptée à votre statut. C'est le genre de détail qui fait toute la différence.",
    vipTip: "'I would like' vs 'I want' - cette distinction marque immédiatement votre niveau de sophistication linguistique. Les executives utilisent toujours 'I would like' dans les contextes professionnels.",
    practice: "Au cours des deux prochains jours, chaque fois que vous vous apprêtez à boire un café, un thé ou de l'eau, prenez une seconde pour formuler la phrase 'I would like a...' dans votre tête en anglais. Cette technique simple ancre l'apprentissage dans vos habitudes quotidiennes.",
    practiceResources: [
      "Exercices d'ancrage dans le quotidien",
      "Pratique de la formule 'I would like'",
      "Simulation de transactions professionnelles"
    ],
    interactiveTitle: "Simulation de la Scène Réelle",
    interactiveDescription: "Ce sera notre pièce de théâtre. Nous simulerons une vraie transaction dans un environnement professionnel."
  }
}