import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EXPO_TOKEN: {
    description: 'Expo access token',
    dashboard: 'https://expo.dev/settings/access-tokens',
  },
});
