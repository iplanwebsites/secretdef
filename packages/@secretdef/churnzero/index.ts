import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHURNZERO_API_KEY: {
    description: 'ChurnZero API key',
    dashboard: 'https://app.churnzero.net',
  },
});
