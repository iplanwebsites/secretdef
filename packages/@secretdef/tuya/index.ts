import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TUYA_ACCESS_ID: {
    description: 'Tuya IoT access ID',
    dashboard: 'https://iot.tuya.com',
  },
  TUYA_ACCESS_SECRET: {
    description: 'Tuya IoT access secret',
    dashboard: 'https://iot.tuya.com',
  },
});
