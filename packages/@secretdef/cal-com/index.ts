import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CAL_API_KEY: {
    description: 'Cal.com API key',
    dashboard: 'https://cal.com/settings/developer/api-keys',
  },
});
