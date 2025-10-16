
export type WorkHistoryType = {
  title: string;
  imageSrc: string;
  description: string;
  url: string;
}

export const WorkHistory: WorkHistoryType[] = [
  {
    title: "The Real View",
    description: "AI-powered platform that analyzes strata and condo documents for real estate professionals. Built with Laravel, Nuxt, PostgreSQL, and integrated OpenAI for document summarization, Stripe for payments, deployed on AWS with Cloudflare.",
    imageSrc: "/works/therealview.png",
    url: "https://therealview.ca",
  },
  {
    title: "SmartStager.ai",
    description: "AI-powered photo tool for real estate listings that generates staged rooms, improves lighting, and enhances image quality. Built with React, Tailwind, Supabase for user management, and Stripe for credits and payments.",
    imageSrc: "/works/smartstager.png",
    url: "https://smartstager.ai",
  },
  {
    title: "StrataShare",
    description: "Platform for managing and sharing condo/HOA documents with secure storage and access control. Built with React, TypeScript, Tailwind, Supabase for authentication and storage, and Stripe for subscriptions.",
    imageSrc: "/works/stratashare.png",
    url: "https://stratashare.ca",
  },
  {
    title: "PixNova AI",
    description: "PixNova AI is an all-in-one AI-powered creative platform that generates images, videos, and artwork using advanced generative models. Users can produce visuals from text prompts, customize outputs, and explore creative tools for design, marketing, and social media.",
    imageSrc: "/works/pixnova.png",
    url: "https://pixnova.ai",
  },
  {
    title: "SignSnap Home",
    description: "SignSnap Home is a smart digital sign-in and lead capture system built for real estate open houses. It allows agents to easily collect visitor information, sync data with CRMs, and manage open house analytics in real time. The platform offers offline access, customizable forms, and automated follow-ups to streamline event-based lead generation.",
    imageSrc: "/works/signsnaphome.png",
    url: "https://signsnaphome.com",
  },
  {
    title: "FNEL App",
    description: "FNEL (Funnel + Analytics) is a lightweight analytics tool designed for solo founders and small startups. It helps users visualize key metrics like conversions, traffic sources, and user behavior — all within a minimal, privacy-friendly dashboard.",
    imageSrc: "/works/fnel.png",
    url: "https://fnel.app",
  },
  {
    title: "Tempolor",
    description: "Tempolor is an AI-driven music generator that creates royalty-free background tracks for videos, games, and creative projects. Users can select moods, genres, and duration to instantly generate unique audio compositions for commercial or personal use.",
    imageSrc: "/works/tempolor.png",
    url: "https://www.tempolor.com",
  },
  {
    title: "Statabase",
    description: "Platform providing structured player and sports data with detailed stats and insights. Built with React for the frontend, Strapi for content management, and Stripe for subscription handling.",
    imageSrc: "/works/statabase.png",
    url: "https://statabase.org",
  }
]