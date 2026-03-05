import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MARKETO_CLIENT_ID: {
    description: 'Marketo client ID',
    dashboard: 'https://developers.marketo.com',
  },
  MARKETO_CLIENT_SECRET: {
    description: 'Marketo client secret',
    dashboard: 'https://developers.marketo.com',
  },
  MARKETO_REST_ENDPOINT: {
    description: 'Marketo REST endpoint URL',
    dashboard: 'https://developers.marketo.com',
    validate: 'url',
  },
});
