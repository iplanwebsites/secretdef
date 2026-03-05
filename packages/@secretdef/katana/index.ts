import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KATANA_API_KEY: {
    description: 'Katana MRP API key',
    dashboard: 'https://katanamrp.com',
  },
});
