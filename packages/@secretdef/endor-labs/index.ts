import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ENDOR_API_KEY: {
    description: 'Endor Labs API key',
    dashboard: 'https://app.endorlabs.com',
  },
  ENDOR_NAMESPACE: {
    description: 'Endor Labs namespace',
    dashboard: 'https://app.endorlabs.com',
    required: false,
  },
});
