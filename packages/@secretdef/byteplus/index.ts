import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BYTEPLUS_ACCESS_KEY: {
    description: 'BytePlus access key',
    dashboard: 'https://console.byteplus.com',
  },
  BYTEPLUS_SECRET_KEY: {
    description: 'BytePlus secret key',
    dashboard: 'https://console.byteplus.com',
  },
});
