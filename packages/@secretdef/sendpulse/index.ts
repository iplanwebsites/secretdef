import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SENDPULSE_API_ID: {
    description: 'SendPulse API user ID',
    dashboard: 'https://login.sendpulse.com/settings/api/',
  },
  SENDPULSE_API_SECRET: {
    description: 'SendPulse API secret',
    dashboard: 'https://login.sendpulse.com/settings/api/',
  },
});
