import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BANNERBEAR_API_KEY: {
    description: 'Bannerbear API key',
    dashboard: 'https://www.bannerbear.com',
  },
});
