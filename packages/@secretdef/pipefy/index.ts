import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PIPEFY_TOKEN: {
    description: 'Pipefy personal access token',
    dashboard: 'https://app.pipefy.com/tokens',
  },
});
