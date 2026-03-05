import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LIVEAGENT_API_KEY: {
    description: 'LiveAgent API key',
    dashboard: 'https://www.liveagent.com',
  },
  LIVEAGENT_DOMAIN: {
    description: 'LiveAgent domain',
    dashboard: 'https://www.liveagent.com',
  },
});
