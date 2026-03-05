import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TYPESENSE_API_KEY: { description: 'Typesense API key',
    dashboard: 'https://cloud.typesense.org/' },
  TYPESENSE_HOST: { description: 'Typesense host',
    dashboard: 'https://cloud.typesense.org/', required: false },
  TYPESENSE_PORT: { description: 'Typesense port',
    dashboard: 'https://cloud.typesense.org/', required: false },
});
