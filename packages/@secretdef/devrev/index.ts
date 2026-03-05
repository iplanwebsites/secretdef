import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEVREV_PAT: {
    description: 'DevRev personal access token',
    dashboard: 'https://devrev.ai',
  },
});
