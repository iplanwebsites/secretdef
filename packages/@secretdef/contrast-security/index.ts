import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONTRAST_API_KEY: {
    description: 'Contrast Security API key',
    dashboard: 'https://app.contrastsecurity.com',
  },
  CONTRAST_SERVICE_KEY: {
    description: 'Contrast Security service key',
    dashboard: 'https://app.contrastsecurity.com',
  },
  CONTRAST_ORG_UUID: {
    description: 'Contrast Security org UUID',
    dashboard: 'https://app.contrastsecurity.com',
    required: false,
  },
});
