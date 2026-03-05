import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GRAVITEE_API_KEY: {
    description: 'Gravitee API management key',
    dashboard: 'https://cockpit.gravitee.io',
  },
  GRAVITEE_URL: {
    description: 'Gravitee management URL',
    dashboard: 'https://cockpit.gravitee.io',
    validate: 'url',
    required: false,
  },
});
