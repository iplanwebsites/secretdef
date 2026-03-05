import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MAILTRAP_API_TOKEN: {
    description: 'Mailtrap API token',
    dashboard: 'https://mailtrap.io/api-tokens',
  },
});
