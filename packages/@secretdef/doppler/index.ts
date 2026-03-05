import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOPPLER_TOKEN: {
    description: 'Doppler service token',
    dashboard: 'https://dashboard.doppler.com/',
  },
  DOPPLER_PROJECT: {
    description: 'Doppler project name',
    dashboard: 'https://dashboard.doppler.com/',
    required: false,
  },
  DOPPLER_CONFIG: {
    description: 'Doppler config name',
    dashboard: 'https://dashboard.doppler.com/',
    required: false,
  },
});
