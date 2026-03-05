import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOCUSIGN_INTEGRATION_KEY: {
    description: 'DocuSign integration key',
    dashboard: 'https://developers.docusign.com',
  },
  DOCUSIGN_USER_ID: {
    description: 'DocuSign user ID',
    dashboard: 'https://developers.docusign.com',
  },
  DOCUSIGN_ACCOUNT_ID: {
    description: 'DocuSign account ID',
    dashboard: 'https://developers.docusign.com',
  },
});
