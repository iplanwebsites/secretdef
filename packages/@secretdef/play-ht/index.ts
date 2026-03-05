import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLAY_HT_API_KEY: {
    description: 'PlayHT API key',
    dashboard: 'https://play.ht/studio/api-access',
  },
  PLAY_HT_USER_ID: {
    description: 'PlayHT user ID',
    dashboard: 'https://play.ht/studio/api-access',
  },
});
