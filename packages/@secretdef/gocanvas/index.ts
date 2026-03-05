import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOCANVAS_USERNAME: {
    description: 'GoCanvas API username',
    dashboard: 'https://www.gocanvas.com',
  },
  GOCANVAS_API_KEY: {
    description: 'GoCanvas API key',
    dashboard: 'https://www.gocanvas.com',
  },
});
