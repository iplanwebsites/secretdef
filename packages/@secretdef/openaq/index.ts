import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENAQ_API_KEY: {
    description: 'OpenAQ air quality API key',
    dashboard: 'https://openaq.org',
  },
});
