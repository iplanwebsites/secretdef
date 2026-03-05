import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BRAINTREE_MERCHANT_ID: { description: 'Braintree merchant ID',
    dashboard: 'https://developer.paypal.com/braintree/docs/start/overview' },
  BRAINTREE_PUBLIC_KEY: { description: 'Braintree public key',
    dashboard: 'https://developer.paypal.com/braintree/docs/start/overview' },
  BRAINTREE_PRIVATE_KEY: { description: 'Braintree private key',
    dashboard: 'https://developer.paypal.com/braintree/docs/start/overview' },
  BRAINTREE_ENVIRONMENT: { description: 'Braintree environment (sandbox or production)',
    dashboard: 'https://developer.paypal.com/braintree/docs/start/overview', required: false },
});
