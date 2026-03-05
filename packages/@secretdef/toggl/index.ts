import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TOGGL_API_TOKEN: {
    description: 'Toggl Track API token',
    dashboard: 'https://track.toggl.com/profile',
  },
});
