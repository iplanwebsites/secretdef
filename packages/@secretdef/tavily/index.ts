import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TAVILY_API_KEY: {
    description: 'Tavily search API key',
    dashboard: 'https://app.tavily.com',
  },
});
