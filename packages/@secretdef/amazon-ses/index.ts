import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AWS_SES_REGION: {
    description: 'AWS region for SES',
    dashboard: 'https://console.aws.amazon.com/ses',
  },
  AWS_SES_FROM_ADDRESS: {
    description: 'Default sender email address for SES',
    dashboard: 'https://console.aws.amazon.com/ses',
    required: false,
  },
});
