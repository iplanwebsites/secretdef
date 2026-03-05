import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ORBIT_API_KEY: {
    description: 'Orbit community API key',
    dashboard: 'https://app.orbit.love',
  },
  ORBIT_WORKSPACE_ID: {
    description: 'Orbit workspace ID',
    dashboard: 'https://app.orbit.love',
  },
});
