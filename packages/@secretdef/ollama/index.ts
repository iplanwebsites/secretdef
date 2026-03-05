import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OLLAMA_HOST: {
    description: 'Ollama server host URL',
    dashboard: 'https://ollama.ai',
    validate: 'url',
    required: false,
  },
  OLLAMA_API_KEY: {
    description: 'Ollama API key (if auth enabled)',
    dashboard: 'https://ollama.ai',
    required: false,
  },
});
