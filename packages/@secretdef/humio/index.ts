import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HUMIO_TOKEN: {
    description: 'Humio/LogScale ingest token',
    dashboard: 'https://cloud.humio.com',
  },
  HUMIO_URL: {
    description: 'Humio/LogScale URL',
    dashboard: 'https://cloud.humio.com',
    validate: 'url',
    required: false,
  },
});
