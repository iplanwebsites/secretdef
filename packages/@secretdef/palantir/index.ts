import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PALANTIR_TOKEN: {
    description: 'Palantir Foundry auth token',
    dashboard: 'https://www.palantir.com/palantir-foundry/',
  },
  PALANTIR_URL: {
    description: 'Palantir Foundry URL',
    dashboard: 'https://www.palantir.com',
    validate: 'url',
    required: false,
  },
});
