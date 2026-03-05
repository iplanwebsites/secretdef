import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPIRALDB_API_KEY: {
    description: 'SpiralDB API key',
    dashboard: 'https://spiraldb.com',
  },
});
