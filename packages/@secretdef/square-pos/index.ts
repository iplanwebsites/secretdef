import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SQUARE_ACCESS_TOKEN_POS: {
    description: 'Square POS access token',
    dashboard: 'https://developer.squareup.com/apps',
  },
});
