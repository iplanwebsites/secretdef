import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FAUNA_SECRET: { description: 'Fauna database secret key',
    dashboard: 'https://dashboard.fauna.com/' },
  FAUNA_ENDPOINT: { description: 'Fauna API endpoint',
    dashboard: 'https://docs.fauna.com/', required: false, validate: 'url' },
});
