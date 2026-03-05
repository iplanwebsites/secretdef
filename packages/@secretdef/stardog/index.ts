import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STARDOG_URL: {
    description: 'Stardog server URL',
    dashboard: 'https://www.stardog.com',
    validate: 'url',
  },
  STARDOG_USERNAME: {
    description: 'Stardog username',
    dashboard: 'https://www.stardog.com',
  },
  STARDOG_PASSWORD: {
    description: 'Stardog password',
    dashboard: 'https://www.stardog.com',
  },
});
