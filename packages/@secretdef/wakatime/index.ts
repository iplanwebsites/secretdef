import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WAKATIME_API_KEY: {
    description: 'WakaTime API key',
    dashboard: 'https://wakatime.com/settings/account',
  },
});
