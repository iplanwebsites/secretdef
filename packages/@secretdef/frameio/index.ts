import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRAMEIO_TOKEN: {
    description: 'Frame.io developer token',
    dashboard: 'https://developer.frame.io',
  },
});
