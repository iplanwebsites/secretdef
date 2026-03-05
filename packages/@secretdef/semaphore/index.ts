import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SEMAPHORE_API_TOKEN: {
    description: 'Semaphore CI API token',
    dashboard: 'https://id.semaphoreci.com',
  },
});
