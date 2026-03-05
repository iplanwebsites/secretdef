import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPACELIFT_API_KEY_ID: {
    description: 'Spacelift API key ID',
    dashboard: 'https://spacelift.io',
  },
  SPACELIFT_API_KEY_SECRET: {
    description: 'Spacelift API key secret',
    dashboard: 'https://spacelift.io',
  },
});
