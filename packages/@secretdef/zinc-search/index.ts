import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZINC_HOST: {
    description: 'ZincSearch host URL',
    dashboard: 'https://zincsearch.com',
    validate: 'url',
  },
  ZINC_USER: {
    description: 'ZincSearch admin username',
    dashboard: 'https://zincsearch.com',
  },
  ZINC_PASSWORD: {
    description: 'ZincSearch admin password',
    dashboard: 'https://zincsearch.com',
  },
});
