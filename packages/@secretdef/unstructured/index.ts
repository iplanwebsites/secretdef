import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UNSTRUCTURED_API_KEY: {
    description: 'Unstructured API key',
    dashboard: 'https://app.unstructured.io',
  },
});
