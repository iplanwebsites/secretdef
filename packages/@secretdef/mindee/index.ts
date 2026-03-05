import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MINDEE_API_KEY: {
    description: 'Mindee API key',
    dashboard: 'https://platform.mindee.com/user/settings',
  },
});
