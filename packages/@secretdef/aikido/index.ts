import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIKIDO_TOKEN: {
    description: 'Aikido Security token',
    dashboard: 'https://app.aikido.dev',
  },
});
