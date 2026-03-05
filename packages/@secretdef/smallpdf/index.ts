import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SMALLPDF_API_KEY: {
    description: 'Smallpdf API key',
    dashboard: 'https://smallpdf.com',
  },
});
