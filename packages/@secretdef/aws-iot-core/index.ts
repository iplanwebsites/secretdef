import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AWS_IOT_ENDPOINT: {
    description: 'AWS IoT Core endpoint',
    dashboard: 'https://console.aws.amazon.com/iot',
  },
  AWS_IOT_REGION: {
    description: 'AWS region for IoT Core',
    dashboard: 'https://console.aws.amazon.com/iot',
    required: false,
  },
});
