import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GROWTHBOOK_CLIENT_KEY: { description: 'GrowthBook SDK client key',
    dashboard: 'https://app.growthbook.io/' },
  GROWTHBOOK_API_HOST: { description: 'GrowthBook API host',
    dashboard: 'https://app.growthbook.io/', required: false },
});
