import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPARKPOST_API_KEY: {
    description: 'SparkPost API key',
    dashboard: 'https://app.sparkpost.com/account/api-keys',
  },
});
