import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COMMENTO_ORIGIN: {
    description: 'Commento instance URL',
    dashboard: 'https://commento.io',
    validate: 'url',
  },
});
