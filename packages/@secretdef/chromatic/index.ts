import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHROMATIC_PROJECT_TOKEN: {
    description: 'Chromatic project token',
    dashboard: 'https://www.chromatic.com/manage',
  },
});
