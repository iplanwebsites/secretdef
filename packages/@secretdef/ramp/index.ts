import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RAMP_CLIENT_ID: {
    description: 'Ramp OAuth client ID',
    dashboard: 'https://developer.ramp.com',
  },
  RAMP_CLIENT_SECRET: {
    description: 'Ramp OAuth client secret',
    dashboard: 'https://developer.ramp.com',
  },
});
