import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RAYCAST_API_TOKEN: {
    description: 'Raycast API token',
    dashboard: 'https://raycast.com',
  },
});
