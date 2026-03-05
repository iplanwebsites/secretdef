import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ACUITY_USER_ID: {
    description: 'Acuity user ID',
    dashboard: 'https://acuityscheduling.com/api.php',
  },
  ACUITY_API_KEY: {
    description: 'Acuity API key',
    dashboard: 'https://acuityscheduling.com/api.php',
  },
});
