import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HIVE_API_KEY: {
    description: 'Hive Moderation API key',
    dashboard: 'https://hivemoderation.com/api_access',
  },
});
