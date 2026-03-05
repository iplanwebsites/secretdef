import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CODEMAGIC_API_TOKEN: {
    description: 'Codemagic API token',
    dashboard: 'https://codemagic.io/settings',
  },
});
