import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TOMTOM_API_KEY: {
    description: 'TomTom API key',
    dashboard: 'https://developer.tomtom.com/user/me/apps',
  },
});
