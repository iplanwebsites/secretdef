import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PARTNERSTACK_PUBLIC_KEY: {
    description: 'PartnerStack public key',
    dashboard: 'https://app.partnerstack.com',
  },
  PARTNERSTACK_SECRET_KEY: {
    description: 'PartnerStack secret key',
    dashboard: 'https://app.partnerstack.com',
  },
});
