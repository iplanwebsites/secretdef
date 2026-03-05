import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SMOOCH_KEY_ID: {
    description: 'Smooch API key ID',
    dashboard: 'https://app.smooch.io',
  },
  SMOOCH_SECRET: {
    description: 'Smooch API secret',
    dashboard: 'https://app.smooch.io',
  },
});
