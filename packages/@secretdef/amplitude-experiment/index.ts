import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AMPLITUDE_EXPERIMENT_KEY: {
    description: 'Amplitude Experiment deployment key',
    dashboard: 'https://app.amplitude.com',
  },
});
