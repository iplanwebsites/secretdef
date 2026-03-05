import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_CONTENT_MODERATOR_KEY: {
    description: 'Azure Content Moderator key',
    dashboard: 'https://portal.azure.com',
  },
  AZURE_CONTENT_MODERATOR_ENDPOINT: {
    description: 'Azure Content Moderator endpoint',
    dashboard: 'https://portal.azure.com',
    validate: 'url',
  },
});
