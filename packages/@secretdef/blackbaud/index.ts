import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BLACKBAUD_SUBSCRIPTION_KEY: {
    description: 'Blackbaud SKY API subscription key',
    dashboard: 'https://developer.blackbaud.com',
  },
  BLACKBAUD_ACCESS_TOKEN: {
    description: 'Blackbaud OAuth access token',
    dashboard: 'https://developer.blackbaud.com',
    required: false,
  },
});
