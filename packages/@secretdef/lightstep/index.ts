import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LIGHTSTEP_ACCESS_TOKEN: {
    description: 'Lightstep access token',
    dashboard: 'https://app.lightstep.com',
  },
});
