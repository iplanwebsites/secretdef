import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPTIMIZELY_SDK_KEY: {
    description: 'Optimizely SDK key',
    dashboard: 'https://app.optimizely.com/v2/profile/api',
  },
  OPTIMIZELY_ACCESS_TOKEN: {
    description: 'Optimizely REST API access token',
    dashboard: 'https://app.optimizely.com/v2/profile/api',
    required: false,
  },
});
