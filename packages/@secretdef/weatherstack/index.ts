import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEATHERSTACK_API_KEY: {
    description: 'Weatherstack API key',
    dashboard: 'https://weatherstack.com/dashboard',
  },
});
