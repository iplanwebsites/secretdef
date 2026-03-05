import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ORY_SDK_URL: {
    description: 'Ory SDK URL',
    dashboard: 'https://console.ory.sh',
    validate: 'url',
  },
  ORY_API_KEY: {
    description: 'Ory API key',
    dashboard: 'https://console.ory.sh',
    required: false,
  },
});
