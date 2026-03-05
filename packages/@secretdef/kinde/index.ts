import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KINDE_DOMAIN: { description: 'Kinde domain',
    dashboard: 'https://app.kinde.com/', validate: 'url' },
  KINDE_CLIENT_ID: { description: 'Kinde client ID',
    dashboard: 'https://app.kinde.com/' },
  KINDE_CLIENT_SECRET: { description: 'Kinde client secret',
    dashboard: 'https://app.kinde.com/' },
});
