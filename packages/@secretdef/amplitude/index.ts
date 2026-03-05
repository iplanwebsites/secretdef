import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AMPLITUDE_API_KEY: { description: 'Amplitude project API key',
    dashboard: 'https://analytics.amplitude.com/' },
});
