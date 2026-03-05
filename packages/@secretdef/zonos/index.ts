import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZONOS_API_KEY: {
    description: 'Zonos cross-border API key',
    dashboard: 'https://zonos.com',
  },
});
