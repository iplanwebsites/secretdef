import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BUDDY_TOKEN: {
    description: 'Buddy personal access token',
    dashboard: 'https://app.buddy.works',
  },
});
