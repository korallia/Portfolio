export const cvConsoleContent = {
  fr: {
    cvFilePath: "/Korallia_Frenette_Resume_fr.pdf",
    cvDownloadName: "Korallia_Frenette_Resume_fr.pdf",

    windowTitle: "~/korallia-lab $ ./EXECUTER_CV.sh",
    closeLabel: "FERMER",

    bootDoneMarker: "> ready.",
    bootLines: [
      {
        kind: "command",
        prompt: "korallia-lab:~$",
        command: "run cv.sh",
        color: "text-slate-300",
        delay: 200,
      },
      {
        text: "> loading experience logs...",
        color: "text-green-400/80",
        delay: 550,
      },
      {
        text: "> mounting professional profile...",
        color: "text-green-400/80",
        delay: 900,
      },
      {
        text: "> rendering console resume...",
        color: "text-green-400/80",
        delay: 1250,
      },
      {
        text: "> ready.",
        color: "text-green-400",
        delay: 1650,
      },
      {
        text: "[ OUTPUT_READY ]",
        color: "text-green-400 font-bold",
        delay: 2100,
      },
    ],

    outputStatus: {
  readyLabel: "> rendu_cv_termine",
  statusLine: "STATUT_SORTIE: PRET // PROFIL_COMPILE",
  prompt: "korallia-lab:~$",
  openCvLabel: "OUVRIR_CV",
  links: [
    {
      label: "koralliafrenette@gmail.com",
      href: "mailto:koralliafrenette@gmail.com",
    },
  ],
},

    profile: {
      sectionLabel: "[ PROFIL_OPERATEUR ]",
      name: "Korallia Frenette",
      headline: "Développeuse full-stack // Entrepreneure // Maker",
      summary:
        "Développeuse full-stack avec une vision système et produit. Je construis des interfaces et des fonctionnalités en tenant compte de l’usage, de la structure du projet, de la maintenabilité et de l’évolution du code, tout en respectant les priorités, le rythme et les contraintes du projet.",
      details: [
        {
          label: "Lieu",
          value: "Rougemont, Québec // Télétravail",
        },
        {
          label: "Langues",
          value: "Français // Anglais",
        },
        {
          label: "Cible",
          value: "Des systèmes qui tiennent",
        },
      ],
    },

    experienceSectionLabel: "[ EXPERIENCE_LOGS ]",

    experiences: [
      {
        company: "Panassor",
        role: "Cofondatrice, secrétaire & CTO",
        meta: "Télétravail • sept. 2024 - aujourd’hui",
        status: "ACTIF",
        statusTone: "active",
        bullets: [
          "Conception et maintenance de systèmes internes liés aux ventes, à l’inventaire, aux rencontres et aux ressources opérationnelles.",
          "Gestion administrative et opérationnelle : coordination des rencontres, ressources internes, soutien organisationnel, R&D et planification des cycles de production.",
          "Développement de prototypes électroniques liés aux produits : circuits, microcontrôleurs, LEDs, tests et intégration hardware.",
        ],
      },
      {
        company: "Phoenix GN",
        role: "Développeuse frontend",
        meta: "Télétravail • janv. 2025 - avr. 2025",
        status: "MANDAT",
        statusTone: "contract",
        bullets: [
          "Refonte frontend d’un portail utilisateur existant pour améliorer la navigation, la lisibilité et l’accès aux fonctionnalités principales.",
          "Identification des besoins du client et adaptation de l’interface aux usages concrets du portail.",
          "Collaboration avec les parties prenantes pour intégrer les changements dans un système déjà en place.",
        ],
      },
      {
        company: "Blax Web & Design",
        role: "Développeuse full-stack",
        meta: "Télétravail • avr. 2023 - nov. 2024",
        status: "SYSTEMES_WEB",
        statusTone: "web",
        bullets: [
          "Débogage et stabilisation post-release de produits web, avec prise en charge d’environ 80 % des correctifs sur un produit client majeur.",
          "Amélioration et maintien de composants centraux de l’écosystème web, incluant une librairie commune, un CMS custom, du soutien au développement frontend et du partage de connaissances au sein de l’équipe.",
          "Développement de solutions custom pour différents clients, du JavaScript frontend aux structures orientées objet complexes, avec support technique adapté aux besoins du projet.",
        ],
      },
      {
        company: "Micro Focus Software Development",
        role: "Développeuse Java",
        meta: "Télétravail • mars 2022 - mai 2023",
        status: "ENTREPRISE",
        statusTone: "enterprise",
        bullets: [
          "Développement d’outils internes de soutien dans un environnement logiciel d’entreprise, avec Java et React.",
          "Collaboration à l’analyse et à l’évolution de cas d’usage, en lien avec les besoins de différentes équipes.",
          "Participation à un cadre Scrum/Agile avec mentorat, revue de code et apprentissage des pratiques de développement en équipe structurée.",
        ],
      },
    ],

    skillSectionLabel: "[ MATRICE_COMPETENCES ]",
    skillMatrix: [
      {
        label: "FRONT",
        tone: "front",
        value: "React.js · Next.js · TailwindCSS · JavaScript/TypeScript",
      },
      {
        label: "BACK",
        tone: "back",
        value: "Node.js · Python/Flask · PHP/Laravel · Java/Spring Boot",
      },
      {
        label: "SYSTÈME",
        tone: "system",
        value: "Java/JVM · Python · C/C++ · Bash · CMD · PowerShell",
      },
      {
        label: "DONNÉES",
        tone: "data",
        value: "PostgreSQL · MariaDB · MongoDB · Neo4j",
      },
    ],

    educationSectionLabel: "[ FORMATION ]",
    education: [
      {
        school: "Cégep / Collège",
        program: "DEC en informatique",
        meta: "Développement logiciel · OOP · applications web et mobiles · SQL/NoSQL · environnements Linux/Windows · ligne de commande",
      },
    ],
  },

  en: {
    cvFilePath: "/Korallia_Frenette_Resume_en.pdf",
    cvDownloadName: "Korallia_Frenette_Resume_en.pdf",

    windowTitle: "~/korallia-lab $ ./RUN_RESUME.sh",
    closeLabel: "CLOSE",

    bootDoneMarker: "> ready.",
    bootLines: [
      {
        kind: "command",
        prompt: "korallia-lab:~$",
        command: "run resume.sh",
        color: "text-slate-300",
        delay: 200,
      },
      {
        text: "> loading experience logs...",
        color: "text-green-400/80",
        delay: 550,
      },
      {
        text: "> mounting professional profile...",
        color: "text-green-400/80",
        delay: 900,
      },
      {
        text: "> rendering console resume...",
        color: "text-green-400/80",
        delay: 1250,
      },
      {
        text: "> ready.",
        color: "text-green-400",
        delay: 1650,
      },
      {
        text: "[ OUTPUT_READY ]",
        color: "text-green-400 font-bold",
        delay: 2100,
      },
    ],

    outputStatus: {
  readyLabel: "> resume_render_complete",
  statusLine: "OUTPUT_STATUS: READY // PROFILE_COMPILED",
  prompt: "korallia-lab:~$",
  openCvLabel: "OPEN_RESUME",
  links: [
    {
      label: "EMAIL",
      href: "mailto:koralliafrenette@gmail.com",
    },
  ],
},

    profile: {
      sectionLabel: "[ OPERATOR_PROFILE ]",
      name: "Korallia Frenette",
      headline: "Full-stack developer // Entrepreneur // Maker",
      summary:
        "Full-stack developer with a systems and product-oriented mindset. I build interfaces and features with attention to real usage, project structure, maintainability, and code evolution, while respecting priorities, pace, and project constraints.",
      details: [
        {
          label: "Location",
          value: "Rougemont, Quebec // Remote",
        },
        {
          label: "Languages",
          value: "French // English",
        },
        {
          label: "Target",
          value: "Systems that hold",
        },
      ],
    },

    experienceSectionLabel: "[ EXPERIENCE_LOGS ]",

    experiences: [
      {
        company: "Panassor",
        role: "Co-founder, secretary & CTO",
        meta: "Remote • Sept. 2024 - present",
        status: "ACTIVE",
        statusTone: "active",
        bullets: [
          "Designed and maintained internal systems related to sales, inventory, meetings, and operational resources.",
          "Handled administrative and operational coordination: meetings, internal resources, organizational support, R&D, and production cycle planning.",
          "Developed electronics prototypes related to products: circuits, microcontrollers, LEDs, testing, and hardware integration.",
        ],
      },
      {
        company: "Phoenix GN",
        role: "Frontend developer",
        meta: "Remote • Jan. 2025 - Apr. 2025",
        status: "CONTRACT",
        statusTone: "contract",
        bullets: [
          "Redesigned the frontend of an existing user portal to improve navigation, readability, and access to core features.",
          "Identified client needs and adapted the interface to real portal usage.",
          "Collaborated with stakeholders to integrate changes into an existing system.",
        ],
      },
      {
        company: "Blax Web & Design",
        role: "Full-stack developer",
        meta: "Remote • Apr. 2023 - Nov. 2024",
        status: "WEB_SYSTEMS",
        statusTone: "web",
        bullets: [
          "Debugged and stabilized post-release web products, handling around 80% of fixes on a major client product.",
          "Improved and maintained central components of the web ecosystem, including a shared library, a custom CMS, frontend development support, and knowledge sharing within the team.",
          "Built custom solutions for different clients, from frontend JavaScript to complex object-oriented structures, with technical support adapted to each project.",
        ],
      },
      {
        company: "Micro Focus Software Development",
        role: "Java developer",
        meta: "Remote • Mar. 2022 - May 2023",
        status: "ENTERPRISE",
        statusTone: "enterprise",
        bullets: [
          "Developed internal support tools in an enterprise software environment using Java and React.",
          "Contributed to analysis and evolution of use cases connected to the needs of different teams.",
          "Worked within a Scrum/Agile framework with mentorship, code review, and structured team development practices.",
        ],
      },
    ],

    skillSectionLabel: "[ SKILL_MATRIX ]",
    skillMatrix: [
      {
        label: "FRONT",
        tone: "front",
        value: "React.js · Next.js · TailwindCSS · JavaScript/TypeScript",
      },
      {
        label: "BACK",
        tone: "back",
        value: "Node.js · Python/Flask · PHP/Laravel · Java/Spring Boot",
      },
      {
        label: "SYSTEM",
        tone: "system",
        value: "Java/JVM · Python · C/C++ · Bash · CMD · PowerShell",
      },
      {
        label: "DATA",
        tone: "data",
        value: "PostgreSQL · MariaDB · MongoDB · Neo4j",
      },
    ],

    educationSectionLabel: "[ EDUCATION ]",
    education: [
      {
        school: "Cégep / College",
        program: "DEC in Computer Science",
        meta: "Software development · OOP · web and mobile applications · SQL/NoSQL · Linux/Windows environments · command line",
      },
    ],
  },
};