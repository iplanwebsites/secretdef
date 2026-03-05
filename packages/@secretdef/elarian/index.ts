import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ELARIAN_API_KEY: {
    description: 'Elarian API key',
    dashboard: 'https://app.elarian.com',
  },
  ELARIAN_ORG_ID: {
    description: 'Elarian organization ID',
    dashboard: 'https://app.elarian.com',
  },
});
