import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DRONE_SERVER: {
    description: 'Drone CI server URL',
    dashboard: 'https://drone.io',
    validate: 'url',
  },
  DRONE_TOKEN: {
    description: 'Drone CI API token',
    dashboard: 'https://drone.io',
  },
});
