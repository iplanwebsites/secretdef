import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  YOUSIGN_API_KEY: {
    description: 'Yousign API key',
    dashboard: 'https://yousign.com',
  },
});
