import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IGDB_CLIENT_ID: {
    description: 'IGDB (Twitch) client ID',
    dashboard: 'https://api-docs.igdb.com/#account-creation',
  },
  IGDB_CLIENT_SECRET: {
    description: 'IGDB (Twitch) client secret',
    dashboard: 'https://api-docs.igdb.com/#account-creation',
  },
});
