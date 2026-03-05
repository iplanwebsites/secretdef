import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AKENEO_CLIENT_ID: {
    description: 'Akeneo OAuth client ID',
    dashboard: 'https://help.akeneo.com/pim/serenity/articles/manage-your-connections.html',
  },
  AKENEO_SECRET: {
    description: 'Akeneo OAuth secret',
    dashboard: 'https://help.akeneo.com/pim/serenity/articles/manage-your-connections.html',
  },
  AKENEO_BASE_URL: {
    description: 'Akeneo PIM base URL',
    dashboard: 'https://help.akeneo.com',
    validate: 'url',
  },
});
