import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SES_REGION: {
    description: 'AWS SES region',
    dashboard: 'https://console.aws.amazon.com/ses',
  },
  SES_FROM_EMAIL: {
    description: 'Default sender email for SES',
    dashboard: 'https://console.aws.amazon.com/ses',
    required: false,
  },
});
