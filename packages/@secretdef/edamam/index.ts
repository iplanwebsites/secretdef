import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EDAMAM_APP_ID: {
    description: 'Edamam application ID',
    dashboard: 'https://developer.edamam.com',
  },
  EDAMAM_APP_KEY: {
    description: 'Edamam application key',
    dashboard: 'https://developer.edamam.com',
  },
});
