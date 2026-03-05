import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PORTAINER_API_KEY: {
    description: 'Portainer API key',
    dashboard: 'https://app.portainer.io',
  },
  PORTAINER_URL: {
    description: 'Portainer instance URL',
    dashboard: 'https://app.portainer.io',
    validate: 'url',
  },
});
