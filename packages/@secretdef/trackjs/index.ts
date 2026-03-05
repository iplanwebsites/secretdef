import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRACKJS_TOKEN: {
    description: 'TrackJS application token',
    dashboard: 'https://my.trackjs.com',
  },
});
