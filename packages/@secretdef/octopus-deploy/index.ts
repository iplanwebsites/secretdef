import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OCTOPUS_URL: {
    description: 'Octopus Deploy server URL',
    dashboard: 'https://octopus.com',
    validate: 'url',
  },
  OCTOPUS_API_KEY: {
    description: 'Octopus Deploy API key',
    dashboard: 'https://octopus.com',
  },
});
