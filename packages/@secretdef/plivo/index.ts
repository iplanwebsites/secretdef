import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLIVO_AUTH_ID: { description: 'Plivo auth ID',
    dashboard: 'https://console.plivo.com/dashboard/' },
  PLIVO_AUTH_TOKEN: { description: 'Plivo auth token',
    dashboard: 'https://console.plivo.com/dashboard/' },
});
