import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KEAP_CLIENT_ID: {
    description: 'Keap OAuth client ID',
    dashboard: 'https://developer.keap.com',
  },
  KEAP_CLIENT_SECRET: {
    description: 'Keap OAuth client secret',
    dashboard: 'https://developer.keap.com',
  },
});
