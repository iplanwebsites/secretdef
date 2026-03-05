import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CROWDSEC_API_KEY: {
    description: 'CrowdSec API key',
    dashboard: 'https://app.crowdsec.net',
  },
  CROWDSEC_URL: {
    description: 'CrowdSec LAPI URL',
    dashboard: 'https://app.crowdsec.net',
    validate: 'url',
    required: false,
  },
});
