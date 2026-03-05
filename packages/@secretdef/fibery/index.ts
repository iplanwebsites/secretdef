import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIBERY_API_KEY: {
    description: 'Fibery API key',
    dashboard: 'https://fibery.io',
  },
  FIBERY_DOMAIN: {
    description: 'Fibery workspace domain',
    dashboard: 'https://fibery.io',
  },
});
