import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INFOBIP_API_KEY: {
    description: 'Infobip API key',
    dashboard: 'https://portal.infobip.com/settings/accounts/api-key',
  },
  INFOBIP_BASE_URL: {
    description: 'Infobip base URL',
    dashboard: 'https://portal.infobip.com',
    validate: 'url',
  },
});
