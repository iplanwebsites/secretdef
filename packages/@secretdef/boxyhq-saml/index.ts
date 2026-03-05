import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BOXYHQ_SAML_API_KEY: {
    description: 'BoxyHQ SAML Jackson API key',
    dashboard: 'https://app.eu.boxyhq.com',
  },
  BOXYHQ_SAML_HOST: {
    description: 'BoxyHQ SAML Jackson host URL',
    dashboard: 'https://app.eu.boxyhq.com',
    validate: 'url',
  },
});
