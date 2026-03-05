import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MONDOO_CONFIG_BASE64: {
    description: 'Mondoo config (base64)',
    dashboard: 'https://console.mondoo.com',
  },
});
