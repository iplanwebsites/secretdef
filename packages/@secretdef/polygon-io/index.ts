import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POLYGON_API_KEY: {
    description: 'Polygon.io stocks/crypto API key',
    dashboard: 'https://polygon.io/dashboard/api-keys',
  },
});
