import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TYPEBOT_TOKEN: {
    description: 'Typebot API token',
    dashboard: 'https://app.typebot.io',
  },
});
