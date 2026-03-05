import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PUSHOVER_TOKEN: {
    description: 'Pushover application token',
    dashboard: 'https://pushover.net/apps',
  },
  PUSHOVER_USER: {
    description: 'Pushover user key',
    dashboard: 'https://pushover.net',
  },
});
