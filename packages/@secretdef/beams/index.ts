import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BEAMS_INSTANCE_ID: {
    description: 'Pusher Beams instance ID',
    dashboard: 'https://dashboard.pusher.com/beams',
  },
  BEAMS_SECRET_KEY: {
    description: 'Pusher Beams secret key',
    dashboard: 'https://dashboard.pusher.com/beams',
  },
});
