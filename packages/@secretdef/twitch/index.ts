import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TWITCH_CLIENT_ID: {
    description: 'Twitch application client ID',
    dashboard: 'https://dev.twitch.tv/console/apps',
  },
  TWITCH_CLIENT_SECRET: {
    description: 'Twitch application client secret',
    dashboard: 'https://dev.twitch.tv/console/apps',
  },
  TWITCH_WEBHOOK_SECRET: {
    description: 'Twitch EventSub webhook secret',
    dashboard: 'https://dev.twitch.tv/console/apps',
    required: false,
  },
});
