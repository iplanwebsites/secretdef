import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NILE_API_KEY: {
    description: 'Nile API key',
    dashboard: 'https://console.thenile.dev',
  },
  NILE_WORKSPACE_SLUG: {
    description: 'Nile workspace slug',
    dashboard: 'https://console.thenile.dev',
  },
  NILE_DATABASE_NAME: {
    description: 'Nile database name',
    dashboard: 'https://console.thenile.dev',
  },
});
