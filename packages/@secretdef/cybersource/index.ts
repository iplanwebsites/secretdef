import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CYBERSOURCE_ACCESS_KEY: {
    description: 'CyberSource access key',
    dashboard: 'https://ebc2.cybersource.com',
  },
  CYBERSOURCE_SECRET_KEY: {
    description: 'CyberSource secret key',
    dashboard: 'https://ebc2.cybersource.com',
  },
  CYBERSOURCE_MERCHANT_ID: {
    description: 'CyberSource merchant ID',
    dashboard: 'https://ebc2.cybersource.com',
  },
});
