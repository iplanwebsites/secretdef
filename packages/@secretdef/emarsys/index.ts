import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EMARSYS_API_USERNAME: {
    description: 'Emarsys API username',
    dashboard: 'https://suite.emarsys.com',
  },
  EMARSYS_API_SECRET: {
    description: 'Emarsys API secret',
    dashboard: 'https://suite.emarsys.com',
  },
});
