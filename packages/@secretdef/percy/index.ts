import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PERCY_TOKEN: {
    description: 'Percy token for visual testing',
    dashboard: 'https://percy.io',
  },
});
