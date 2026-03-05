import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OWNCLOUD_URL: {
    description: 'ownCloud instance URL',
    dashboard: 'https://owncloud.com',
    validate: 'url',
  },
  OWNCLOUD_USERNAME: {
    description: 'ownCloud username',
    dashboard: 'https://owncloud.com',
  },
  OWNCLOUD_PASSWORD: {
    description: 'ownCloud password',
    dashboard: 'https://owncloud.com',
  },
});
