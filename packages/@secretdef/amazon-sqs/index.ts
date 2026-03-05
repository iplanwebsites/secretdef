import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AWS_SQS_QUEUE_URL: {
    description: 'SQS queue URL',
    dashboard: 'https://console.aws.amazon.com/sqs',
    validate: 'url',
  },
  AWS_SQS_REGION: {
    description: 'AWS region for SQS',
    dashboard: 'https://console.aws.amazon.com/sqs',
    required: false,
  },
});
