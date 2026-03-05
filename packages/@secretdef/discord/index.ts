import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DISCORD_TOKEN: {
    description: 'Discord bot token for API authentication',
    dashboard: 'https://discord.com/developers/applications',
  },
  DISCORD_BOT_TOKEN: {
    description: 'Discord bot token (alternative variable name)',
    dashboard: 'https://discord.com/developers/applications',
    required: false,
  },
  DISCORD_CLIENT_ID: {
    description: 'Discord application client ID',
    dashboard: 'https://discord.com/developers/applications',
    required: false,
  },
  DISCORD_CLIENT_SECRET: {
    description: 'Discord application client secret',
    dashboard: 'https://discord.com/developers/applications',
    required: false,
  },
  APPLICATION_ID: {
    description: 'Discord application ID for slash commands',
    dashboard: 'https://discord.com/developers/applications',
    required: false,
  },
});
