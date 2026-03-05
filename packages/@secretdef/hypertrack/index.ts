import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HYPERTRACK_ACCOUNT_ID: {
    description: 'HyperTrack account ID',
    dashboard: 'https://dashboard.hypertrack.com',
  },
  HYPERTRACK_SECRET_KEY: {
    description: 'HyperTrack secret key',
    dashboard: 'https://dashboard.hypertrack.com',
  },
});
