import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HARNESS_SDK_KEY: {
    description: 'Harness Feature Flags SDK key',
    dashboard: 'https://app.harness.io',
  },
});
