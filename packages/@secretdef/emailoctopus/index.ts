import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EMAILOCTOPUS_API_KEY: {
    description: 'EmailOctopus API key',
    dashboard: 'https://emailoctopus.com/api-documentation',
  },
});
