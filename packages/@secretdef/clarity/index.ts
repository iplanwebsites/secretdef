import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLARITY_PROJECT_ID: {
    description: 'Microsoft Clarity project ID',
    dashboard: 'https://clarity.microsoft.com/projects',
  },
});
