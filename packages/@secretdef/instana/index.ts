import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INSTANA_AGENT_KEY: {
    description: 'Instana agent key',
    dashboard: 'https://www.instana.com',
  },
  INSTANA_API_TOKEN: {
    description: 'Instana REST API token',
    dashboard: 'https://www.instana.com',
    required: false,
  },
});
