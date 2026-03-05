import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BLUESNAP_USERNAME: {
    description: 'BlueSnap API username',
    dashboard: 'https://www.bluesnap.com',
  },
  BLUESNAP_PASSWORD: {
    description: 'BlueSnap API password',
    dashboard: 'https://www.bluesnap.com',
  },
});
