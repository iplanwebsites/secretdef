import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FORTE_API_ACCESS_ID: {
    description: 'Forte API access ID',
    dashboard: 'https://www.forte.net',
  },
  FORTE_SECURE_TRANSACTION_KEY: {
    description: 'Forte secure transaction key',
    dashboard: 'https://www.forte.net',
  },
});
