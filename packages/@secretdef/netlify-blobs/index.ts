import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NETLIFY_BLOBS_CONTEXT: {
    description: 'Netlify Blobs deploy context',
    dashboard: 'https://app.netlify.com',
  },
});
