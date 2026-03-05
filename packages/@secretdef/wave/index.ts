import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WAVE_ACCESS_TOKEN: {
    description: 'Wave full access token',
    dashboard: 'https://developer.waveapps.com/hc/en-us/articles/360019762711',
  },
});
