export const skillStyles = [
  {
    label: "FRONT",
    cat: "front",
    node: "text-fuchsia-400 border-fuchsia-950/60 bg-fuchsia-950/10",
  },
  {
    label: "BACK",
    cat: "back",
    node: "text-sky-400 border-sky-950/60 bg-sky-950/10",
  },
  {
    label: "SYSTEM",
    cat: "software",
    node: "text-violet-300 border-violet-900/70 bg-violet-950/20",
  },
  {
    label: "DATA",
    cat: "bd",
    node: "text-amber-500 border-amber-950/60 bg-amber-950/10",
  },
];

export const techStyles = {
  React: skillStyles[0].node,
  "React.js": skillStyles[0].node,
  "Next.js": skillStyles[0].node,
  TailwindCSS: skillStyles[0].node,
  "Framer Motion": skillStyles[0].node,

  "Node.js": skillStyles[1].node,
  TypeScript: skillStyles[1].node,
  "Python/Flask": skillStyles[1].node,
  "PHP/Laravel": skillStyles[1].node,
  "Java/Spring Boot": skillStyles[1].node,

  "Git CLI": skillStyles[2].node,
  "Java/JVM": skillStyles[2].node,
  "Java / JVM": skillStyles[2].node,
  Python: skillStyles[2].node,
  "C/C++": skillStyles[2].node,
  "C / C++": skillStyles[2].node,
  GoPiGo3: skillStyles[2].node,
  "Finite State Machine": skillStyles[2].node,
  IoT: skillStyles[2].node,

  PostgreSQL: skillStyles[3].node,
  Prisma: skillStyles[3].node,
  MongoDB: skillStyles[3].node,
  SQL: skillStyles[3].node,
};

export const categoryStyles = {
  WEB: skillStyles[0].node,
  System: skillStyles[2].node,
  Fullstack: skillStyles[1].node,
  Architecture: skillStyles[3].node,
  Infrastructure: skillStyles[2].node,
};

export const statusStyles = {
  IN_DEVELOPMENT: "border-orange-900/70 bg-orange-950/20 text-orange-400",
  ACTIVE: "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]",
  STABLE: "border-sky-900/70 bg-sky-950/20 text-sky-300",
  COMPLETED: "border-sky-900/70 bg-sky-950/20 text-sky-300",
  LIVE: "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]",
};