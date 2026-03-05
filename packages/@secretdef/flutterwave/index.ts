import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FLUTTERWAVE_SECRET_KEY: {
    description: 'Flutterwave secret key',
    dashboard: 'https://dashboard.flutterwave.com/dashboard/settings/apis',
  },
  FLUTTERWAVE_PUBLIC_KEY: {
    description: 'Flutterwave public key',
    dashboard: 'https://dashboard.flutterwave.com/dashboard/settings/apis',
    required: false,
  },
});
