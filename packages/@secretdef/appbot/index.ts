import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPBOT_API_KEY: {
    description: 'Appbot API key',
    dashboard: 'https://appbot.co',
  },
});
