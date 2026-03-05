import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENMRS_BASE_URL: {
    description: 'OpenMRS server base URL',
    dashboard: 'https://openmrs.org',
    validate: 'url',
  },
  OPENMRS_USERNAME: {
    description: 'OpenMRS username',
    dashboard: 'https://openmrs.org',
  },
  OPENMRS_PASSWORD: {
    description: 'OpenMRS password',
    dashboard: 'https://openmrs.org',
  },
});
