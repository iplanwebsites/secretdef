import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IPINFO_TOKEN: { description: 'IPinfo API token',
    dashboard: 'https://ipinfo.io/account/token' },
});
