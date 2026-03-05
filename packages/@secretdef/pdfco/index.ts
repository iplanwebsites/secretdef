import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PDFCO_API_KEY: {
    description: 'PDF.co API key',
    dashboard: 'https://app.pdf.co/settings',
  },
});
