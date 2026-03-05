import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STEP_FUNCTIONS_REGION: {
    description: 'AWS Step Functions region',
    dashboard: 'https://console.aws.amazon.com/states',
  },
});
