import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOCRAPTOR_API_KEY: {
    description: 'DocRaptor PDF generation API key',
    dashboard: 'https://docraptor.com/documentation',
  },
});
