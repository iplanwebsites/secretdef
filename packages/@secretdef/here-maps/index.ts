import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HERE_API_KEY: {
    description: 'HERE Maps API key',
    dashboard: 'https://platform.here.com/admin/apps',
  },
});
