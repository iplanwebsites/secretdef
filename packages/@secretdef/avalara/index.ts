import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AVALARA_USERNAME: {
    description: 'Avalara username',
    dashboard: 'https://developer.avalara.com',
  },
  AVALARA_PASSWORD: {
    description: 'Avalara password',
    dashboard: 'https://developer.avalara.com',
  },
  AVALARA_COMPANY_CODE: {
    description: 'Avalara company code',
    dashboard: 'https://developer.avalara.com',
    required: false,
  },
});
