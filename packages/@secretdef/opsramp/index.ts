import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPSRAMP_API_KEY: {
    description: 'OpsRamp API key',
    dashboard: 'https://www.opsramp.com',
  },
  OPSRAMP_API_SECRET: {
    description: 'OpsRamp API secret',
    dashboard: 'https://www.opsramp.com',
  },
});
