import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CANNY_API_KEY: {
    description: 'Canny API key',
    dashboard: 'https://canny.io/account/api',
  },
});
