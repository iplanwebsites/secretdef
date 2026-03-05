import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BRAINTRUST_API_KEY: {
    description: 'Braintrust API key',
    dashboard: 'https://www.braintrust.dev/app/settings/api-keys',
  },
});
