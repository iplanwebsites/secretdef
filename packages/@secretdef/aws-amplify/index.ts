import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AMPLIFY_APP_ID: {
    description: 'AWS Amplify app ID',
    dashboard: 'https://console.aws.amazon.com/amplify',
  },
  AMPLIFY_BRANCH: {
    description: 'AWS Amplify branch',
    dashboard: 'https://console.aws.amazon.com/amplify',
    required: false,
  },
});
