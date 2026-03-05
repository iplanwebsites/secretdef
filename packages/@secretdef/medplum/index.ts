import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MEDPLUM_CLIENT_ID: {
    description: 'Medplum client ID',
    dashboard: 'https://app.medplum.com/admin/client',
  },
  MEDPLUM_CLIENT_SECRET: {
    description: 'Medplum client secret',
    dashboard: 'https://app.medplum.com/admin/client',
  },
  MEDPLUM_BASE_URL: {
    description: 'Medplum base URL',
    dashboard: 'https://app.medplum.com',
    validate: 'url',
    required: false,
  },
});
