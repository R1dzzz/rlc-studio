export const en = {
  // Navigation
  nav: {
    home: "HOME",
    about: "ABOUT",
    philosophy: "PHILOSOPHY",
    team: "TEAM",
    games: "GAMES",
  },

  // Hero Section
  hero: {
    eyebrow: "UPCOMING GAME STUDIO",
    headline: "WE ARE RLC",
    subtext:
      "An upcoming game studio built from passion, community, and the belief that great games start with great people.",
    cta: "DISCOVER OUR STORY",
    scroll: "SCROLL",
  },

  // About Section
  about: {
    eyebrow: "OUR ORIGIN",
    headline: "FROM A SMALL GROUP TO A STUDIO",
    estDate: "EST. OCTOBER 19, 2021",
    story1:
      "Every studio has an origin. Ours began on October 19, 2021 — not in a boardroom, but in a simple chat group of friends who loved to play Minecraft together. We called ourselves BigBearTeam.",
    story2:
      "What started as casual gaming sessions evolved into something deeper. Conversations shifted from playing games to creating them. Ideas turned into plans. A shared passion became a shared vision.",
    story3:
      "Today, RLC Studio carries that same spirit forward — transforming a community of gamers into a team of creators with a singular focus: building games that matter.",
    timeline: {
      year2021: "2021",
      year2021Desc: "The beginning — BigBearTeam",
      now: "NOW",
      nowDesc: "RLC Studio — Building the future",
      next: "NEXT",
      nextDesc: "Our first title",
    },
  },

  // Philosophy Section
  philosophy: {
    eyebrow: "OUR PHILOSOPHY",
    headline: "RESONATE. LIGHT. CREATE.",
    intro:
      "Three principles that guide everything we do at RLC Studio. These are not just words — they are the foundation of every decision we make.",
    pillars: {
      resonate: {
        word: "RESONATE",
        description:
          "We create experiences that connect with players on a deeper level. Every pixel, every sound, every moment should feel meaningful and memorable.",
      },
      light: {
        word: "LIGHT",
        description:
          "We bring ideas to life. From the spark of imagination to the glow of a finished game, we illuminate the path from concept to reality.",
      },
      create: {
        word: "CREATE",
        description:
          "Creation is our core. We build worlds, craft stories, and forge experiences that leave a lasting impression on everyone who plays.",
      },
    },
    quote:
      "We believe the best games are born from passion, shaped by community, and crafted with purpose.",
    quoteAuthor: "— RLC STUDIO",
  },

  // Founders Section
  founders: {
    eyebrow: "THE TEAM",
    headline: "MEET THE FOUNDERS",
    farid: {
      name: "FARID ALFIYANSAH",
      role: "FOUNDER & CHIEF VISIONARY",
      description:
        "The architect of RLC's vision. Farid transformed a small gaming community into a studio with purpose, leading every step of the journey from concept to creation.",
    },
    halim: {
      name: "HALIM",
      role: "CO-FOUNDER & CREATIVE DIRECTOR",
      description:
        "A founding force behind RLC's creative identity. Halim brings the artistic sensibility and design thinking that shapes the studio's visual and experiential voice.",
    },
    fauzan: {
      name: "FAUZAN YUSUF PRATAMA",
      role: "CO-FOUNDER & TECHNICAL DIRECTOR",
      description:
        "The technical backbone of RLC's ambitions. Fauzan drives the engineering vision that turns creative dreams into playable realities.",
    },
  },

  // Future Games Section
  futureGames: {
    eyebrow: "WHAT'S NEXT",
    headline: "SOMETHING IS COMING",
    description:
      "We're building worlds we can't wait to share. The first title is in development — and it's just the beginning.",
    comingSoon: "COMING SOON",
    cta: "GET NOTIFIED",
    hint: "Follow our journey. The future of RLC starts here.",
  },

  // Footer
  footer: {
    tagline:
      "An upcoming game studio built from passion, community, and the belief that great games start with great people.",
    navigation: "NAVIGATION",
    connect: "CONNECT",
    copyright: "RLC Studio. All rights reserved.",
    crafted: "Crafted with passion in Indonesia.",
  },

  // Language Switcher
  language: {
    title: "Language",
    en: "English",
    id: "Bahasa Indonesia",
    de: "Deutsch",
    ja: "日本語",
    ru: "Русский",
  },

  // Audio Toggle
  audio: {
    play: "Play ambient audio",
    mute: "Mute ambient audio",
  },
} as const;

export type Translations = typeof en;
