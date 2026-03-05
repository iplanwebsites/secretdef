import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NTFY_URL: {
    description: 'ntfy server URL',
    dashboard: 'https://ntfy.sh',
    validate: 'url',
  },
  NTFY_TOKEN: {
    description: 'ntfy access token',
    dashboard: 'https://ntfy.sh',
    required: false,
  },
});
