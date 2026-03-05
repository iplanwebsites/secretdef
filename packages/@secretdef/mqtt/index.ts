import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MQTT_BROKER_URL: {
    description: 'MQTT broker URL',
    dashboard: 'https://mosquitto.org',
    validate: 'url',
  },
  MQTT_USERNAME: {
    description: 'MQTT broker username',
    dashboard: 'https://mosquitto.org',
    required: false,
  },
  MQTT_PASSWORD: {
    description: 'MQTT broker password',
    dashboard: 'https://mosquitto.org',
    required: false,
  },
});
