import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COUNTLY_APP_KEY: {
    description: 'Countly app key',
    dashboard: 'https://count.ly',
  },
  COUNTLY_SERVER_URL: {
    description: 'Countly server URL',
    dashboard: 'https://count.ly',
    validate: 'url',
  },
});
