import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MANIFEST_API_KEY: {
    description: 'Manifest API key',
    dashboard: 'https://manifest.build',
  },
});
