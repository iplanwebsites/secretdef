import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SATISMETER_WRITE_KEY: {
    description: 'SatisMeter write key',
    dashboard: 'https://app.satismeter.com',
  },
});
