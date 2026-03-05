import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIELDWIRE_API_TOKEN: {
    description: 'Fieldwire API token',
    dashboard: 'https://app.fieldwire.com',
  },
});
