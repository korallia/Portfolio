export const toneStyles = {
  front: {
    node: "text-fuchsia-400 border-fuchsia-950/60 bg-fuchsia-950/10",
    line: "text-fuchsia-400 border-fuchsia-950/60",
  },

  back: {
    node: "text-sky-400 border-sky-950/60 bg-sky-950/10",
    line: "text-sky-400 border-sky-950/60",
  },

  software: {
    node: "text-violet-300 border-violet-900/70 bg-violet-950/20",
    line: "text-violet-300 border-violet-900/70",
  },

  data: {
    node: "text-amber-500 border-amber-950/60 bg-amber-950/10",
    line: "text-amber-500 border-amber-950/60",
  },

  neutral: {
    node: "text-slate-400 border-zinc-800 bg-zinc-800/10",
    line: "text-slate-300 border-zinc-800",
  },

  active: {
    node: "text-emerald-400 border-emerald-950/60 bg-emerald-950/10",
    line: "text-emerald-400 border-emerald-950/60",
  },

  orange: {
    node: "border-orange-900/70 bg-orange-950/20 text-orange-400",
    line: "text-orange-400 border-orange-900/70",
  },

  green: {
    node: "border-[#00E676]/70 bg-[#00E676]/5 text-[#00E676]",
    line: "text-[#00E676] border-[#00E676]/70",
  },
};

export const skillStyles = [
  {
    label: "FRONT",
    cat: "front",
    node: toneStyles.front.node,
  },
  {
    label: "BACK",
    cat: "back",
    node: toneStyles.back.node,
  },
  {
    label: "SYSTEM",
    cat: "software",
    node: toneStyles.software.node,
  },
  {
    label: "DATA",
    cat: "bd",
    node: toneStyles.data.node,
  },
];

export const groupStyles = {
  front: toneStyles.front.node,
  back: toneStyles.back.node,
  software: toneStyles.software.node,
  system: toneStyles.software.node,
  bd: toneStyles.data.node,
  data: toneStyles.data.node,
};

export const lineStyles = {
  front: toneStyles.front.line,
  back: toneStyles.back.line,
  software: toneStyles.software.line,
  system: toneStyles.software.line,
  bd: toneStyles.data.line,
  data: toneStyles.data.line,
};

export const techStyles = {
  React: toneStyles.front.node,
  "React.js": toneStyles.front.node,
  "Next.js": toneStyles.front.node,
  TailwindCSS: toneStyles.front.node,
  "Framer Motion": toneStyles.front.node,

  "Node.js": toneStyles.back.node,
  TypeScript: toneStyles.back.node,
  "Python/Flask": toneStyles.back.node,
  "PHP/Laravel": toneStyles.back.node,
  "Java/Spring Boot": toneStyles.back.node,

  "Git CLI": toneStyles.software.node,
  "Java/JVM": toneStyles.software.node,
  "Java / JVM": toneStyles.software.node,
  Python: toneStyles.software.node,
  "C/C++": toneStyles.software.node,
  "C / C++": toneStyles.software.node,
  GoPiGo3: toneStyles.software.node,
  "Finite State Machine": toneStyles.software.node,
  IoT: toneStyles.software.node,

  PostgreSQL: toneStyles.data.node,
  Prisma: toneStyles.data.node,
  MongoDB: toneStyles.data.node,
  MariaDB: toneStyles.data.node,
  Neo4j: toneStyles.data.node,
  SQL: toneStyles.data.node,
};

export const categoryStyles = {
  WEB: toneStyles.front.node,
  System: toneStyles.software.node,
  Fullstack: toneStyles.back.node,
  Architecture: toneStyles.data.node,
  Infrastructure: toneStyles.software.node,
};

export const statusStyles = {
  IN_DEVELOPMENT: toneStyles.orange.node,
  ACTIVE: toneStyles.green.node,
  STABLE: toneStyles.back.node,
  COMPLETED: toneStyles.back.node,
  LIVE: toneStyles.green.node,
};

export const experienceStyles = {
  PANASSOR: toneStyles.data.line,
  PHOENIX_GN: toneStyles.front.line,
  BLAX: toneStyles.back.line,
  MICRO_FOCUS: toneStyles.software.line,
};

export const skillToneStyles = {
  front: toneStyles.front.line,
  back: `${toneStyles.back.line} bg-sky-950/10`,
  system: toneStyles.neutral.line,
  data: toneStyles.data.line,
};

export const statusBadgeStyles = {
  active: toneStyles.active.node,
  contract: toneStyles.back.node,
  web: toneStyles.front.node,
  enterprise: toneStyles.software.node,
};

export const branchThemes = {
  orange: {
    label: "orange",
    top: "border-t-orange-500",
    glow: "shadow-[8px_8px_0px_0px_rgba(249,115,22,0.12)]",
    dot: "bg-orange-500 shadow-[0_0_14px_#F97316]",
    text: "text-orange-400",
    important: "border-l-orange-500 bg-orange-950/10",
    hover: "hover:border-orange-500/45 hover:text-orange-400",
    active: toneStyles.orange.node,
  },

  green: {
    label: "green",
    top: "border-t-[#00E676]",
    glow: "shadow-[8px_8px_0px_0px_rgba(0,80,45,0.22)]",
    dot: "bg-[#00E676] shadow-[0_0_14px_#00E676]",
    text: "text-[#00E676]",
    important: "border-l-[#00E676] bg-[#00E676]/5",
    hover: "hover:border-[#00E676]/45 hover:text-[#00E676]",
    active: toneStyles.green.node,
  },

  blue: {
    label: "blue",
    top: "border-t-sky-400",
    glow: "shadow-[8px_8px_0px_0px_rgba(14,165,233,0.10)]",
    dot: "bg-sky-400 shadow-[0_0_14px_#38BDF8]",
    text: "text-sky-300",
    important: "border-l-sky-400 bg-sky-950/10",
    hover: "hover:border-sky-400/45 hover:text-sky-300",
    active: toneStyles.back.node,
  },

  violet: {
    label: "violet",
    top: "border-t-violet-400",
    glow: "shadow-[8px_8px_0px_0px_rgba(139,92,246,0.10)]",
    dot: "bg-violet-400 shadow-[0_0_14px_#A78BFA]",
    text: "text-violet-300",
    important: "border-l-violet-400 bg-violet-950/10",
    hover: "hover:border-violet-400/45 hover:text-violet-300",
    active: toneStyles.software.node,
  },
};