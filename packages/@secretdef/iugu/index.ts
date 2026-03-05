import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IUGU_API_TOKEN: {
    description: 'Iugu API token',
    dashboard: 'https://alia.iugu.com',
  },
});
