import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MPARTICLE_API_KEY: {
    description: 'mParticle API key',
    dashboard: 'https://app.mparticle.com',
  },
  MPARTICLE_API_SECRET: {
    description: 'mParticle API secret',
    dashboard: 'https://app.mparticle.com',
  },
});
