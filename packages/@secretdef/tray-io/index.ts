import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRAY_ACCESS_TOKEN: {
    description: 'Tray.io access token',
    dashboard: 'https://app.tray.io',
  },
});
