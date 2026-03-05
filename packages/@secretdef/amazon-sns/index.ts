import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AWS_SNS_TOPIC_ARN: {
    description: 'SNS topic ARN',
    dashboard: 'https://console.aws.amazon.com/sns',
  },
  AWS_SNS_REGION: {
    description: 'AWS region for SNS',
    dashboard: 'https://console.aws.amazon.com/sns',
    required: false,
  },
});
