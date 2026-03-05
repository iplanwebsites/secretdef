import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UPCLOUD_USERNAME: {
    description: 'UpCloud API username',
    dashboard: 'https://hub.upcloud.com',
  },
  UPCLOUD_PASSWORD: {
    description: 'UpCloud API password',
    dashboard: 'https://hub.upcloud.com',
  },
});
