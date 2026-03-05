import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZENML_API_KEY: {
    description: 'ZenML API key',
    dashboard: 'https://cloud.zenml.io',
  },
  ZENML_SERVER_URL: {
    description: 'ZenML server URL',
    dashboard: 'https://cloud.zenml.io',
    validate: 'url',
    required: false,
  },
});
