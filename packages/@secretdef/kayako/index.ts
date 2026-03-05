import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KAYAKO_URL: {
    description: 'Kayako instance URL',
    dashboard: 'https://kayako.com',
    validate: 'url',
  },
  KAYAKO_EMAIL: {
    description: 'Kayako admin email',
    dashboard: 'https://kayako.com',
  },
  KAYAKO_PASSWORD: {
    description: 'Kayako admin password',
    dashboard: 'https://kayako.com',
  },
});
