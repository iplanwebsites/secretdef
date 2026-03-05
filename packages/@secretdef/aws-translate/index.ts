import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AWS_TRANSLATE_REGION: {
    description: 'AWS region for Translate',
    dashboard: 'https://console.aws.amazon.com/translate',
  },
});
