import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHANNEL_PLUGIN_KEY: {
    description: 'Channel Talk plugin key',
    dashboard: 'https://desk.channel.io',
  },
  CHANNEL_ACCESS_SECRET: {
    description: 'Channel Talk access secret',
    dashboard: 'https://desk.channel.io',
    required: false,
  },
});
