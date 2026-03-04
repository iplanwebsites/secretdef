import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POSTMARK_SERVER_TOKEN: {
    envVar: 'POSTMARK_SERVER_TOKEN',
    description: 'Postmark server API token — https://account.postmarkapp.com/servers',
  },
});
