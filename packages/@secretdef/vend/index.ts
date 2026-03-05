import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VEND_API_TOKEN: {
    description: 'Vend personal token',
    dashboard: 'https://www.vendhq.com',
  },
});
