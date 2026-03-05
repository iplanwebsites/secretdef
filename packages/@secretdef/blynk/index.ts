import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BLYNK_TOKEN: {
    description: 'Blynk auth token',
    dashboard: 'https://blynk.cloud',
  },
  BLYNK_SERVER: {
    description: 'Blynk server URL',
    dashboard: 'https://blynk.cloud',
    validate: 'url',
    required: false,
  },
});
