import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VULTR_API_KEY: {
    description: 'Vultr API key',
    dashboard: 'https://my.vultr.com/settings/#settingsapi',
  },
});
