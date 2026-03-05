import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TWITCH_EXT_CLIENT_ID: {
    description: 'Twitch extension client ID',
    dashboard: 'https://dev.twitch.tv/console/extensions',
  },
  TWITCH_EXT_SECRET: {
    description: 'Twitch extension secret',
    dashboard: 'https://dev.twitch.tv/console/extensions',
  },
});
