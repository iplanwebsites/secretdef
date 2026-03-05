import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BARK_SERVER_URL: {
    description: 'Bark push notification server URL',
    dashboard: 'https://github.com/nicklockwood/Bark',
    validate: 'url',
  },
  BARK_DEVICE_KEY: {
    description: 'Bark device key',
    dashboard: 'https://github.com/nicklockwood/Bark',
  },
});
