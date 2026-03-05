import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DROPBOX_ACCESS_TOKEN: {
    description: 'Dropbox access token',
    dashboard: 'https://www.dropbox.com/developers/apps',
  },
  DROPBOX_APP_KEY: {
    description: 'Dropbox app key',
    dashboard: 'https://www.dropbox.com/developers/apps',
    required: false,
  },
  DROPBOX_APP_SECRET: {
    description: 'Dropbox app secret',
    dashboard: 'https://www.dropbox.com/developers/apps',
    required: false,
  },
});
