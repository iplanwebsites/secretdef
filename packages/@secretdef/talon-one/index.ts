import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TALONONE_API_KEY: {
    description: 'Talon.One management API key',
    dashboard: 'https://app.talon.one',
  },
  TALONONE_BASE_URL: {
    description: 'Talon.One API base URL',
    dashboard: 'https://app.talon.one',
    validate: 'url',
    required: false,
  },
});
