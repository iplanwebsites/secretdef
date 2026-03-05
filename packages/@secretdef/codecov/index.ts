import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CODECOV_TOKEN: {
    description: 'Codecov upload token',
    dashboard: 'https://app.codecov.io',
  },
});
