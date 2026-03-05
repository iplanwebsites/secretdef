import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MEZMO_API_KEY: {
    description: 'Mezmo API key',
    dashboard: 'https://app.mezmo.com/manage/profile',
  },
  MEZMO_INGESTION_KEY: {
    description: 'Mezmo ingestion key',
    dashboard: 'https://app.mezmo.com',
    required: false,
  },
});
