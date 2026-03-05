import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KICKBOX_API_KEY: {
    description: 'Kickbox email verification API key',
    dashboard: 'https://app.kickbox.com/settings/keys',
  },
});
