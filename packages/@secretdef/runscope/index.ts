import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RUNSCOPE_ACCESS_TOKEN: {
    description: 'Runscope access token',
    dashboard: 'https://www.runscope.com/applications',
  },
});
