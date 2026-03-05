import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PARSE_APP_ID: {
    description: 'Parse application ID',
    dashboard: 'https://parseplatform.org',
  },
  PARSE_MASTER_KEY: {
    description: 'Parse master key',
    dashboard: 'https://parseplatform.org',
  },
  PARSE_SERVER_URL: {
    description: 'Parse server URL',
    dashboard: 'https://parseplatform.org',
    validate: 'url',
    required: false,
  },
});
