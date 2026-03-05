import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BREEZY_API_KEY: {
    description: 'Breezy HR API key',
    dashboard: 'https://breezy.hr',
  },
  BREEZY_COMPANY_ID: {
    description: 'Breezy HR company ID',
    dashboard: 'https://breezy.hr',
    required: false,
  },
});
