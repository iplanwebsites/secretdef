import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHEETSON_API_KEY: {
    description: 'Sheetson API key',
    dashboard: 'https://sheetson.com',
  },
});
