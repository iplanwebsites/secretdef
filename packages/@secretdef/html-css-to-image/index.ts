import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HCTI_API_USER_ID: {
    description: 'HCTI user ID',
    dashboard: 'https://htmlcsstoimage.com/dashboard',
  },
  HCTI_API_KEY: {
    description: 'HCTI API key',
    dashboard: 'https://htmlcsstoimage.com/dashboard',
  },
});
