import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PARTICLE_ACCESS_TOKEN: {
    description: 'Particle access token',
    dashboard: 'https://console.particle.io',
  },
});
