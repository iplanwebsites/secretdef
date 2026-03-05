import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GROQ_WHISPER_API_KEY: {
    description: 'GroqCloud Whisper API key',
    dashboard: 'https://console.groq.com/keys',
  },
});
