import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPEN_EXCHANGE_RATES_APP_ID: {
    description: 'Open Exchange Rates app ID',
    dashboard: 'https://openexchangerates.org/account/app-ids',
  },
});
