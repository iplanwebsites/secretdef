import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LISTMONK_URL: {
    description: 'Listmonk instance URL',
    dashboard: 'https://listmonk.app',
    validate: 'url',
  },
  LISTMONK_USERNAME: {
    description: 'Listmonk admin username',
    dashboard: 'https://listmonk.app',
  },
  LISTMONK_PASSWORD: {
    description: 'Listmonk admin password',
    dashboard: 'https://listmonk.app',
  },
});
