import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REVIEWBOARD_URL: {
    description: 'Review Board server URL',
    dashboard: 'https://www.reviewboard.org',
    validate: 'url',
  },
  REVIEWBOARD_API_TOKEN: {
    description: 'Review Board API token',
    dashboard: 'https://www.reviewboard.org',
  },
});
