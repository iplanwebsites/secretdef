import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONJUR_APPLIANCE_URL: {
    description: 'Conjur appliance URL',
    dashboard: 'https://www.conjur.org',
    validate: 'url',
  },
  CONJUR_ACCOUNT: {
    description: 'Conjur account name',
    dashboard: 'https://www.conjur.org',
  },
  CONJUR_AUTHN_API_KEY: {
    description: 'Conjur authentication API key',
    dashboard: 'https://www.conjur.org',
    required: false,
  },
});
