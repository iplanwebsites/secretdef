import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  METRONOME_BEARER_TOKEN: {
    description: 'Metronome bearer token',
    dashboard: 'https://app.metronome.com',
  },
});
