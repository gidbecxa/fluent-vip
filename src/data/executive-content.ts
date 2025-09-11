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
        audioFile: "hello.mp3"
      },
      {
        english: "Thank you.",
        pronunciation: "Sènk-you",
        context: "Pour remercier. Nous ajouterons 'very much' plus tard.",
        audioFile: "thank-you.mp3"
      },
      {
        english: "Please.",
        pronunciation: "Pliiz",
        context: "Pour demander quelque chose poliment.",
        audioFile: "please.mp3"
      },
      {
        english: "Excuse me.",
        pronunciation: "Ex-kiouz-mi",
        context: "Pour attirer l'attention, passer devant quelqu'un.",
        audioFile: "excuse-me.mp3"
      },
      {
        english: "Good morning / afternoon / evening.",
        pronunciation: "Goud mor-ning / af-ter-noun / iiv-ning",
        context: "Salutations adaptées au moment de la journée.",
        audioFile: "greetings.mp3"
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
  }
}