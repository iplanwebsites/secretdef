import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WHISPER_API_URL: {
    description: 'Whisper API URL',
    dashboard: 'https://platform.openai.com',
    validate: 'url',
  },
  WHISPER_API_KEY: {
    description: 'Whisper API key',
    dashboard: 'https://platform.openai.com',
    required: false,
  },
});
