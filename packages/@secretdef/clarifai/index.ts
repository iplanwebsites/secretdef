import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLARIFAI_PAT: {
    description: 'Clarifai personal access token',
    dashboard: 'https://clarifai.com/settings/security',
  },
});
