import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  JAMF_URL: {
    description: 'Jamf Pro server URL',
    dashboard: 'https://www.jamf.com',
    validate: 'url',
  },
  JAMF_CLIENT_ID: {
    description: 'Jamf Pro API client ID',
    dashboard: 'https://www.jamf.com',
  },
  JAMF_CLIENT_SECRET: {
    description: 'Jamf Pro API client secret',
    dashboard: 'https://www.jamf.com',
  },
});
