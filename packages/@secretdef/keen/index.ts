import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KEEN_PROJECT_ID: {
    description: 'Keen.io project ID',
    dashboard: 'https://keen.io/projects',
  },
  KEEN_WRITE_KEY: {
    description: 'Keen.io write key',
    dashboard: 'https://keen.io/projects',
  },
  KEEN_READ_KEY: {
    description: 'Keen.io read key',
    dashboard: 'https://keen.io/projects',
    required: false,
  },
});
