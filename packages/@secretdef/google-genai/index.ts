import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  GEMINI_API_KEY: {
    description: 'API key for Google Gemini API',
    dashboard: 'https://aistudio.google.com/app/apikey',
  },
});
