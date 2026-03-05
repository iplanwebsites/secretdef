import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOCKER_USERNAME: {
    description: 'Docker Hub username',
    dashboard: 'https://hub.docker.com/settings/security',
  },
  DOCKER_PASSWORD: {
    description: 'Docker Hub access token',
    dashboard: 'https://hub.docker.com/settings/security',
  },
});
