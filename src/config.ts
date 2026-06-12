// ============================================================================
// SITE CONFIGURATION — Edit ONLY this file to customize your business card
// ============================================================================
// All personal info, contact details, social links, and content live here.
// After editing, run `npm run build` to regenerate the static site + vCard.
// ============================================================================

export const siteConfig = {
  // ── Personal Info ──────────────────────────────────────────────────────
  personal: {
    firstName: "Rohnit",
    lastName: "Rathod",
    fullName: "Rohnit Rathod",
    title: "AI Native Forward Deployed Engineer",
    subtitle: "Building Omni-channel, Multi-Agent Systems",
    avatarPath: "/avatar.jpeg",
    organization: "AI & Systems Architecture",
    website: "https://rohnitrathod.dev",
  },

  // ── Contact Details ────────────────────────────────────────────────────
  contact: {
    phone: "+917021054631",           // Used for Call button & vCard (include country code)
    whatsappNumber: "917021054631",   // WhatsApp number (no + prefix, no dashes)
    whatsappMessage: "Hi, I'd like to connect with you.",
    email: "rathod.roro@gmail.com",
    emailSubject: "Request a connect",
    emailBody: "Hi I am [Insert Name] from [Insert Company] and would like to connect with you.",
  },

  // ── Social Links ───────────────────────────────────────────────────────
  // Comment out any you don't want to show
  socials: {
    linkedin: "https://www.linkedin.com/in/rohnitrathod/",
    github: "https://github.com/roroRathod",
    x: "https://x.com/roroRattatoille",
    // reddit: "https://reddit.com/u/yourprofile",  // Commented out for now
  },

  // ── Resume ─────────────────────────────────────────────────────────────
  resumePath: "/resume.pdf",         // Place your PDF in the /public folder

  // ── Site URL (for QR code & sharing) ───────────────────────────────────
  // Update this once you deploy. Leave empty to use vCard data for QR.
  siteUrl: "https://rororathod.github.io/business-card",

  // ── Capabilities (the infographic cards) ───────────────────────────────
  capabilities: [
    {
      id: "rag",
      title: "Omni-channel Sub-25ms RAG",
      subtitle: "Optimized to your specific documents",
      details: [
        "Custom embedding pipelines",
        "Hybrid search (vector + keyword)",
        "Real-time document ingestion",
        "Sub-25ms P99 latency at scale",
      ],
      colorKey: "cyan" as const,
    },
    {
      id: "text2sql",
      title: "DB-based Text2SQL Agents",
      subtitle: "At the heart of your agentic systems",
      details: [
        "Natural language to SQL conversion",
        "Multi-database schema awareness",
        "Query optimization & validation",
        "Agentic orchestration layer",
      ],
      colorKey: "violet" as const,
    },
    {
      id: "multi-agent",
      title: "Production Multi-Agent Systems",
      subtitle: "Across text, voice, and other forms",
      details: [
        "Agent coordination protocols",
        "Text & voice input handling",
        "Context management & memory",
        "Production-grade scaling",
      ],
      colorKey: "emerald" as const,
    },
    {
      id: "financial",
      title: "ML-based Financial Analysis",
      subtitle: "Custom modeling and predictive insights",
      details: [
        "Time-series forecasting",
        "Risk assessment models",
        "Portfolio optimization",
        "Real-time market analysis",
      ],
      colorKey: "amber" as const,
    },
    {
      id: "mcp",
      title: "Custom MCP & Agent Tools",
      subtitle: "For Claude, OpenAI, and coding agents",
      details: [
        "MCP server development",
        "Custom skill creation",
        "Multi-provider integration",
        "Tool orchestration & chaining",
      ],
      colorKey: "rose" as const,
    },
  ],

  // ── SEO Metadata ───────────────────────────────────────────────────────
  seo: {
    keywords: [
      "AI Engineer",
      "Forward Deployed Engineer",
      "Multi-Agent Systems",
      "RAG",
      "Text2SQL",
      "MCP Servers",
      "Machine Learning",
    ],
  },

  // ── Footer Tagline ─────────────────────────────────────────────────────
  tagline: "Tap · Connect · Build",
};

// ── Color Palette (used by capabilities cards) ─────────────────────────────
export const colorPalette = {
  cyan: {
    accent: "#00d4ff",
    glow: "rgba(0, 212, 255, 0.08)",
    iconBg: "rgba(0, 212, 255, 0.1)",
  },
  violet: {
    accent: "#a855f7",
    glow: "rgba(168, 85, 247, 0.08)",
    iconBg: "rgba(168, 85, 247, 0.1)",
  },
  emerald: {
    accent: "#34d399",
    glow: "rgba(52, 211, 153, 0.08)",
    iconBg: "rgba(52, 211, 153, 0.1)",
  },
  amber: {
    accent: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.08)",
    iconBg: "rgba(251, 191, 36, 0.1)",
  },
  rose: {
    accent: "#fb7185",
    glow: "rgba(251, 113, 133, 0.08)",
    iconBg: "rgba(251, 113, 133, 0.1)",
  },
} as const;

export type ColorKey = keyof typeof colorPalette;

// ── Derived URLs (auto-generated from the config above) ────────────────────
export const derivedUrls = {
  whatsapp: `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`,
  call: `tel:${siteConfig.contact.phone}`,
  email: `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(siteConfig.contact.emailSubject)}&body=${encodeURIComponent(siteConfig.contact.emailBody)}`,
};

// ── vCard content (auto-generated for the build script) ────────────────────
export const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:${siteConfig.personal.lastName};${siteConfig.personal.firstName};;;
FN:${siteConfig.personal.fullName}
ORG:${siteConfig.personal.organization}
TITLE:${siteConfig.personal.title}
TEL;TYPE=CELL:${siteConfig.contact.phone}
EMAIL;TYPE=INTERNET:${siteConfig.contact.email}
URL:${siteConfig.personal.website}
NOTE:${siteConfig.personal.subtitle} | RAG | Text2SQL | MCP Servers
END:VCARD`;
