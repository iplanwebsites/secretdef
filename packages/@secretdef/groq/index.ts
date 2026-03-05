import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GROQ_API_KEY: {
    description: 'Groq API key',
    dashboard: 'https://console.groq.com/keys',
  },
  GROQ_BASE_URL: {
    description: 'Override base URL for Groq API requests',
    dashboard: 'https://console.groq.com',
    required: false,
  },
  GROQ_LOG: {
    description: 'Set the log level for Groq client (off, error, warn, info, debug)',
    dashboard: 'https://console.groq.com',
    required: false,
  },
});
