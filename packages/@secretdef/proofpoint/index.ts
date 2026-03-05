import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PROOFPOINT_SP: {
    description: 'Proofpoint service principal',
    dashboard: 'https://www.proofpoint.com',
  },
  PROOFPOINT_API_KEY: {
    description: 'Proofpoint API key',
    dashboard: 'https://www.proofpoint.com',
  },
});
