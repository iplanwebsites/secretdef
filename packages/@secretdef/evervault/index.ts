import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EVERVAULT_API_KEY: {
    description: 'Evervault API key',
    dashboard: 'https://app.evervault.com',
  },
  EVERVAULT_APP_UUID: {
    description: 'Evervault app UUID',
    dashboard: 'https://app.evervault.com',
  },
});
