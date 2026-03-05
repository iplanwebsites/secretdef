import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TALEND_API_KEY: {
    description: 'Talend Cloud API key',
    dashboard: 'https://cloud.talend.com',
  },
});
