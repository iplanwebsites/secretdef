import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  E2B_API_KEY: { description: 'E2B API key for cloud sandboxes',
    dashboard: 'https://e2b.dev/dashboard' },
});
