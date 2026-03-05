import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NAKAMA_SERVER_KEY: {
    description: 'Nakama server key',
    dashboard: 'https://heroiclabs.com',
  },
  NAKAMA_HOST: {
    description: 'Nakama server host',
    dashboard: 'https://heroiclabs.com',
  },
});
