import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DISCORD_WEBHOOK_URL: {
    description: 'Discord webhook URL',
    dashboard: 'https://discord.com/developers/applications',
    validate: 'url',
  },
});
