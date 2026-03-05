import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IMGPROXY_KEY: {
    description: 'imgproxy hex-encoded key',
    dashboard: 'https://imgproxy.net',
  },
  IMGPROXY_SALT: {
    description: 'imgproxy hex-encoded salt',
    dashboard: 'https://imgproxy.net',
  },
  IMGPROXY_URL: {
    description: 'imgproxy base URL',
    dashboard: 'https://imgproxy.net',
    validate: 'url',
    required: false,
  },
});
