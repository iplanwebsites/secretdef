import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRANSPORT_API_ID: {
    description: 'Transport API app ID',
    dashboard: 'https://developer.transportapi.com',
  },
  TRANSPORT_API_KEY: {
    description: 'Transport API app key',
    dashboard: 'https://developer.transportapi.com',
  },
});
