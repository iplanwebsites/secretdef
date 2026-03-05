import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TEXTMAGIC_USERNAME: {
    description: 'TextMagic API username',
    dashboard: 'https://my.textmagic.com/online/api/rest-api/keys',
  },
  TEXTMAGIC_API_KEY: {
    description: 'TextMagic API key',
    dashboard: 'https://my.textmagic.com/online/api/rest-api/keys',
  },
});
