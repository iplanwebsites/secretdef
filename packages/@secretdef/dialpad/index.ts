import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DIALPAD_API_KEY: {
    description: 'Dialpad API key',
    dashboard: 'https://dialpad.com/developer',
  },
});
