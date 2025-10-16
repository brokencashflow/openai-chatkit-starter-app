import type { ChatKitOptions } from "@openai/chatkit";

// REQUIRED: Your workflow ID from Agent Builder
export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID || "";

// API endpoint for session creation
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Greeting message
export const GREETING = "Hello! How can I help you today?";

// Placeholder text for input
export const PLACEHOLDER_INPUT = "Type your message...";

// Starter prompts that appear on the start screen
export const STARTER_PROMPTS = [
  {
    icon: 'circle-question' as const,
    label: 'What is ChatKit?',
    prompt: 'What is ChatKit?'
  },
  {
    icon: 'lightbulb' as const,
    label: 'How do I get started?',
    prompt: 'How do I get started with ChatKit?'
  },
  {
    icon: 'rocket' as const,
    label: 'Show me examples',
    prompt: 'Can you show me some examples?'
  },
  {
    icon: 'gear' as const,
    label: 'Customization options',
    prompt: 'What customization options are available?'
  },
  {
    icon: 'book' as const,
    label: 'Documentation',
    prompt: 'Where can I find the documentation?'
  }
];

// Theme configuration function
export function getThemeConfig() {
  return {
    colorScheme: 'light' as const,
    radius: 'pill' as const,
    density: 'normal' as const,
    color: {
      accent: {
        primary: '#c98028',
        level: 1 as const
      }
    },
    typography: {
      baseSize: 16 as const,
      fontFamily: 'Inter, sans-serif',
      fontSources: [
        {
          family: 'Inter',
          src: 'https://rsms.me/inter/font-files/Inter-Regular.woff2',
          weight: 400 as const,
          style: 'normal' as const
        },
        {
          family: 'Inter',
          src: 'https://rsms.me/inter/font-files/Inter-Medium.woff2',
          weight: 500 as const,
          style: 'normal' as const
        },
        {
          family: 'Inter',
          src: 'https://rsms.me/inter/font-files/Inter-SemiBold.woff2',
          weight: 600 as const,
          style: 'normal' as const
        },
        {
          family: 'Inter',
          src: 'https://rsms.me/inter/font-files/Inter-Bold.woff2',
          weight: 700 as const,
          style: 'normal' as const
        }
      ]
    }
  };
}

// Complete ChatKit options (used by ChatKitPanel)
export const chatkitOptions: Partial<ChatKitOptions> = {
  theme: getThemeConfig(),
  composer: {
    attachments: {
      enabled: true,
      maxCount: 5,
      maxSize: 10485760 // 10MB
    },
    tools: [
      {
        id: 'search_docs',
        label: 'Search docs',
        shortLabel: 'Docs',
        placeholderOverride: 'Search documentation',
        icon: 'book-open',
        pinned: false
      },
      {
        id: 'general_help',
        label: 'General Help',
        shortLabel: 'Help',
        placeholderOverride: 'Ask a question',
        icon: 'circle-help',
        pinned: false
      }
    ],
  },
  startScreen: {
    greeting: GREETING,
    prompts: STARTER_PROMPTS,
  },
};
