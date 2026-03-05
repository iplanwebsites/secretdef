import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EBAY_APP_ID: {
    description: 'eBay application ID (client ID)',
    dashboard: 'https://developer.ebay.com/my/keys',
  },
  EBAY_CERT_ID: {
    description: 'eBay certificate ID (client secret)',
    dashboard: 'https://developer.ebay.com/my/keys',
  },
  EBAY_AUTH_TOKEN: {
    description: 'eBay OAuth user token',
    dashboard: 'https://developer.ebay.com/my/keys',
  },
});
