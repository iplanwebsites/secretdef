import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRIPLETEX_CONSUMER_TOKEN: {
    description: 'Tripletex consumer token',
    dashboard: 'https://tripletex.no',
  },
  TRIPLETEX_EMPLOYEE_TOKEN: {
    description: 'Tripletex employee token',
    dashboard: 'https://tripletex.no',
  },
});
