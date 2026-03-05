import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AWS_BEDROCK_REGION: {
    description: 'AWS region for Bedrock',
    dashboard: 'https://console.aws.amazon.com/bedrock',
  },
});
