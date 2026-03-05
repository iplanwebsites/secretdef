import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MUX_TOKEN_ID: {
    description: 'Mux API token ID for authentication',
    dashboard: 'https://dashboard.mux.com/settings/access-tokens',
  },
  MUX_TOKEN_SECRET: {
    description: 'Mux API token secret for authentication',
    dashboard: 'https://dashboard.mux.com/settings/access-tokens',
  },
});
