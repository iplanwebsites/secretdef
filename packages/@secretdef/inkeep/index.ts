import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INKEEP_API_KEY: {
    description: 'Inkeep API key',
    dashboard: 'https://portal.inkeep.com',
  },
  INKEEP_INTEGRATION_ID: {
    description: 'Inkeep integration ID',
    dashboard: 'https://portal.inkeep.com',
  },
});
