import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PROTOCOL_API_KEY: {
    description: 'Protocol API key',
    dashboard: 'https://protocol.chat',
  },
});
