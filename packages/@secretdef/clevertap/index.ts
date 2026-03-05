import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLEVERTAP_ACCOUNT_ID: {
    description: 'CleverTap account ID',
    dashboard: 'https://dashboard.clevertap.com',
  },
  CLEVERTAP_PASSCODE: {
    description: 'CleverTap account passcode',
    dashboard: 'https://dashboard.clevertap.com',
  },
});
