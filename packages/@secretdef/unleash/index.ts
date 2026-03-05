import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UNLEASH_URL: { description: 'Unleash server URL',
    dashboard: 'https://www.getunleash.io/', validate: 'url' },
  UNLEASH_API_TOKEN: { description: 'Unleash API token',
    dashboard: 'https://www.getunleash.io/' },
});
