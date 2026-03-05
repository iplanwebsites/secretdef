import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VIMEO_ACCESS_TOKEN: {
    description: 'Vimeo access token',
    dashboard: 'https://developer.vimeo.com/apps',
  },
  VIMEO_CLIENT_ID: {
    description: 'Vimeo client ID',
    dashboard: 'https://developer.vimeo.com/apps',
    required: false,
  },
  VIMEO_CLIENT_SECRET: {
    description: 'Vimeo client secret',
    dashboard: 'https://developer.vimeo.com/apps',
    required: false,
  },
});
