import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APNS_KEY_ID: {
    description: 'APNs key ID',
    dashboard: 'https://developer.apple.com/account/resources/authkeys',
  },
  APNS_TEAM_ID: {
    description: 'Apple Developer team ID',
    dashboard: 'https://developer.apple.com/account',
  },
  APNS_AUTH_KEY: {
    description: 'APNs authentication key (.p8)',
    dashboard: 'https://developer.apple.com/account/resources/authkeys',
  },
});
