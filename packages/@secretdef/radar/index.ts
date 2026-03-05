import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RADAR_SECRET_KEY: {
    description: 'Radar server secret key',
    dashboard: 'https://radar.com/dashboard/settings',
  },
  RADAR_PUBLISHABLE_KEY: {
    description: 'Radar publishable key',
    dashboard: 'https://radar.com/dashboard/settings',
    required: false,
  },
});
