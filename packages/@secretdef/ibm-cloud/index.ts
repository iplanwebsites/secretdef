import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IBM_CLOUD_API_KEY: {
    description: 'IBM Cloud API key',
    dashboard: 'https://cloud.ibm.com/iam/apikeys',
  },
});
