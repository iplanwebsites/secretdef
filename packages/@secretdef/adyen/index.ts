import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ADYEN_API_KEY: { description: 'Adyen API key',
    dashboard: 'https://ca-test.adyen.com/ca/ca/config/api_credentials_new.shtml' },
  ADYEN_MERCHANT_ACCOUNT: { description: 'Adyen merchant account name',
    dashboard: 'https://ca-test.adyen.com/' },
  ADYEN_HMAC_KEY: { description: 'Adyen HMAC key for webhook verification',
    dashboard: 'https://ca-test.adyen.com/', required: false },
});
