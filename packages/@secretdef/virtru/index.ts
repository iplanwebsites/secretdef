import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VIRTRU_APP_ID: {
    description: 'Virtru application ID',
    dashboard: 'https://developer.virtru.com',
  },
  VIRTRU_CLIENT_ID: {
    description: 'Virtru client ID',
    dashboard: 'https://developer.virtru.com',
    required: false,
  },
});
