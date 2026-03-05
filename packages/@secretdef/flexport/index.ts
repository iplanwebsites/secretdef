import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FLEXPORT_API_KEY: {
    description: 'Flexport API key',
    dashboard: 'https://www.flexport.com/developer',
  },
});
