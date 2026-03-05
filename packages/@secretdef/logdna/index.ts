import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOGDNA_KEY: {
    description: 'LogDNA/Mezmo ingestion key',
    dashboard: 'https://app.logdna.com',
  },
});
